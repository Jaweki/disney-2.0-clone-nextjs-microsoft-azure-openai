import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

export const metadata: Metadata = {
  title: "Diseney+ Clone",
  description:
    "This website is a clone of the original Disney+ created by Jack Weru Kioni, github @Jaweki, twitter | X.com @JackKioni. Watch the latest upto date HD and 4k movies and TV shows, all in oneplace for free. No user data collected!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#1A1C29]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
