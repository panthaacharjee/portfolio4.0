import { Mulish } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata = {
  title: "Pantha Acharjee",
  description: "Software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <main>
          <Navbar/>
          {children}
        </main>
      </body>
    </html>
  );
}
