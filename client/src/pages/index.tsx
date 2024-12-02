import Image from "next/image";
import localFont from "next/font/local";
import { Navbar,  Footer, Welcome, Services, Transactions } from "./components";

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

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen`}
    >
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome />
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>
  );
}
