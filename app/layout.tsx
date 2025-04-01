import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-zinc-950 text-gray-300 dark:bg-zinc-100 dark:text-gray-900`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
