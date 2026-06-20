"use client"

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MenuComponent } from "../components/menu";
import { AppProvider } from "../contexts/AppContexts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "MusicBox",
//   description: "Aulas de música",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const usuarioLogado = localStorage.getItem("logado")

  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full ">
        <AppProvider>
          {
            // usuarioLogado?.length == 0 && <MenuComponent />
            !usuarioLogado && <MenuComponent />
          }
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
