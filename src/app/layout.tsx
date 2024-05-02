import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";
import { larsseit } from "./styles/font";

export const metadata: Metadata = {
  title: "Nos programme sur la côte Atlantique",
  description: "Découvrez nos programmes immobiliers sur la côte Atlantique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/logos/A-500x500.png" sizes="any" />
      </head>
      <body className={larsseit.className}>{children}</body>
      <GoogleTagManager gtmId="GTM-5GNQ636R" />
    </html>
  );
}
