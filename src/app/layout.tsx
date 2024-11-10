
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import Navbar from "@/components/navigation/Navbar";
import { Theme } from "@radix-ui/themes";
import ThemeConfiguration from "@/components/theme/ThemeConfiguration";
import { getThemeFromCookies } from "@/components/theme/theme";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["200", "400", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["200", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Binary Battle",
  description: "A game of about grids!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = await getThemeFromCookies();

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} antialiased`} suppressHydrationWarning>
        <body className="font-inter">
          <Theme {...theme}>
            <Navbar />
            {children}
            <ThemeConfiguration />
          </Theme>
      </body>
    </html>
  );
}
