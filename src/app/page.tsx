import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="wrap">
      <section className="hero">
        <p className="kicker">Curiosity-first STEM • shaping thinkers and makers • built for students</p>

        <h1 className="title">
          A hands-on engineering studio for{" "}
          <span className="accentHero">curious builders</span>.
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

        <div className="processStrip" aria-label="CurioLab process">
          <span className="step">Ideate</span>
          <span className="arrow">→</span>
          <span className="step">Build</span>
          <span className="arrow">→</span>
          <span className="step">Debug</span>
          <span className="arrow">→</span>
          <span className="step">Demo Day</span>
        </div>

        <div className="process">
          {["Learn tools", "Design", "Build", "Debug", "Demo"].map((s) => (
            <div key={s} className="chip">{s}</div>
          ))}
        </div>

        <div className="stats">
          <div className="stat">
            <div className="statNum">1:1.5</div>
            <div className="statLabel">Mentor support</div>
          </div>
          <div className="stat">
            <div className="statNum">12–14 wks</div>
            <div className="statLabel">Semester build</div>
          </div>
          <div className="stat">
            <div className="statNum">Build → Debug → Create</div>
            <div className="statLabel">Learn by doing</div>
          </div>
        </div>
      </section>

            {/* What we do Section */}
      <section className="what">
        <div className="whatInner">
          <div className="whatLeft">
            <h2 className="whatTitle">Who Are We</h2>
            <div className="whatRule" />
          </div>

          <div className="whatRight">
            <p className="whatP">
              CurioLab is a hands-on engineering studio where students learn tools, then apply them
              to real builds. We teach the engineering design process through weekly sessions that
              prioritize iteration, creativity, and confidence.
            </p>

            <p className="whatP">
              We run cohort-based programs with mentor support, guiding students from ideation to
              debugging to Demo Day. Our focus is project-based learning that feels exciting,
              structured, and empowering—especially for students who haven’t had access before.
            </p>
          </div>
        </div>
      </section>




      <section id="projects" className="section">
        <div className="sectionHead">
          <h2>Featured Projects</h2>
          <p>Where every cohort learns core skills, built through iteration</p>
        </div>

        <div className="featureStack">
  <Link href="/projects/remote-controlled-car" className="featureCard">
    <div className="featureMedia">
      <Image
        src="/projects/alarmclock.jpg"
        alt="Remote-Controlled Car project"
        width={1200}
        height={800}
        className="featureImg"
        priority
      />
    </div>

    <div className="featureBody">
      <h3 className="featureTitle">Remote-Controlled Car</h3>
      <p className="featureDesc">
        Mechanics + electronics + iteration. Build it, drive it, improve it.
      </p>

      <div className="featureMeta">
        <span className="tag">code • design</span>
        <span className="featureLink">View project →</span>
      </div>
    </div>
  </Link>

  <Link href="/projects/alarm-clock" className="featureCard">
    <div className="featureMedia">
      <Image
        src="/projects/alarmclock.jpg"
        alt="Alarm Clock project"
        width={1200}
        height={800}
        className="featureImg"
      />
    </div>

    <div className="featureBody">
      <h3 className="featureTitle">Alarm Clock</h3>
      <p className="featureDesc">
        Inputs, outputs, timing, and making something reliable.
      </p>

      <div className="featureMeta">
        <span className="tag">electronics • logic</span>
        <span className="featureLink">View project →</span>
      </div>
    </div>
  </Link>

  <Link href="/projects/lock-box" className="featureCard">
    <div className="featureMedia">
      <Image
        src="/projects/safebox.jpg"
        alt="Lock Box project"
        width={1200}
        height={800}
        className="featureImg"
      />
    </div>

    <div className="featureBody">
      <h3 className="featureTitle">Lock Box</h3>
      <p className="featureDesc">
        Mechanism + code + debugging until it works every time.
      </p>

      <div className="featureMeta">
        <span className="tag">coding • debugging</span>
        <span className="featureLink">View project →</span>
      </div>
    </div>
  </Link>
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
