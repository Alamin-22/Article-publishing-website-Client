"use client"
import DashboardNav from '@/components/DashboardNav/DashboardNav';
import React from 'react';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


const DashboardLayout = ({ children }) => {
    return (
        <>

            <div className="flex flex-col lg:flex-row ">
                <div>
                    <DashboardNav></DashboardNav>
                </div>
                <div className="flex-1 bg-red-200">
                    {children}
                </div>
            </div>


        </>
    );
};

export default DashboardLayout;

