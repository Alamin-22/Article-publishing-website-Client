"use client"
import ReactApexChart from 'react-apexcharts'

import React, { useState } from 'react';

const Chart = () => {
    const [state, setState] = useState({

        series: [44, 55, 41],
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
                    options={state.options}
                    series={state.series}
                    type="donut" height={350} className={"w-full"} />
            </div>
        </div>
    );
};

export default Chart;


