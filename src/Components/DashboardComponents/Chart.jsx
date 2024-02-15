"use client"
import ReactApexChart from 'react-apexcharts'

import React, { useState } from 'react';

const Chart = () => {
    const [state, setState] = useState({

        series: [{
            name: 'New user',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'Old User',
            data: [11, 32, 45, 32, 34, 52, 41]
        }],
        options: {
            chart: {
                height: 350,
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'day',
                categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },



    })


    return (
        <div>
            <div className=' sm:w-[350px] md:w-[500px] lg:w-[750px] xl:w-[1000px]  mx-auto'>
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="area" height={350} className={"w-full"} />
            </div>
        </div>
    );
};

export default Chart;


