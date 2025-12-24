type Props = { params: { slug: string } };

const PROJECTS: Record<string, { title: string; blurb: string }> = {
  "remote-controlled-car": {
    title: "Remote-Controlled Car",
    blurb: "Mechanics + electronics + iteration. Build it, drive it, improve it.",
  },
  "alarm-clock": {
    title: "Alarm Clock",
    blurb: "Inputs, outputs, timing, and making something reliable.",
  },
  "lock-box": {
    title: "Lock Box",
    blurb: "Mechanism + code + debugging until it works every time.",
  },
};

export default async function ProjectSlugPage({ params }: Props) {
  const project = PROJECTS[params.slug];

  if (!project) {
    return (
      <main className="container">
        <h1 className="h1">Project not found</h1>
        <p className="p">That project page doesn’t exist yet.</p>
      </main>
    );
  }

  return (
    <main className="container">
      <h1 className="h1">{project.title}</h1>
      <p className="p">{project.blurb}</p>

      <div className="note">
        Gallery placeholder: we’ll add photos + captions here next.
      </div>
    </main>
  );
}
