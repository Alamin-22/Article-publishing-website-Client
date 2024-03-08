"use client"
import ReactApexChart from 'react-apexcharts'

import { useState } from 'react';
import axiosInstance from '@/api';
import { useQuery } from '@tanstack/react-query';

const Chart = () => {

    const { data: articlesPerDay = {}, isPending } = useQuery({
        queryKey: ["articles"],
        queryFn: async () => {
            const res = await axiosInstance.get(`/articlesPerDay`);
            return res.data;
        },
    });
    const {dates, counts}= articlesPerDay;
    console.log(counts);

    const [state, setState] = useState({

        series: [{
            name: 'Total Article',
            data: articlesPerDay?.counts,
        }, {
            name: 'Total Posts',
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
                categories: articlesPerDay?.dates
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


