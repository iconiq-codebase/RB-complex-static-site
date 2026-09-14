import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Interactions from "../components/Interactions";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "R.B. Complex | Shopping in New Road, Kathmandu",
    template: "%s | R.B. Complex",
  },
  description:
    "Discover R.B. Complex in Pako, New Road, Kathmandu. Browse stores, offers, events, gallery updates and visitor information.",
  keywords: [
    "R.B. Complex",
    "RB Complex",
    "shopping in Kathmandu",
    "New Road shopping",
    "Pako Kathmandu",
    "shopping mall Nepal",
    "stores in New Road",
  ],
  authors: [{ name: "R.B. Complex" }],
  category: "Shopping center",
  robots: { index: true, follow: true },
  icons: { icon: "/icon.png", apple: "/icon.png" },
  openGraph: {
    title: "R.B. Complex | New Road, Kathmandu",
    description: "Stores, offers, events and visitor information at R.B. Complex.",
    type: "website",
    locale: "en_NP",
    siteName: "R.B. Complex",
  },
  twitter: {
    card: "summary",
    title: "R.B. Complex | New Road, Kathmandu",
    description: "Stores, offers, events and visitor information at R.B. Complex.",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="grain" aria-hidden="true" />
        <div className="progress" aria-hidden="true" />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Interactions />
      </body>
    </html>
  );
}
