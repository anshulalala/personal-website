import type { Metadata } from "next";
import { Kalnia_Glaze, Handjet } from "next/font/google";
import "./globals.css";

const kalnia = Kalnia_Glaze({
  variable: "--font-kalnia",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

const handjet = Handjet({
  variable: "--font-handjet",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anshula Singh",
  description: "There's something interesting here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kalnia.variable} ${handjet.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
