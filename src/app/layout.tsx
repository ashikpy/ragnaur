import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Ragnaor - A Non-Profit Dog Organization",
  description:
    "Ragnaor is a non-profit dog organization that aims to provide a better life for dogs in need.",
  generator: "Next.js",
  applicationName: "D. Ashik",
  keywords: [
    "Ragnaor",
    "Dog",
    "Non-Profit",
    "Organization",
    "Dogs",
    "Dog Food",
    "Dog Treats",
    "Dog Toys",
    "Dog Accessories",
  ],
  colorScheme: "light",
  openGraph: {
    title: "Ragnaor - A Non-Profit Dog Organization",
    description:
      "Ragnaor is a non-profit dog organization that aims to provide a better life for dogs in need.",
    url: "https://www.ragnaor.ashikpy.tech/",
    siteName: "www.ragnaor.ashikpy.tech",
    images: [
      {
        url: "https://3rsx8go52l.ufs.sh/f/W9Bfm56HsEpmeZt0DWohCFcDAawpbvez5J6XOVGI0tkli9gM",
        width: 1200,
        height: 628,
        alt: "Ragnaor - A Non-Profit Dog Organization",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ragnaor - A Non-Profit Dog Organization",
    description:
      "Ragnaor is a non-profit dog organization that aims to provide a better life for dogs in need.",
    creator: "D. Ashik",
    creatorId: "1243720976552144897",
    images: [
      "https://3rsx8go52l.ufs.sh/f/W9Bfm56HsEpmeZt0DWohCFcDAawpbvez5J6XOVGI0tkli9gM",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} flex min-h-screen flex-col bg-black text-white`}
      >
        <Navbar />
        <div className="flex-1">
          <main className="container mx-auto">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
