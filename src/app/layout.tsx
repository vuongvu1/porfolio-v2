import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import { AppProvider } from "./provider";
import "animate.css";
import "@radix-ui/themes/styles.css";
import "@/styles/globals.css";

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
            <div className="h-[100vh] w-[100vw] p-8 flex items-start justify-center gap-4">
              {children}
            </div>
          </Theme>
        </AppProvider>
      </body>
    </html>
  );
}
