import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";
import { libreBaskerville } from "./styles/font";

export const metadata: Metadata = {
  title: "Nos programmes sur la côte Atlantique",
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
        <link rel="icon" href="/logotop.png" sizes="any" type="image/png" />

        {/* Google tag (gtag.js) for G-HZR4RQ0K73 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HZR4RQ0K73"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HZR4RQ0K73');
            `,
          }}
        />

        {/* Google tag (gtag.js) for AW-11272063965 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11272063965"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11272063965');
            `,
          }}
        />
      </head>
      <body className={`${libreBaskerville.className}`}>
        {children}
        <GoogleTagManager gtmId="GTM-NPNHJT72" />
      </body>
    </html>
  );
}
