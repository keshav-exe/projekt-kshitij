import { Space_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import { Suspense } from "react";
import Loading from "./loading";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Projekt Kshitij",
  description:
    "Generated by create next appEnhance your reading with Kshitij, an open-source article summarizer that transforms lengthy articles into concise summaries using the powerful GPT-4.",
  other: {
    "twitter:image": "https://i.ibb.co/5RMWgNd/logo512.png",
    "twitter:card": "summary_image_large",
    "twitter:url": "https://projekt-kshitij.vercel.app/",
    "twitter:domain": "projekt-kshitij.vercel.app",
    "twitter:title": "Projekt Kshitij",
    "twitter:description":
      "Generated by create next appEnhance your reading with Kshitij, an open-source article summarizer that transforms lengthy articles into concise summaries using the powerful GPT-4.",

    "og:url": "https://projekt-kshitij.vercel.app/",
    "og:type": "website",
    "og:title": "Projekt Kshitij",
    "og:description":
      "Generated by create next appEnhance your reading with Kshitij, an open-source article summarizer that transforms lengthy articles into concise summaries using the powerful GPT-4.",
    "og:image": "https://i.ibb.co/5RMWgNd/logo512.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.className} bg-background justify-evenly min-h-screen flex flex-col`}
      >
        <Suspense fallback={<Loading />}>
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
