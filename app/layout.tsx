import type { Metadata } from "next";
import {Inter} from 'next/font/google'
import "./globals.css";

 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "PlsProba",
  description: "PROBA by Wylie India, a Pearey Lall & Sons brand, delivers trusted Human-Machine Interface solutions for safe and efficient material handling since the 1980s.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
