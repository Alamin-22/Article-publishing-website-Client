"use client"
import React from 'react';
import DashboardNav from '../DashboardNav/DashboardNav';

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex flex-col lg:flex-row ">
            <div>
                <DashboardNav></DashboardNav>
            </div>
            <div className="flex-1 bg-green-500 ">
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;

