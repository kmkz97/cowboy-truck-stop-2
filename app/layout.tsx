import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const slab = localFont({
  src: "./fonts/alfa-slab-one-latin-400.woff2",
  variable: "--font-slab",
  weight: "400",
  display: "swap",
});

const body = localFont({
  src: [
    { path: "./fonts/source-sans-3-latin-400.woff2", weight: "400" },
    { path: "./fonts/source-sans-3-latin-500.woff2", weight: "500" },
    { path: "./fonts/source-sans-3-latin-600.woff2", weight: "600" },
    { path: "./fonts/source-sans-3-latin-700.woff2", weight: "700" },
  ],
  variable: "--font-body",
  display: "swap",
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
