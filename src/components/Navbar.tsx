"use client";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="navInner">
        <div className="brand">CurioLab</div>

        <nav className="navLinks">
          <a href="#projects">Projects</a>
          <a href="#get-involved">Get involved</a>
          <a href="#about">About</a>
          <a href="/contact" className="navCta">Contact</a>
        </nav>
      </div>
    </header>
  );
}
