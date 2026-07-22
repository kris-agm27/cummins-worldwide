import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ variable: "--font-display", subsets: ["latin"], weight: ["400", "500", "600"] });
const sans = Manrope({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://cumminsworldwide.world"),
  title: "Cummins Worldwide | Financial Wisdom™",
  description: "Personal and enterprise financial services, human resources solutions, and practical guidance for lasting growth.",
  icons: { icon: "/brand-logo.png", shortcut: "/brand-logo.png" },
  openGraph: { title: "Cummins Worldwide", description: "Financial Wisdom™ for lasting growth.", images: [{ url: "/og.png", width: 1734, height: 907, alt: "Cummins Worldwide — Financial Wisdom for lasting growth" }] },
  twitter: { card: "summary_large_image", title: "Cummins Worldwide", description: "Financial Wisdom™ for lasting growth.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}
