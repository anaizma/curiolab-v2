import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<Payload>;

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const subject = (body.subject ?? "").trim() || "Website message";
    const message = (body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = "CurioLab <curiolab@resend.dev>";


    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "Missing RESEND_API_KEY." },
        { status: 500 }
      );
    }
    if (!to) {
      return NextResponse.json(
        { ok: false, error: "Missing CONTACT_TO_EMAIL." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br/>");

    const result = await resend.emails.send({
      from: "CurioLab <curiolab@resend.dev>",
      to: ["anaizma16@gmail.com"],                
      replyTo: email,
      subject: `[CurioLab] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
        <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial; line-height: 1.6; color:#0b1220">
          <h2 style="margin:0 0 12px 0;">New message from CurioLab site</h2>
          <p style="margin:0 0 6px 0;"><strong>Name:</strong> ${safeName}</p>
          <p style="margin:0 0 6px 0;"><strong>Email:</strong> ${safeEmail}</p>
          <p style="margin:0 0 14px 0;"><strong>Subject:</strong> ${safeSubject}</p>
          <div style="padding:12px 14px; border:1px solid rgba(11,18,32,.14); border-radius:12px; background:rgba(255,255,255,.7)">
            ${safeMessage}
          </div>
        </div>
      `,
    });

    if ((result as any)?.error) {
      console.error("RESEND ERROR:", (result as any).error);
      return NextResponse.json(
        { ok: false, error: (result as any).error?.message ?? "Resend failed." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("CONTACT ROUTE ERROR:", err);
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Invalid request." },
      { status: 400 }
    );
  }
}
