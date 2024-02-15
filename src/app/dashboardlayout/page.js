import Chart from '@/components/DashboardComponents/Chart';
import Statics from '@/components/DashboardComponents/Statics';
import React from 'react';

const dashboard = () => {
    return (
        <div className=' h-screen'>
            <h2 className='text-5xl text-white' >this is dashboard</h2>
            <Chart></Chart>
            <Statics></Statics>
        </div>
    );
};

export default dashboard;