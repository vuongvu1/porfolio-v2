import type { Metadata } from "next";
import { Ubuntu_Mono } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import "animate.css";
import "@radix-ui/themes/styles.css";
import "@/styles/globals.css";

const ubuntuMono = Ubuntu_Mono({
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Portfolio v2",
  description: "This is my portfolio 2nd version",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${ubuntuMono.variable} antialiased`}>
        <Theme accentColor="cyan" scaling="110%">
          {children}
        </Theme>
      </body>
    </html>
  );
}
