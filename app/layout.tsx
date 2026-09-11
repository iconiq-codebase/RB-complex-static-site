import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Interactions from "../components/Interactions";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "R.B. Complex", template: "%s | R.B. Complex" },
  description:
    "Explore R.B. Complex in Pako, New Road, Kathmandu. Browse the store directory, shopping inspiration and visitor information.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
