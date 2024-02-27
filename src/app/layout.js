"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import NavbarComponent from "@/Components/Navbar";
import FooterCom from "@/Components/Footer/Footer";
import AuthProvider from "@/Provider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-slate-50">
          <div className="mx-auto">
            <AuthProvider>
              <NavbarComponent></NavbarComponent>
              <div className="max-w-7xl mx-auto">
                {children}
              </div>
              <FooterCom></FooterCom>
              <Toaster />
            </AuthProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
