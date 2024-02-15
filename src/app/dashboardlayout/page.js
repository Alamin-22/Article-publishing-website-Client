import BarChart from '@/components/DashboardComponents/BarChart';
import Chart from '@/components/DashboardComponents/Chart';
import PieChart from '@/components/DashboardComponents/PieChart';
import React from 'react';

const dashboard = () => {
    return (
        <div className=' bg-slate-50 '>
            <Chart></Chart>
            <div className='flex flex-col lg:flex-row items-center'>
                <PieChart></PieChart>
                <BarChart></BarChart>
            </div>
        </div>
    );
};

export default dashboard;