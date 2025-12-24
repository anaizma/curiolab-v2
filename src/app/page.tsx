export default function Home() {
  return (
    <main className="wrap">
      <section className="hero">
        <p className="kicker">Curiosity-first STEM • built by students • for students</p>

        <h1 className="title">
          A hands-on engineering studio for{" "}
          <span className="accent">curious builders</span>.
        </h1>

        <p className="subtitle">
          In CurioLab, students don’t follow a worksheet. They learn the tools, then design, build,
          test, and iterate their way to a final project. Mentors guide every step so students grow
          confidence through real engineering process.
        </p>

        <div className="ctaRow">
          <a className="btn primary" href="#get-involved">Join a cohort</a>
          <a className="btn ghost" href="#projects">Explore past builds</a>
        </div>



        <div className="process">
          {["Learn tools", "Design", "Build", "Debug", "Demo"].map((s) => (
            <div key={s} className="chip">{s}</div>
          ))}
        </div>

        <div className="stats">
          <div className="stat">
            <div className="statNum">1:1</div>
            <div className="statLabel">Mentor support</div>
          </div>
          <div className="stat">
            <div className="statNum">12–14 wks</div>
            <div className="statLabel">Semester build</div>
          </div>
          <div className="stat">
            <div className="statNum">Build → Debug</div>
            <div className="statLabel">Learn by doing</div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="sectionHead">
          <h2>Built through iteration</h2>
          <p>Where every cohort learns core skills, then applies them to a semester-long build.</p>
        </div>

        <div className="grid">
          <article className="card">
            <h3>Remote-Controlled Car</h3>
            <p>Mechanics + electronics + iteration. Build it, drive it, improve it.</p>
            <span className="tag">embedded • design</span>
          </article>

          <article className="card">
            <h3>Alarm Clock</h3>
            <p>Inputs, outputs, timing, and making something reliable.</p>
            <span className="tag">electronics • logic</span>
          </article>

          <article className="card">
            <h3>Lock Box</h3>
            <p>Mechanism + code + debugging until it works every time.</p>
            <span className="tag">systems • debugging</span>
          </article>
        </div>
      </section>

      <section id="get-involved" className="section">
        <div className="sectionHead">
          <h2>Get involved</h2>
          <p>Students, Parents, Mentors, and Sponsors.</p>
        </div>

        <div className="grid">
          <article className="card">
            <h3>Students</h3>
            <p>Join a cohort, learn skills weekly, and ship a final build.</p>
            <a className="miniLink" href="/contact">Apply →</a>
          </article>

          <article className="card">
            <h3>Parents</h3>
            <p>Structured, supportive, and designed to build confidence.</p>
            <a className="miniLink" href="/contact">Ask a question →</a>
          </article>

          <article className="card">
            <h3>Mentors & Sponsors</h3>
            <p>Help students build. Fund kits and access for underrepresented learners.</p>
            <a className="miniLink" href="/contact">Partner →</a>
          </article>
        </div>
      </section>

      <footer className="footer">
        <div className="footerLine" />
        <p className="footerText">© {new Date().getFullYear()} CurioLab • Build. Debug. Discover.</p>
      </footer>
    </main>
  );
}
