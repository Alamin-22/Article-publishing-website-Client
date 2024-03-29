"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import NavbarComponent from "@/components/Navbar";
import FooterCom from "@/components/Footer/Footer";
import AuthProvider from "@/Provider/AuthProvider";
import TanStackProvider from "@/Provider/TanStackProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-slate-50">
          <div className="mx-auto">
            <TanStackProvider>
              <AuthProvider>
                <NavbarComponent></NavbarComponent>
                <div className="max-w-7xl mx-auto">
                  {children}
                </div>
                <FooterCom></FooterCom>
                <Toaster />
              </AuthProvider>
            </TanStackProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
