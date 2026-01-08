import Link from "next/link";

export default function StudentsPage() {
  return (
    <main className="container">
      <h1 className="h1">Students</h1>
      <p className="p">
        CurioLab is a 12-week, hands-on engineering cohort where you learn core tools,
        then use them to create a final project you’re proud to present.
      </p>

      <div className="note">
        <strong>What you’ll learn:</strong>
        <ul style={{ marginTop: 10, marginBottom: 0, paddingLeft: 18, lineHeight: 1.7 }}>
          <li>Code fundamentals + structured problem-solving</li>
          <li>Circuits & electronics (inputs, outputs, sensors, debugging)</li>
          <li>3D modeling + CAD design</li>
          <li>Laser cutting + 3D printing</li>
          <li>Prototyping, iteration, and Demo Day presentation</li>
        </ul>
      </div>

      <div className="note">
        <strong>How the semester works:</strong>
        <ul style={{ marginTop: 10, marginBottom: 0, paddingLeft: 18, lineHeight: 1.7 }}>
          <li><strong>Weeks 1–4:</strong> Learn tools + mini builds</li>
          <li><strong>Weeks 5–10:</strong> Prototype + iterate on your final project</li>
          <li><strong>Weeks 11–12:</strong> Polish + Demo Day</li>
        </ul>
      </div>

      <p className="p" style={{ marginTop: 18 }}>
        Want to see what students make? Explore past builds to get inspired.
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 10 }}>
        <Link className="btn ghost" href="/projects">Explore projects →</Link>
      </div>
    </main>
  );
}
