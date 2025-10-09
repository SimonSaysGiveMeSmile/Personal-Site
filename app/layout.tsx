import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simon Tian - AI Engineer & Entrepreneur",
  description: "Personal portfolio of Simon Tian - AI Engineer, Entrepreneur, and Technical Founder",
  keywords: ["AI", "Machine Learning", "Computer Vision", "Entrepreneur", "Cornell", "YC"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

