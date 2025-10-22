import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Web",
  description: "Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar title="DevLink" />
        {children}
      </body>
    </html>
  );
}
