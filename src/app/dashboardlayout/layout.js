"use client"
import DashboardNav from '@/components/DashboardNav/DashboardNav';
import React from 'react';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


const DashboardLayout = ({ children }) => {
    return (
        <>
            <div className="flex flex-col md:flex-row ">
                <div>
                    <DashboardNav></DashboardNav>
                </div>
                <div className="flex-1 border">
                    {children}
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;

