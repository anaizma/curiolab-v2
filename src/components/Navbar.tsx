"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur">
      <div className="containerX flex h-16 items-center justify-between">
        <Link href="/" className="font-extrabold">
          CurioLab
        </Link>
        <div className="flex gap-4 text-sm">
          <Link href="#">Projects</Link>
          <Link href="#">Get Involved</Link>
          <Link href="#">About</Link>
          <Link href="#" className="btnPrimary">Contact</Link>
        </div>
      </div>
    </div>
  );
}
