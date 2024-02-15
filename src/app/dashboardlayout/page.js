import Chart from '@/components/DashboardComponents/Chart';
import Statics from '@/components/DashboardComponents/Statics';
import React from 'react';

const dashboard = () => {
    return (
        <div className=' bg-slate-50 h-screen'>
            <Chart></Chart>
            <Statics></Statics>
        </div>
    );
};

export default dashboard;