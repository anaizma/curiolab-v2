import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    slug: "lock-box",
    title: "Electronic Safe",
    desc: "Mechanism + code + debugging until it works.",
    description:
      "Students designed and built a secure electronic safe from scratch using self-designed CAD models to fabricate laser-cut panels and 3D-printed components. They assembled the electronics and developed embedded code implementing keypad input, state-based logic, iterative debugging, and a secure locking mechanism.",
    img: "/projects/safebox.jpg",
  },
  {
    slug: "alarm-clock",
    title: "Alarm Clock",
    desc: "Inputs, outputs, timing, reliability.",
    description:
      "A fully functional alarm clock designed and built using microcontrollers, displays, and user input controls. Custom 3D-modeled and 3D-printed components housed embedded code supporting adjustable alarms, message display, snooze functionality, and reliable timing logic refined through iterative debugging.",
    img: "/projects/alarmclock.jpg",
  },
  {
    slug: "remote-controlled-car",
    title: "Remote-Controlled Car",
    desc: "Mechanics + electronics + iteration.",
    description:
      "Students assembled a remote-controlled vehicle by integrating motors, power, and control logic. Through repeated testing and iteration, they improved responsiveness, mechanical stability, and overall performance.",
    img: "/projects/workwithcircuit.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <main className="projectsWrap">
      {/* Header (centered) */}
      <header className="projectsHeader">
        <h1 className="projectsTitle">Projects</h1>
        <p className="projectsSubtitle">
          Each semester, students build toward a final project over ~12 weeks — learning code fundamentals,
          circuits & electronics, CAD/3D modeling, laser cutting, 3D printing, and rapid prototyping.
          Mentors guide them every step of the way from first build to Demo Day, making sure no student is left behind.
        </p>
      </header>

      {/* Project rows */}
      <section className="projectList" aria-label="Project list">
        {projects.map((p, idx) => (
          <div key={p.slug} className="projectRow">
            <div className="projectMedia">
              <Image
                src={p.img}
                alt={p.title}
                width={1200}
                height={800}
                className="projectImg"
                priority={idx === 0}
              />
            </div>

            <div className="projectBody">
              <h2 className="projectTitle">{p.title}</h2>
              <p className="projectDesc">{p.description}</p>

              <Link href={`/projects/${p.slug}`} className="projectLink">
                View project →
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
