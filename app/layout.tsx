
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LIGO — Safety Made Simple",
  description:
    "The collapsible helmet that goes wherever you go, and disappears when you get there.",
  openGraph: {
    title: "LIGO — Safety Made Simple",
    description:
      "The collapsible helmet that goes wherever you go, and disappears when you get there.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
