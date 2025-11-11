import "../styles/globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "EchoCircle",
  description: "Your voice, your vibe. A rhythm-aware voice journaling platform."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased bg-gradient-to-br from-pink-50 to-indigo-50 text-gray-800">
        {children}
      </body>
    </html>
  );
}

