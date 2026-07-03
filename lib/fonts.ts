import { Inter, Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";

export const generalSans = localFont({
  src: [
    { path: "../app/fonts/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../app/fonts/GeneralSans-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../app/fonts/GeneralSans-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-general-sans",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});
