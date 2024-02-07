"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/Provider/AuthProvider";
import NavbarComponent from "@/Components/Navbar";
import FooterCom from "@/Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#D9D9D9]">
          <div className="mx-auto">
            <AuthProvider>
              <NavbarComponent></NavbarComponent>
              {children}
              <FooterCom></FooterCom>
              <Toaster />
            </AuthProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
