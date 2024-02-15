import BarChart from '@/components/DashboardComponents/BarChart';
import Chart from '@/components/DashboardComponents/Chart';
import PieChart from '@/components/DashboardComponents/PieChart';
import Statics from '@/components/DashboardComponents/PieChart';
import React from 'react';

const dashboard = () => {
    return (
        <div className=' bg-slate-50 '>
            <Chart></Chart>
            <PieChart></PieChart>
            <BarChart></BarChart>
        </div>
    );
};

export default dashboard;