import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arnav Malhotra",
  description: "Computer Engineering student at York University. Passionate about building impactful software solutions.",
  openGraph: {
    title: "Arnav Malhotra",
    description: "Computer Engineering student at York University. Passionate about building impactful software solutions.",
    type: "website",
  },
  twitter: {
    title: "Arnav Malhotra",
    description: "Computer Engineering student at York University. Passionate about building impactful software solutions.",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-950 text-gray-300`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
