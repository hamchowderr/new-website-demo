import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sinclair Counseling | Online Therapy in Utah",
    template: "%s | Sinclair Counseling",
  },
  description: "Professional online therapy services in Utah. Specializing in trauma, addiction, depression, anxiety, grief, and ADHD counseling.",
  keywords: ["therapy", "counseling", "Utah", "online therapy", "mental health", "trauma", "anxiety", "depression"],
  authors: [{ name: "Sinclair Counseling" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sinclaircounseling.com",
    siteName: "Sinclair Counseling",
    title: "Sinclair Counseling | Online Therapy in Utah",
    description: "Professional online therapy services in Utah. Specializing in trauma, addiction, depression, anxiety, grief, and ADHD counseling.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
