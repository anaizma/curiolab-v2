import Link from "next/link";

export default function MentorsPage() {
  return (
    <main className="container">
      <h1 className="h1">Mentors</h1>
      <p className="p">
        Mentors coach students through challenges—asking great questions, guiding debugging,
        and helping them develop confidence through real problem-solving.
      </p>

      <div className="note">
        <strong>What mentors do:</strong>
        <ul style={{ marginTop: 10, marginBottom: 0, paddingLeft: 18, lineHeight: 1.7 }}>
          <li>Support 1–2 students throughout the cohort</li>
          <li>Help students break down problems instead of giving answers</li>
          <li>Guide debugging, iteration, and design decisions</li>
          <li>Encourage clear thinking, documentation, and presentation skills</li>
        </ul>
      </div>

      <div className="note">
        <strong>Ideal for:</strong>
        <ul style={{ marginTop: 10, marginBottom: 0, paddingLeft: 18, lineHeight: 1.7 }}>
          <li>Students or professionals who like teaching & troubleshooting</li>
          <li>Anyone excited by hands-on engineering and mentorship</li>
          <li>People who want to support access to technical learning</li>
        </ul>
      </div>

      <p className="p" style={{ marginTop: 18 }}>
        Curious what students work on? Start with the project gallery.
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 10 }}>
        <Link className="btn ghost" href="/projects">Explore projects →</Link>
      </div>
    </main>
  );
}
