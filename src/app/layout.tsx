"use client";

import "./globals.css";

import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const DN_Sans_Font = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={DN_Sans_Font.className}>
        <div className={"flex flex-col min-h-screen"}>
            <Header/>
              <main className={"flex-1 container"}>
                  {children}
              </main>
            <Footer/>
        </div>
      </body>
    </html>
  )
}
