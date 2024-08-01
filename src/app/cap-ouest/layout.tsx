import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import "../globals.css";
import { libreBaskerville } from "../styles/font";

export const metadata: Metadata = {
  title: "Découvrez notre programme immobilier Cap Ouest",
  description: "Découvrez notre programme immobilier Cap Ouest à Anglet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/logotop.png" sizes="any" type="image/png" />
      </head>
      <body className={`${libreBaskerville.className}`}>
        {children}
        <GoogleTagManager gtmId="GTM-5QJNDDV6" />
      </body>
    </html>
  );
}
