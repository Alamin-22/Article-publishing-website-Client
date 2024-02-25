"use client";
import React from "react";
import { Inter } from "next/font/google";
import DashboardNav from "@/Components/DashboardNav/DashboardNav";

const inter = Inter({ subsets: ["latin"] });

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-1">
        <div>
          <DashboardNav></DashboardNav>
        </div>
        <div className="flex-1 border">{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
