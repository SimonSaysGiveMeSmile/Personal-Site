import type { Metadata } from "next";
import "./globals.css";
import "@fontsource-variable/manrope";
import ThemeProvider from "@/components/ThemeProvider";

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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

