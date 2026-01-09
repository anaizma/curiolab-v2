import Link from "next/link";

export default function StudentsPage() {
  return (
    <main className="studentsWrap">
      {/* HERO */}
      <header className="studentsHero">
        <div className="studentsHeroText">
          <h1 className="studentsTitle">Students</h1>
          <p className="studentsLead">
            CurioLab is a 12-week, hands-on engineering cohort where you learn practical tools,
            strengthen problem-solving, and gain confidence with support each step of the way.
          </p>

          <div className="studentsCtaRow">
            {/* TODO: replace with your Google Form link */}
            <a className="btn primary" href="https://docs.google.com/forms/d/e/1FAIpQLSfJ6QDOEuDqhgtCCxAJpK0rnfCVNun8t6Zkgld-BaDxaly-hw/viewform" target="_blank" rel="noreferrer">
              Apply Now →
            </a>
            <Link className="btn ghost" href="/projects">
              Explore Past Projects →
            </Link>
          </div>

          <p className="studentsTiny">
            Applications are open now. Deadline: <strong>1/20/26</strong>
          </p>
        </div>

        {/* Quick facts card */}
        <aside className="studentsFacts" aria-label="Program details">
          <div className="studentsFactsTop">
            <div className="studentsFactsKicker">Spring 2026 program</div>
            <div className="studentsFactsTitle">LED FocusBoard</div>
            <div className="studentsFactsSub">
              Build a mini desk display with a pomodoro timer.
            </div>
          </div>

          <div className="studentsFactsGrid">
            <div className="studentsFact">
              <div className="studentsFactLabel">Dates</div>
              <div className="studentsFactValue">1/31/26 – 4/25/26</div>
            </div>
            <div className="studentsFact">
              <div className="studentsFactLabel">Time</div>
              <div className="studentsFactValue">Saturdays • 1:00–3:30 PM</div>
            </div>
            <div className="studentsFact">
              <div className="studentsFactLabel">Location</div>
              <div className="studentsFactValue">Think[box] 1st Floor</div>
            </div>
            <div className="studentsFact">
              <div className="studentsFactLabel">Location</div>
              <div className="studentsFactValue">Case Western Reserve University</div>
            </div>
            <div className="studentsFact studentsFactWide">
              <div className="studentsFactLabel">Bring</div>
              <div className="studentsFactValue">Laptop</div>
            </div>
          </div>
        </aside>
      </header>

      {/* WHAT YOU'LL LEARN */}
      <section className="studentsSection" aria-label="What you’ll learn">
        
        <div className="studentsSectionHead">
          <h2>What you’ll learn</h2>
          <p>
            You’ll pick up core engineering skills and more importantly, learn how to think through
            unfamiliar problems and troubleshoot when things don’t work (because that’s the real skill).
          </p>
          <div className="learnImageStrip">
        <img
            src="/projects/learning.jpg"
            alt="Students learning to code during a CurioLab session"
        />
        <img
            src="/projects/workwithcircuit.jpg"
            alt="Students working with circuits and electronics"
        />
        <img
            src="/projects/3dmodel.jpg"
            alt="3D modeling and fabrication work by students"
        />
        </div>
        </div>

        <div className="studentsLearnGrid">
          <div className="studentsCard">
            <h3>Code fundamentals</h3>
            <p>
              Learn how to read and write code with structure, variables, conditionals, functions, and
              debugging habits that help you work independently.
            </p>
          </div>

          <div className="studentsCard">
            <h3>Circuits + electronics</h3>
            <p>
              Work with inputs/outputs, sensors, and wiring fundamentals. You’ll learn how to test,
              isolate issues, solder, and fix real hardware problems.
            </p>
          </div>

          <div className="studentsCard">
            <h3>CAD + fabrication</h3>
            <p>
              Design parts in CAD, then bring them to life with laser cutting and 3D printing, turning
              ideas into physical components you can iterate on.
            </p>
          </div>
        </div>

        <div className="studentsSupportRow">
          <div className="studentsCallout">
            <h3>Mentor Pairing</h3>
            <p>
              You’ll be paired with a mentor who coaches you through challenges, asks good questions,
              and helps you build confidence without handing you the answers.
            </p>
          </div>

          <div className="studentsCallout">
            <h3>Curio</h3>
            <p>
              You’ll also get access to <strong>Curio</strong>, our personalized platform designed to
              supplement sessions—so you can review concepts, get guidance, and keep momentum between Saturdays.
            </p>
          </div>
        </div>
      </section>

      {/* HOW THE SEMESTER WORKS */}
      <section className="studentsSection" aria-label="How the semester works">
        <div className="studentsSectionHead">
          <h2>How the semester works</h2>
          <p>
            The semester is paced so you learn tools first, then apply them with support, ending with a polished Demo Day presentation.
          </p>
        </div>

        <div className="studentsTimeline">
          <div className="studentsStepCard">
            <div className="studentsStepTop">
              <span className="studentsStepBadge">Stage 1</span>
              <h3>Overview + Brainstorming</h3>
            </div>
            <p>
              Get oriented to the challenge, explore examples, and plan what you want to create.
              Learn how to break a big idea into doable pieces.
            </p>
          </div>

          <div className="studentsStepCard">
            <div className="studentsStepTop">
              <span className="studentsStepBadge">Stage 2</span>
              <h3>Core Tools (Code + Electronics + Modeling)</h3>
            </div>
            <p>
              Build skills through guided activities: coding, circuits, and CAD design, so you can develop a core foundation.
            </p>
          </div>

          <div className="studentsStepCard">
            <div className="studentsStepTop">
              <span className="studentsStepBadge">Stage 3</span>
              <h3>Fabrication + Prototyping</h3>
            </div>
            <p>
              Use 3D printing and laser cutting to create parts, test prototypes, and iterate. This is where troubleshooting becomes your superpower.
            </p>
          </div>

          <div className="studentsStepCard">
            <div className="studentsStepTop">
              <span className="studentsStepBadge">Stage 4</span>
              <h3>Polish + Demo Day</h3>
            </div>
            <p>
              Final refinements, reliability checks, and practice communicating your work clearly. Then present you final work on Demo Day.
            </p>
          </div>
        </div>
        <div className="learnImageStrip">
        <img
            src="/projects/spage1.jpg"
            alt="Students learning to code during a CurioLab session"
        />
        <img
            src="/projects/spage2.jpg"
            alt="Students working with circuits and electronics"
        />
        <img
            src="/projects/spage3.jpg"
            alt="3D modeling and fabrication work by students"
        />
        </div>
      </section>

      {/* APPLY */}
      <section className="studentsSection" aria-label="Apply">
        <div className="studentsApply">
          <div className="studentsApplyText">
            <h2>Apply</h2>
            <p>
              Applications are open now. If you’re curious, consistent, and willing to learn through trial and error,
              you’ll do great here!
            </p>

            <ol className="studentsApplyList">
              <li>
                <strong>Fill out the application</strong> (Google Form).
              </li>
              <li>
                <strong>We’ll follow up</strong> with next steps + interviews.
              </li>
              <li>
                <strong>Get ready for Session 1</strong> — laptop required.
              </li>
            </ol>

            <div className="studentsCtaRow">
              <a className="btn primary" href="https://docs.google.com/forms/d/e/1FAIpQLSfJ6QDOEuDqhgtCCxAJpK0rnfCVNun8t6Zkgld-BaDxaly-hw/viewform" target="_blank" rel="noreferrer">
                Apply now →
              </a>
              <Link className="btn ghost" href="/projects">
                See what students make →
              </Link>
            </div>

            <p className="studentsTiny">
              Deadline: <strong>1/20/26</strong>
            </p>
          </div>

          <div className="studentsApplyNote">
            <div className="studentsApplyNoteTitle">Tip</div>
            <p className="studentsApplyNoteText">
              No prior experience required! Curiosity + consistency matters more than “already knowing” the tools.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
