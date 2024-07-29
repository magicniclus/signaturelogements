import localFont from "next/font/local";

import { Libre_Baskerville } from "@next/font/google";

// Remplacez les chemins et les configurations selon vos fichiers de police spécifiques
const larsseit = localFont({
  src: [
    {
      path: "./fonts/Type Dynamic - Larsseit Bold Italic.otf",
      weight: "700", // Bold
      style: "italic",
    },
    {
      path: "./fonts/Type Dynamic - Larsseit Bold.otf",
      weight: "700", // Bold
      style: "normal",
    },
    {
      path: "./fonts/Type Dynamic - Larsseit ExtraBold Italic.otf",
      weight: "800", // ExtraBold
      style: "italic",
    },
    {
      path: "./fonts/Type Dynamic - Larsseit ExtraBold.otf",
      weight: "800", // ExtraBold
      style: "normal",
    },
    {
      path: "./fonts/Type Dynamic - Larsseit Italic.otf",
      weight: "400", // Italic usually does not change weight, assuming Regular Italic
      style: "italic",
    },
    {
      path: "./fonts/Type Dynamic - Larsseit Light Italic.otf",
      weight: "300", // Light
      style: "italic",
    },
    {
      path: "./fonts/Type Dynamic - Larsseit Light.otf",
      weight: "300", // Light
      style: "normal",
    },
    {
      // Duplicate entry for ExtraBold.otf, already added
      path: "./fonts/Type Dynamic - Larsseit ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Type Dynamic - Larsseit Medium Italic.otf",
      weight: "500", // Medium
      style: "italic",
    },
    {
      path: "./fonts/Type Dynamic - Larsseit Medium.otf",
      weight: "500", // Medium
      style: "normal",
    },
    {
      path: "./fonts/Type Dynamic - Larsseit Thin Italic.otf",
      weight: "100", // Thin
      style: "italic",
    },
    {
      path: "./fonts/Type Dynamic - Larsseit Thin.otf",
      weight: "100", // Thin
      style: "normal",
    },
    {
      path: "./fonts/Type Dynamic - Larsseit.otf",
      weight: "400", // Assuming Regular
      style: "normal",
    },
  ],
  variable: "--font-larsseit",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export { larsseit, libreBaskerville };
