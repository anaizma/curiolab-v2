// src/app/our-team/page.tsx
import Image from "next/image";



type Social = {
  github?: string;
  linkedin?: string;
  website?: string;
};

type Member = {
  name: string;
  role: string;
  photo: string; // put in /public/team/...
  socials?: Social;
};

const TEAM: Member[] = [
    {
    name: "Emily Song",
    role: "Founder / President",
    photo: "/projects/emily pic.png",
    socials: {
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
    },
  },  
  {
    name: "Ana Izma",
    role: "Program Manager / Co-President",
    photo: "/projects/ana pic.png",
    socials: {
      linkedin: "https://linkedin.com/in/anaizma",
      github: "https://github.com/anaizma",
      website: "https://anaizma.com",
    },
  },

  {
    name: "Esme Qiang",
    role: "Vice President",
    photo: "/projects/esme.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/esmeralda-qiang-59884822a/",
      github: "https://github.com/",
    },

  },

    {
    name: "Vinh-Khang Luu",
    role: "Finance / Operations",
    photo: "/projects/Khang pic.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/vinh-khang-luu-19a321345/",
      github: "https://github.com/",
    },
  },

    {
    name: "Tienna Zeng",
    role: "Public Relations Director",
    photo: "/projects/tienna pic.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/tiennazeng/",
      github: "https://github.com/",
    },
  },

    {
    name: "Wenjin Zhang",
    role: "Curriculum Developer",
    photo: "/projects/wenjin pic.png",
    socials: {
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
    },
  },

    {
    name: "Rober Carrillo",
    role: "Curio Developer",
    photo: "/projects/rober.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/rober-carrillo/",
      github: "https://github.com/",
    },
  },

    {
    name: "Pauls Olins",
    role: "Curio Developer",
    photo: "/projects/pauls.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/paulsolins/",
      github: "https://github.com/Pygmypuff",
    },
  },

];

function IconGithub() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="teamIconSvg">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.17-3.37-1.17-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.9 1.52 2.36 1.08 2.94.82.09-.64.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.66.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .26.18.57.69.48A10 10 0 0 0 12 2Z"
      />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="teamIconSvg">
      <path
        fill="currentColor"
        d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3.5 9h3v12h-3V9ZM9 9h2.9v1.64h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V21h-3v-6.3c0-1.5-.03-3.44-2.1-3.44-2.1 0-2.42 1.64-2.42 3.33V21H9V9Z"
      />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="teamIconSvg">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm7.93 9h-3.15a15.6 15.6 0 0 0-1.33-5.02A8.03 8.03 0 0 1 19.93 11ZM12 4.07c.93 1.23 1.68 3.41 1.98 6.93H10.02c.3-3.52 1.05-5.7 1.98-6.93ZM4.07 13h3.15c.2 1.86.7 3.64 1.33 5.02A8.03 8.03 0 0 1 4.07 13Zm3.15-2H4.07a8.03 8.03 0 0 1 4.48-5.02A15.6 15.6 0 0 0 7.22 11ZM12 19.93c-.93-1.23-1.68-3.41-1.98-6.93h3.96c-.3 3.52-1.05 5.7-1.98 6.93ZM16.78 13h3.15a8.03 8.03 0 0 1-4.48 5.02c.63-1.38 1.13-3.16 1.33-5.02Z"
      />
    </svg>
  );
}

function SocialIcons({ socials }: { socials?: Social }) {
  if (!socials) return null;

  return (
    <div className="teamIcons" aria-label="Social links">
      {socials.github && (
        <a className="teamIconBtn" href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <IconGithub />
        </a>
      )}
      {socials.website && (
        <a className="teamIconBtn" href={socials.website} target="_blank" rel="noreferrer" aria-label="Website">
          <IconGlobe />
        </a>
      )}
      {socials.linkedin && (
        <a className="teamIconBtn" href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <IconLinkedIn />
        </a>
      )}
    </div>
  );
}

export default function OurTeamPage() {
  return (
    <main className="teamWrap">
      <header className="teamHeader">
        <p className="teamKicker">CurioLab</p>
        <h1 className="teamTitle">Meet Our Team</h1>
      </header>

      <section className="teamGrid" aria-label="Team members">
        {TEAM.map((m) => (
          <article key={m.name} className="teamCard">
            <div className="teamPhotoWrap">
              <Image
                src={m.photo}
                alt={`${m.name} headshot`}
                width={280}
                height={280}
                className="teamPhoto"
              />
            </div>

            <h2 className="teamName">{m.name}</h2>
            <div className="teamRole">{m.role}</div>

            <SocialIcons socials={m.socials} />
          </article>
        ))}
      </section>
    </main>
  );
}
