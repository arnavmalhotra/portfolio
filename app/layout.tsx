import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arnav Malhotra",
  description: "Computer Engineering student at York University. Passionate about building impactful software solutions.",
  metadataBase: new URL('https://arnavmalhotra.com'),
  openGraph: {
    title: "Arnav Malhotra",
    description: "Computer Engineering student at York University. Passionate about building impactful software solutions.",
    type: "website",
    url: "https://arnavmalhotra.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arnav Malhotra - Developer Portfolio"
      }
    ],
    locale: "en_US",
    siteName: "Arnav Malhotra"
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnav Malhotra",
    description: "Computer Engineering student at York University. Passionate about building impactful software solutions.",
    images: ["/og-image.png"],
    creator: "@your_twitter",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  }
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
