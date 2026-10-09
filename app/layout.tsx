import type { Metadata } from "next";
import { Newsreader, DM_Sans } from "next/font/google";
import "./globals.css";

const serif = Newsreader({ subsets: ["latin", "vietnamese"], variable: "--font-serif", display: "swap" });
const sans = DM_Sans({ subsets: ["latin", "latin-ext"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Trang Linh Le",
  description: "Portfolio of Trang Linh Le, Thai Nguyen High School for the Gifted, Vietnam.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
