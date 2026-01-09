"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="navInner">
        <Link href="/" className="brand">
          CurioLab
        </Link>

        <nav className="navLinks">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/mentors">Mentors</Link>
          <Link href="/students">Students</Link>
          <Link href="/sponsor-support">Support</Link>
          <Link href="/contact" className="navCta">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
