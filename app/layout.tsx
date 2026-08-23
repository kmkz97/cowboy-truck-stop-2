import type { Metadata } from "next";
import { Alfa_Slab_One, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const slab = Alfa_Slab_One({
  variable: "--font-slab",
  subsets: ["latin"],
  weight: "400",
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} · Marshall, TX`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: `${site.name} · Marshall, TX`,
    description: site.description,
    locale: "en_US",
    type: "website",
    images: [{ url: "/logo.png", alt: site.name }],
  },
  twitter: {
    card: "summary",
    title: `${site.name} · Marshall, TX`,
    description: site.description,
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${slab.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
