"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Status =
  | { type: "idle" }
  | { type: "sending" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export default function ContactPage() {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  const canSubmit = useMemo(() => status.type !== "sending", [status.type]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.type === "sending") return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    const first = String(fd.get("firstName") || "").trim();
    const last = String(fd.get("lastName") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const role = String(fd.get("role") || "").trim();
    const subject = String(fd.get("subject") || "").trim();
    const message = String(fd.get("message") || "").trim();

    const name = `${first} ${last}`.trim();

    if (!name || !email || !message) {
      setStatus({ type: "error", message: "Please fill in name, email, and message." });
      return;
    }

    setStatus({ type: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject: subject ? `${subject} (${role})` : `Website message (${role})`,
          message,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.ok) {
        setStatus({ type: "error", message: data?.error || "Failed to send. Try again." });
        return;
      }

      form.reset();
      setStatus({ type: "success", message: "Message sent! We’ll get back to you soon." });
    } catch {
      setStatus({ type: "error", message: "Network error. Try again." });
    }
  }

  return (
    <main className="contactWrap">
      <header className="contactHero">
        <h1 className="contactTitle">Contact</h1>
        <p className="contactSubtitle">
          Questions about joining a cohort, mentoring, or sponsoring? Send a message and we’ll get back to you soon.
        </p>
      </header>

      <section className="contactGrid" aria-label="Contact content">
        {/* FORM */}
        <div className="contactCard contactFormCard">
          <div className="contactCardTop">
            <div>
              <h2 className="contactH2">Send us a message</h2>
              <p className="contactP">
                We typically respond within a few days!
              </p>
            </div>

            <div className="contactMini">
              <div className="contactMiniDot" />
              <div className="contactMiniText">Inbox: @acuriolab.org</div>
            </div>
          </div>

          {status.type === "success" && <div className="contactAlert success">{status.message}</div>}
          {status.type === "error" && <div className="contactAlert error">{status.message}</div>}

          <form className="contactForm" onSubmit={onSubmit}>
            <div className="contactRow2">
              <label className="contactField">
                <span className="contactLabel">First name</span>
                <input name="firstName" className="contactInput" placeholder="First" autoComplete="given-name" />
              </label>

              <label className="contactField">
                <span className="contactLabel">Last name</span>
                <input name="lastName" className="contactInput" placeholder="Last" autoComplete="family-name" />
              </label>
            </div>

            <div className="contactRow2">
              <label className="contactField">
                <span className="contactLabel">Email</span>
                <input name="email" className="contactInput" placeholder="you@email.com" type="email" autoComplete="email" />
              </label>

              <label className="contactField">
                <span className="contactLabel">I’m reaching out as…</span>
                <select name="role" className="contactSelect" defaultValue="parent">
                  <option value="student">Student</option>
                  <option value="mentor">Mentor</option>
                  <option value="sponsor">Sponsor / Supporter</option>
                  <option value="parent">Parent</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </div>

            <label className="contactField">
              <span className="contactLabel">Subject</span>
              <input name="subject" className="contactInput" placeholder="Subject" />
            </label>

            <label className="contactField">
              <span className="contactLabel">Message</span>
              <textarea
                name="message"
                className="contactTextarea"
                placeholder="Tell us what you’re looking for and any details you have!"
                rows={7}
              />
            </label>

            <div className="contactActions">
              <button className="btn primary" type="submit" disabled={!canSubmit}>
                {status.type === "sending" ? "Sending…" : "Send message →"}
              </button>

              <div className="contactTinyNote">
                By submitting, your message will be emailed to our team inbox.
              </div>
            </div>
          </form>
        </div>

        {/* RIGHT COLUMN */}
        <aside className="contactAside" aria-label="Quick paths">
          <div className="contactCard">
            <h2 className="contactH2">Quick paths</h2>
            <p className="contactP">If you already know what you’re looking for, these pages are faster than email.</p>

            <div className="contactQuickGrid">
              <Link className="contactQuickCard" href="/students">
                <div className="contactQuickKicker">Students</div>
                <div className="contactQuickTitle">Program Info + Apply</div>
                <div className="contactQuickArrow">→</div>
              </Link>

              <Link className="contactQuickCard" href="/mentors">
                <div className="contactQuickKicker">Mentors</div>
                <div className="contactQuickTitle">Role + Time Commitment</div>
                <div className="contactQuickArrow">→</div>
              </Link>

              <Link className="contactQuickCard" href="/sponsor-support">
                <div className="contactQuickKicker">Sponsors</div>
                <div className="contactQuickTitle">Partner With CurioLab</div>
                <div className="contactQuickArrow">→</div>
              </Link>
            </div>
          </div>

          <div className="contactCard contactAltCard">
            <h2 className="contactH2">Prefer email?</h2>
            <p className="contactP">
              You can also reach us directly. Include a short subject line and any deadlines.
            </p>

            <div className="contactEmailRow">
              <span className="contactEmailPill">aizma@acuriolab.org</span>
              <span className="contactEmailSub">We reply within a few days.</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="contactFaq" aria-label="FAQ">
        <div className="contactFaqHead">
          <h2 className="contactH2">FAQ</h2>
          <p className="contactP">Some frequently asked questions:</p>
        </div>

        <div className="contactFaqGrid">
          <details className="contactFaqItem">
            <summary>Do I need experience to join as a student?</summary>
            <p>No — CurioLab starts with fundamentals and grows week by week. Curiosity and consistency matter most.</p>
          </details>

          <details className="contactFaqItem">
            <summary>Can mentors apply from any major?</summary>
            <p>
              Yes. We’re looking for college students who can coach problem-solving and support at least one area
              (coding, electronics, or CAD/fabrication).
            </p>
          </details>

          <details className="contactFaqItem">
            <summary>How can sponsors support CurioLab?</summary>
            <p>Sponsorship can fund kits, scholarships, mentor training, or a full cohort.</p>
          </details>
        </div>
      </section>
    </main>
  );
}
