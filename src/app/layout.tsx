import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Providers from "@/components/Providers";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nimara — Reformer Pilates in Palma de Mallorca",
    template: "%s | Nimara Pilates",
  },
  description:
    "Premium Reformer Pilates studio in Santa Catalina, Palma de Mallorca. Small classes, expert instruction, Balanced Body equipment. Reconnect with yourself.",
  keywords: [
    "Reformer Pilates",
    "Pilates Palma",
    "Palma de Mallorca Pilates",
    "Reformer Pilates Mallorca",
    "Santa Catalina",
    "Balanced Body",
    "Pilates studio",
  ],
  openGraph: {
    title: "Nimara — Reformer Pilates in Palma de Mallorca",
    description:
      "Premium Reformer Pilates studio in Santa Catalina, Palma de Mallorca. Small classes, expert instruction, Balanced Body equipment.",
    url: "https://nimarastudio.es",
    siteName: "Nimara Pilates",
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nimara — Reformer Pilates in Palma de Mallorca",
    description:
      "Premium Reformer Pilates studio in Santa Catalina, Palma de Mallorca.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
