// src/app/sponsor-support/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function SponsorSupportPage() {
  return (
    <main className="sponsorWrap">
      {/* HERO */}
      <header className="sponsorHero">
        <div className="sponsorHeroText">
          <div className="sponsorKicker">Sponsor & Support</div>
          <h1 className="sponsorTitle">
            Power the next generation of builders.
          </h1>
          <p className="sponsorLead">
            CurioLab helps middle and high school students learn engineering through hands-on
            projects, mentorship, and real design iteration. Your support funds kits, materials,
            scholarships, and mentor training—so more students can show up and build something real.
          </p>

          <div className="sponsorCtas">
            <Link className="btn primary" href="/contact">
              Become A Sponsor →
            </Link>
            <a className="btn ghost" href="#ways">
              Ways To Support
            </a>
          </div>

          <div className="sponsorStats" aria-label="Sponsor highlights">
            <div className="sponsorStat">
              <div className="sponsorStatNum">Hands-On</div>
              <div className="sponsorStatLabel">Project-based learning</div>
            </div>
            <div className="sponsorStat">
              <div className="sponsorStatNum">Community</div>
              <div className="sponsorStatLabel">Mentors + student teams</div>
            </div>
            <div className="sponsorStat">
              <div className="sponsorStatNum">Impact</div>
              <div className="sponsorStatLabel">Access for more students</div>
            </div>
          </div>
        </div>

        <div className="sponsorHeroMedia" aria-label="CurioLab session photo">
          <Image
            src="/projects/spage2.jpg"
            alt="Students building together during a CurioLab session"
            width={1400}
            height={1000}
            className="sponsorHeroImg"
            priority
          />
        </div>
      </header>

      {/* WHY */}
      <section className="sponsorSection" aria-label="Why sponsor">
        <div className="sponsorSectionHead">
          <h2>Why Sponsor CurioLab?</h2>
          <p>
            Sponsorship directly reduces barriers to entry and upgrades the student experience—from
            better kits and tools to scholarships and mentor support. You’re not just funding a program;
            you’re enabling confidence, skill-building, and long-term curiosity.
          </p>
        </div>

        <div className="sponsorGrid3">
          <article className="sponsorCard">
            <h3>Make Access Real</h3>
            <p>
              Help cover materials and scholarships so students can participate regardless of
              background.
            </p>
          </article>

          <article className="sponsorCard">
            <h3>Support Learning By Doing</h3>
            <p>
              Projects are hands-on and iterative—students prototype, test, debug, and present at Demo Day.
            </p>
          </article>

          <article className="sponsorCard">
            <h3>Invest In Local Talent</h3>
            <p>
              Students gain early exposure to engineering, teamwork, and problem-solving—skills that compound.
            </p>
          </article>
        </div>
      </section>

      {/* WAYS TO SUPPORT */}
      <section className="sponsorSection" id="ways" aria-label="Ways to support">
        <div className="sponsorSectionHead">
          <h2>Ways To Support</h2>
          <p>Choose what fits your organization—cash sponsorship, in-kind donations, or direct involvement.</p>
        </div>

        <div className="sponsorWays">
          <div className="sponsorWay">
            <div className="sponsorWayTitle">Financial Sponsorship</div>
            <div className="sponsorWayText">
              Fund kits, materials, scholarships, and mentor training. Great for companies that want clear impact.
            </div>
            <div className="sponsorWayMeta">
              <span className="chip">Best for scalable impact</span>
              <span className="chip">Fastest to activate</span>
            </div>
          </div>

          <div className="sponsorWay">
            <div className="sponsorWayTitle">Donations</div>
            <div className="sponsorWayText">
              Donate components, tools, or fabrication credit (electronics, sensors, 3D printing materials, etc.).
            </div>
            <div className="sponsorWayMeta">
              <span className="chip">Best for hardware orgs</span>
              <span className="chip">Supplies & parts</span>
            </div>
          </div>

          <div className="sponsorWay">
            <div className="sponsorWayTitle">Employee Engagement</div>
            <div className="sponsorWayText">
              Provide guest speakers, workshop leaders, or mentor volunteers. Great for culture + community presence.
            </div>
            <div className="sponsorWayMeta">
              <span className="chip">Best for: visibility</span>
              <span className="chip">Hands-on involvement</span>
            </div>
          </div>
        </div>
      </section>

      {/* SPONSORSHIP TIERS */}
      <section className="sponsorSection" aria-label="Sponsorship options">
        <div className="sponsorSectionHead">
          <h2>Sponsorship options</h2>
          <p>
            Use these as starting points — we can tailor packages to your goals and budget.
          </p>
        </div>

        <div className="sponsorTiers">
          <article className="sponsorTier">
            <div className="sponsorTierTop">
              <div className="sponsorTierName">Supporter</div>
              <div className="sponsorTierPrice">$250–$500</div>
            </div>
            <ul className="sponsorList">
              <li>Materials + supplies contribution</li>
              <li>Listed as a supporter on our site</li>
              <li>Thank-you shoutout (optional)</li>
            </ul>
          </article>

          <article className="sponsorTier featured">
            <div className="sponsorTierTop">
              <div className="sponsorTierName">Cohort Sponsor</div>
              <div className="sponsorTierPrice">$1,000–$2,500</div>
            </div>
            <ul className="sponsorList">
              <li>Funds a major share of project kits</li>
              <li>Logo placement + sponsor highlight</li>
              <li>Opportunity to send a speaker/mentor</li>
            </ul>
            <div className="sponsorTierBadge">Most popular</div>
          </article>

          <article className="sponsorTier">
            <div className="sponsorTierTop">
              <div className="sponsorTierName">Program Partner</div>
              <div className="sponsorTierPrice">$5,000+</div>
            </div>
            <ul className="sponsorList">
              <li>Funds scholarships + mentor training</li>
              <li>Co-branded workshop or challenge prompt</li>
              <li>Demo Day recognition + deeper collaboration</li>
            </ul>
          </article>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="sponsorSection" aria-label="How it works">
        <div className="sponsorSectionHead">
          <h2>How it works</h2>
          <p>A simple, low-friction process to get set up quickly.</p>
        </div>

        <div className="sponsorSteps">
          <div className="sponsorStep">
            <div className="sponsorStepBadge">1</div>
            <div>
              <div className="sponsorStepTitle">Reach Out</div>
              <div className="sponsorStepText">
                Tell us your goals (access, education, visibility, engagement) and budget range.
              </div>
            </div>
          </div>

          <div className="sponsorStep">
            <div className="sponsorStepBadge">2</div>
            <div>
              <div className="sponsorStepTitle">Choose A Package</div>
              <div className="sponsorStepText">
                Pick a tier or customize—financial, in-kind, or engagement support.
              </div>
            </div>
          </div>

          <div className="sponsorStep">
            <div className="sponsorStepBadge">3</div>
            <div>
              <div className="sponsorStepTitle">Activate Support</div>
              <div className="sponsorStepText">
                We coordinate logistics, confirm recognition, and apply funds directly to the cohort.
              </div>
            </div>
          </div>

          <div className="sponsorStep">
            <div className="sponsorStepBadge">4</div>
            <div>
              <div className="sponsorStepTitle">See Impact</div>
              <div className="sponsorStepText">
                Get updates and optionally attend Demo Day to see student projects in action.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT SPONSORS */}
