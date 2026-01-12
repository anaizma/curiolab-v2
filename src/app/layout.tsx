import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: {
    default: "CurioLab",
    template: "%s | CurioLab",
  },
  description:
    "CurioLab is a project-based STEM program where students turn ideas into real engineering builds, guided by mentors in a collaborative, hands-on environment.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
