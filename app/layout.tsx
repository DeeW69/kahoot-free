import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuizVolt — quiz en direct",
  description: "Crée ton quiz, rassemble tes amis et joue en direct.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