<section className="sponsorSection" aria-label="Current sponsors">
  <div className="sponsorSectionHead">
    <h2>Our current sponsors</h2>
    <p>
      CurioLab is made possible by partners who believe in hands-on engineering
      education and expanding access for students.
    </p>
  </div>

  <div className="currentSponsors">
    {/* Gelfand STEM Center */}
    <div className="currentSponsorCard">
      <div className="currentSponsorLogo">
        <img
          src="/projects/gelfand.png"
          alt="Gelfand STEM Center logo"
        />
      </div>
      <div className="currentSponsorText">
        <h3>Gelfand STEM Center</h3>
        <p>
          Supporting student innovation and STEM outreach by funding materials,
          mentorship, and program development.
        </p>
      </div>
    </div>

    {/* think[box] */}
    <div className="currentSponsorCard">
      <div className="currentSponsorLogo">
        <img
          src="/projects/thinkbox.png"
          alt="Sears think[box] logo"
        />
      </div>
      <div className="currentSponsorText">
        <h3>Sears think[box]</h3>
        <p>
          Providing access to fabrication tools, workspace, and a creative
          environment where CurioLab sessions come to life.
        </p>
      </div>
    </div>
  </div>
</section>

      
      {/* CTA */}
      <section className="sponsorCta" aria-label="Sponsor call to action">
        <div className="sponsorCtaCard">
          <h2>Ready To Support CurioLab?</h2>
          <p>
            Send a quick note with your organization name and what kind of support you’re considering.
            We’ll reply with next steps.
          </p>

          <div className="sponsorCtas">
            <Link className="btn primary" href="/contact">
              Contact Us →
            </Link>
            <Link className="btn ghost" href="/projects">
              See Student Projects
            </Link>
          </div>

          <div className="sponsorTiny">
            Prefer email? You can also use the contact form and we’ll route it to the right person.
          </div>
        </div>
      </section>
    </main>
  );
}
