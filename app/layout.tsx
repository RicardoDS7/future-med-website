import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import localFont from "next/font/local";

const satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "FutureMed - Revolutionizing Skin Healthcare with AI",
  description: "FutureMed is transforming skin healthcare with AI-powered diagnostics and treatment plans. Our platform enables clinics to provide accurate, efficient, and personalized care for skin conditions, enhancing patient outcomes and clinic efficiency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} font-sans antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
