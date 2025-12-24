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
          <Link href="/projects">Projects</Link>
          <Link href="/get-involved">Get involved</Link>
          <Link href="/about">About</Link>
          <Link href="/contact" className="navCta">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
