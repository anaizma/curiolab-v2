import Link from "next/link";

const projects = [
  { slug: "remote-controlled-car", title: "Remote-Controlled Car", desc: "Mechanics + electronics + iteration." },
  { slug: "alarm-clock", title: "Alarm Clock", desc: "Inputs, outputs, timing, reliability." },
  { slug: "lock-box", title: "Lock Box", desc: "Mechanism + code + debugging until it works." },
];

export default function ProjectsPage() {
  return (
    <main className="container">
      <h1 className="h1">Projects</h1>
      <p className="p">Semester-long builds students actually finish.</p>

      <div className="gridCards">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="cardLink">
            <div className="card pad">
              <div className="cardTitle">{p.title}</div>
              <div className="cardDesc">{p.desc}</div>
              <div className="cardHint">View gallery →</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
