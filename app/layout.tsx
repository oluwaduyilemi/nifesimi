import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "The Wardrobe Edit | Your Wardrobe, But Better",
  description:
    "Personal styling and personal shopping made a little easier. The Wardrobe Edit helps you discover, style and source pieces you'll love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f8f5f0] text-[#3d281d] antialiased">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}