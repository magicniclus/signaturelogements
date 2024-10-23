import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import "../globals.css";
import { libreBaskerville } from "../styles/font";

export const metadata: Metadata = {
  title: "Merci, Découvrez notre programme immobilier Cap Ouest",
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

        {/* Event snippet for Envoi de formulaire pour prospects conversion */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {'send_to': 'AW-11272063965/4SUGCOvG5cAYEN2X-P4p'});
            `,
          }}
        />
      </head>
      <body className={`${libreBaskerville.className}`}>
        {children}
        <GoogleTagManager gtmId="GTM-5QJNDDV6" />
      </body>
    </html>
  );
}
