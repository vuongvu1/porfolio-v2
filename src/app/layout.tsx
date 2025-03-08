import type { Metadata } from "next";
import { Grid } from "@radix-ui/themes";
import { VT323 } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import "animate.css";
import "@radix-ui/themes/styles.css";
import "@/styles/globals.css";

import { AppProvider } from "./provider";

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
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
      <body className={`${vt323.variable} antialiased`}>
        <AppProvider>
          <Theme accentColor="cyan" scaling="110%">
            <Grid
              columns="4"
              rows="4"
              gap="4"
              className="w-[100vw] max-w-screen-lg m-auto p-2 sm:p-4 md:p-8"
            >
              {children}
            </Grid>
          </Theme>
        </AppProvider>
      </body>
    </html>
  );
}
