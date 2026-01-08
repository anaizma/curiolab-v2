import Link from "next/link";

export default function SponsorSupportPage() {
  return (
    <main className="container">
      <h1 className="h1">Sponsor & Support</h1>
      <p className="p">
        Sponsorship helps CurioLab stay accessible—funding materials, tools, and program access
        so more students can participate, learn, and present their work.
      </p>

      <div className="note">
        <strong>Ways to support:</strong>
        <ul style={{ marginTop: 10, marginBottom: 0, paddingLeft: 18, lineHeight: 1.7 }}>
          <li>Fund materials (electronics kits, components, consumables)</li>
          <li>Sponsor a cohort or a Demo Day</li>
          <li>Support scholarships for students who need assistance</li>
          <li>Provide in-kind support (tools, parts, mentorship hours)</li>
        </ul>
      </div>

      <div className="note">
        <strong>What your support enables:</strong>
        <ul style={{ marginTop: 10, marginBottom: 0, paddingLeft: 18, lineHeight: 1.7 }}>
          <li>More hands-on projects and prototyping resources</li>
          <li>More mentor coverage and student support</li>
          <li>Lower barriers to participation</li>
        </ul>
      </div>

      <p className="p" style={{ marginTop: 18 }}>
        Want to see the kinds of projects students complete? Browse the gallery.
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 10 }}>
        <Link className="btn ghost" href="/projects">Explore projects →</Link>
      </div>
    </main>
  );
}
