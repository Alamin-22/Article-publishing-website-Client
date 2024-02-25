"use client"
import ReactApexChart from 'react-apexcharts'

import React, { useState } from 'react';

const PieChart = () => {
    const [PiState, setPiState] = useState({

        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
    })


    return (
        <div>
            <div className=' sm:w-[350px] md:w-[400px] lg:w-[350px] xl:w-[500px]  mx-auto'>
                <ReactApexChart
                    options={PiState.options}
                    series={PiState.series}
                    type="donut" height={350} className={"w-full"} />
            </div>
        </div>
    );
};

export default PieChart;


