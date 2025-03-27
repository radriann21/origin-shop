import { Noto_Serif, Noto_Sans } from "next/font/google";

export const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
})

export const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
})