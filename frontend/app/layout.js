import localFont from "next/font/local";
import "./globals.css";
import HeaderComponent from "./component/HeaderComponent";
import Footer from "./component/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// App Router metadata
export const metadata = {
  title: "CRC Treads | India’s #1 Precured Tread Rubber & Bonding Gum for Tyre Retreading",
  description:
    "CRC Treads offers India’s most trusted precured tread rubber and bonding gum for tyre retreading. Built for mining, highways, and heavy-duty performance. Exported globally with proven results.",
  keywords:
    "CRC Treads, Precured Tread Rubber, Tyre Retreading, Bonding Gum, Mining Tread Rubber, Retreading Materials, High Mileage Tyre Rubber, Export Quality Tread Rubber, India Tyre Rubber Suppliers, Tyre Retreading Company India, Heavy Duty Retreading Solutions",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased font-mukta">
        <HeaderComponent />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
