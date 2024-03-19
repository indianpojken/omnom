import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omnom",
  description: "Hitta din lunch på nätet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={inter.className + " overflow-y-scroll h-full"}>
        {children}
      </body>
    </html>
  );
}
