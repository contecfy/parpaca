import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import PreHeader from "@/components/navigation/PreHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PARPACA - Participatory Action Research and Policy Advocacy Centre",
  description: "PARPACA advances participatory research, policy advocacy, and community-centered development initiatives aligned with the Sustainable Development Goals (SDGs) across Africa.",
  openGraph: {
    title: "PARPACA - Participatory Action Research and Policy Advocacy Centre",
    description: "Empowering communities and strengthening governance across Africa.",
    url: "https://parpacaafrica.org",
    siteName: "PARPACA",
    images: [
      {
        url: "https://parpacaafrica.org/hands.webp",
        width: 1200,
        height: 630,
        alt: "PARPACA Foundation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PARPACA - Participatory Action Research and Policy Advocacy Centre",
    description: "Empowering communities and strengthening governance across Africa.",
    images: ["https://parpacaafrica.org/hands.webp"],
  },
};

import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export const dynamic = 'force-dynamic';

async function getGlobalData() {
    try {
        const docRef = doc(db, 'globals', 'layout');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
        }
    } catch(err) {
        // Suppress expected errors during build
    }
    return null;
}

import { HideOnAuthAndAdmin } from '@/components/navigation/LayoutVisibility';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalData = await getGlobalData();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <HideOnAuthAndAdmin>
          <PreHeader data={globalData} />
          <Header data={globalData} />
        </HideOnAuthAndAdmin>
        {children}
        <HideOnAuthAndAdmin>
          <Footer data={globalData} />
        </HideOnAuthAndAdmin>
      </body>
    </html>
  );
}
