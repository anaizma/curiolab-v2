import Link from "next/link";

const lanes = [
  { href: "/get-involved/students", title: "Students", desc: "Join a cohort and ship a build." },
  { href: "/get-involved/parents", title: "Parents", desc: "Supportive, structured, confidence-building." },
  { href: "/get-involved/mentors", title: "Mentors & Sponsors", desc: "Mentor students or fund kits." },
];

export default function GetInvolvedPage() {
  return (
    <main className="container">
      <h1 className="h1">Get involved</h1>
      <p className="p">Students, parents, mentors, sponsors</p>

      <div className="gridCards">
        {lanes.map((l) => (
          <Link key={l.href} href={l.href} className="cardLink">
            <div className="card pad">
              <div className="cardTitle">{l.title}</div>
              <div className="cardDesc">{l.desc}</div>
              <div className="cardHint">Open →</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
