"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close on Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="nav">
      <div className="navInner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          CurioLab
        </Link>

        {/* Desktop links */}
        <nav className="navLinks navLinksDesktop">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/mentors">Mentors</Link>
          <Link href="/students">Students</Link>
          <Link href="/sponsor-support">Support</Link>
          <Link href="/contact" className="navCta">
            Contact
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="navBurger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`navBurgerLine ${open ? "isOpen" : ""}`} />
          <span className={`navBurgerLine ${open ? "isOpen" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="navMobileOverlay" onClick={() => setOpen(false)}>
          <div className="navMobilePanel" onClick={(e) => e.stopPropagation()}>
            <nav className="navMobileLinks">
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link href="/projects" onClick={() => setOpen(false)}>
                Projects
              </Link>
              <Link href="/mentors" onClick={() => setOpen(false)}>
                Mentors
              </Link>
              <Link href="/students" onClick={() => setOpen(false)}>
                Students
              </Link>
              <Link href="/sponsor-support" onClick={() => setOpen(false)}>
                Support
              </Link>

              <Link
                href="/contact"
                className="navMobileCta"
                onClick={() => setOpen(false)}
              >
                Contact →
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
