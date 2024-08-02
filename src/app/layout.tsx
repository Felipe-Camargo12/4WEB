"use client"

// RootLayout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../app/components/header";
import { Aside } from '../app/components/aside';
import { useState } from 'react';
import { metadata } from '../../metadata';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isAsideVisible, setAsideVisible] = useState(false);

  const toggleAside = () => {
    setAsideVisible(prev => !prev);
  };

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header onToggleAside={toggleAside} />
        {isAsideVisible && <Aside />}
        {children}
      </body>
    </html>
  );
}
