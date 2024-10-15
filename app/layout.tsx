import type { Metadata } from "next";
import localFont from "next/font/local";
import "./mian.scss";

const publicSansBold = localFont({
  src: "./assets/fonts/PublicSans-Bold.woff",
  variable: "--font-publicSans-bold",
  weight: "700",
});
const publicSans = localFont({
  src: "./assets/fonts/PublicSans-Regular.woff",
  variable: "--font-publicSans",
  weight: "400",
});

export const metadata: Metadata = {
  title: "FinTrack",
  description: "Track your money and save for the future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSansBold.variable} ${publicSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
