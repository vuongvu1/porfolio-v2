import type { Metadata } from "next";
import { Grid, Theme } from "@radix-ui/themes";
import { Ubuntu_Mono } from "next/font/google";
import "animate.css";
import "@radix-ui/themes/styles.css";

import "@/styles/globals.css";
import { AppProvider } from "@/app/provider";
import { AnimatedLogo } from "@/components";

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
        <AppProvider>
          <Theme accentColor="cyan" scaling="110%">
            <Grid
              columns="4"
              rows="4"
              gap="4"
              className="w-[100vw] max-w-screen-lg m-auto p-2 sm:p-4 md:p-8"
            >
              {children}
              <AnimatedLogo logoSrc="/ship-wheel.svg" alt="" />
            </Grid>
          </Theme>
        </AppProvider>
      </body>
    </html>
  );
}
