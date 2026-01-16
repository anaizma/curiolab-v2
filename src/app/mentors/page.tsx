// src/app/mentors/page.tsx
import Image from "next/image";

export default function MentorsPage() {
  return (
    <main className="mentorsWrap">
      {/* HERO */}
      <header className="mentorsHero">
        <div className="mentorsHeroText">
          <h1 className="mentorsH1">Mentors</h1>
          <p className="mentorsLead">
            The best way to truly understand something is to teach it. Mentoring with CurioLab is a
            hands-on leadership experience where you guide students through problem-solving,
            debugging, and design thinking while sharpening your own technical foundation.
          </p>

          <div className="mentorsCtaRow">
            <a
              className="btn primary"
              href="https://forms.gle/mT3m2GQgSE4hM56v7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now →
            </a>
            <a className="btn ghost" href="#what-to-expect">
              What to Expect
            </a>
          </div>

          <div className="mentorsQuickFacts" aria-label="Mentor quick facts">
            <div className="mentorsFact">
              <div className="mentorsFactNum">13 Week</div>
              <div className="mentorsFactLabel">Semester Long Commitment</div>
            </div>
            <div className="mentorsFact">
              <div className="mentorsFactNum">Sat 1PM – 4 PM</div>
              <div className="mentorsFactLabel">Program Session Hours</div>
            </div>
            <div className="mentorsFact">
              <div className="mentorsFactNum"> Think[box]</div>
              <div className="mentorsFactLabel">Located at Case Western Reserve University</div>
            </div>
          </div>
        </div>

        <div className="mentorsHeroMedia">
          {/* Put a real image here: public/mentors/hero.jpg */}
          <Image
            src="/projects/iceskate.jpg"
            alt="CurioLab mentors working with students"
            width={1400}
            height={1000}
            className="mentorsHeroImg"
            priority
          />
        </div>
      </header>

      {/* WHY MENTOR */}
      <section className="mentorsSection" id="what-to-expect" aria-label="Why mentor">
        <div className="mentorsSectionHead">
          <h2>Why Mentor With CurioLab?</h2>
          <p>
            Mentoring with CurioLab is an opportunity to turn your technical skills into real impact while sharpening them in the process. 
            You’ll help middle and high school students build confidence in engineering by guiding them through hands-on projects—watching them 
            go from “I don’t know where to start” to independently solving problems they once thought were out of reach.
          </p>
        </div>

        <div className="mentorsGrid3">
          <article className="mentorsCard">
            <h3>Grow Your Skills</h3>
            <p>
              As a mentor, you grow alongside your students. Sharpen your technical understanding, 
              strengthen how you communicate complex ideas, and deepen your approach to design, debugging, and problem-solving, skills 
              that directly translate to internships and engineering teams.
            </p>
          </article>

          <article className="mentorsCard">
            <h3>Lead With Impact</h3>
            <p>
             Help expand access to engineering for middle and high school students, especially those who haven’t had these opportunities 
             before, and play a role in shaping the next generation of technologists, leaders, and mentors.
            </p>
          </article>

          <article className="mentorsCard">
            <h3>Get Supported</h3>
            <p>
              CurioLab also invests in you. Get structured training, weekly materials, and ongoing support from the team, 
              so you’re never unprepared. Share ideas, troubleshoots challenges together, and builds leadership skills in a 
              low-pressure, high-impact environment.
            </p>
          </article>
        </div>
      </section>

      {/* IMAGES ROW */}
      <section className="mentorsImageStrip" aria-label="Mentor photos">
        {/* Put these in public/mentors/ */}
        <Image
          src="/projects/presen.jpg"
          alt="Mentors coaching during a session"
          width={1200}
          height={800}
          className="mentorsStripImg"
        />
        <Image
          src="/projects/oneonone.jpg"
          alt="Students collaborating with mentor guidance"
          width={1200}
          height={800}
          className="mentorsStripImg"
        />
        <Image
          src="/projects/mentorfirstpic.jpg"
          alt="Students presenting at Demo Day"
          width={1200}
          height={800}
          className="mentorsStripImg"
        />
      </section>

      {/* WHAT IT LOOKS LIKE */}
      <section className="mentorsSection" aria-label="What mentoring looks like">
        <div className="mentorsSectionHead">
          <h2>What Mentoring Looks Like</h2>
          <p>
            Mentors coach 1–2 students through a semester-long engineering journey, helping them
            troubleshoot, iterate, and communicate their work.
          </p>
        </div>

        <div className="mentorsTwoCol">
          <div className="mentorsChecklist">
            <div className="mentorsCheck">Coach 1–2 Students Through Challenges</div>
            <div className="mentorsCheck">Guide Debugging And Structured Problem-Solving</div>
            <div className="mentorsCheck">Support Code + Electronics + Fabrication Workflows</div>
            <div className="mentorsCheck">Walk Away With Life Long Skils You'll Use Far Beyond CurioLab</div>
            
          </div>

          <div className="mentorsInfoCard">
            <div className="mentorsInfoTitle">Time Commitment</div>
            <div className="mentorsInfoRow">
              <span className="mentorsInfoK">Training</span>
              <span className="mentorsInfoV">1–2 hours/week</span>
            </div>
            <div className="mentorsInfoRow">
              <span className="mentorsInfoK">Project Sessions</span>
              <span className="mentorsInfoV">Saturdays, 1:00–4:00 PM</span>
            </div>
            <div className="mentorsInfoRow">
              <span className="mentorsInfoK">Location</span>
              <span className="mentorsInfoV">Sears think[box], CWRU</span>
            </div>
            <div className="mentorsInfoNote">
              If your schedule doesn’t align, reach out — future opportunities may be available.
            </div>
          </div>
        </div>
      </section>

      {/* WHO SHOULD APPLY */}
      <section className="mentorsSection" aria-label="Who should apply">
        <div className="mentorsSectionHead">
          <h2>Who Should Apply</h2>
          <p>
            This role is especially for college students. Prior experience is helpful, but not required as we
            provide training and resources for all.
          </p>
        </div>

        <div className="mentorsChips" aria-label="Helpful experience areas">
          <span className="chip">Arduino / Python / Java</span>
          <span className="chip">Circuits + Sensors</span>
          <span className="chip">3D modeling + CAD</span>
          <span className="chip">Laser Cutting</span>
          <span className="chip">3D Printing</span>
        </div>

        <div className="mentorsNote">
          Mentors are expected to have intermediate-level knowledge in at least one area (coding,
          electronics, or CAD/fabrication). All majors and grades are welcome to apply!
        </div>
      </section>

      {/* QUOTES */}
<section className="mentorsSection" aria-label="Mentor quotes">
  <div className="mentorsSectionHead">
    <h2>What Past Mentors Say</h2>
    <p>Real growth happens when you explain, troubleshoot, and iterate with someone else.</p>
  </div>

  <div className="mentorsQuotes">
    <blockquote className="mentorsQuote">
      “Mentoring pushed me to explain ideas clearly and troubleshoot in real time. I became more
      confident as an engineer and communicator.”
    </blockquote>

    <blockquote className="mentorsQuote">
      “Watching students go from stuck to confident was the most rewarding part. You learn just as
      much as they do.”
    </blockquote>

    <blockquote className="mentorsQuote">
      “The training + structure made it easy to jump in. I loved seeing students’ ideas turn into
      something real by Demo Day.”
    </blockquote>
  </div>
</section>

{/* APPLY */}
<section className="mentorsApply" aria-label="Apply">
  <div className="mentorsApplyGrid">
    {/* LEFT */}
    <div className="mentorsApplyCard">
      <h2>Apply To Be A Mentor</h2>
      <p>
        Applications are open now for Spring 2026. If you want to teach, lead, and learn alongside a
        community that supports you, apply below!
      </p>

      <div className="mentorsApplyRow">
        <a
          className="btn primary"
          href="https://forms.gle/mT3m2GQgSE4hM56v7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply now →
        </a>
        <span className="mentorsDeadline">Deadline: 1/22/2026</span>
      </div>

      <div className="mentorsApplyHint">
      </div>
    </div>

    {/* RIGHT */}
    <div className="mentorsApplyMedia" aria-label="Mentor session photo">
      <Image
        src="/projects/demday.jpg"
        alt="CurioLab mentors working with students at a session"
        width={1200}
        height={900}
        className="mentorsApplyImg"
      />
    </div>
  </div>
</section>


    </main>
  );
}
