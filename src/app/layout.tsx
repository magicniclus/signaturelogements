import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
        <link
          rel="icon"
          href="https://www.signature-promotion.fr/wp-content/themes/signature/images/favicon.ico"
        />
      </head>
      <body className={inter.className}>{children}</body>
      <GoogleTagManager gtmId="GTM-5GNQ636R" />
    </html>
  );
}
