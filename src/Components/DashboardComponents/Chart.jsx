
import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import axiosInstance from '@/api';
import { useQuery } from '@tanstack/react-query';
import { Spinner } from 'flowbite-react';

const Chart = () => {
    const { data: articlesPerDay = {}, isPending: isArticlesPending } = useQuery({
        queryKey: ['articles'],
        queryFn: async () => {
            const res = await axiosInstance.get(`/articlesPerDay`);
            return res.data;
        },
    });

    const { data: communityPosts = {}, isPending: isCommunityPostsPending } = useQuery({
        queryKey: ['communityPosts'],
        queryFn: async () => {
            const res = await axiosInstance.get(`/CommunityPostsPerDay`);
            return res.data;
        },
    });

    const [state, setState] = useState({
        series: [
            {
                name: 'Total Article',
                data: articlesPerDay.counts || [],
            },
            {
                name: 'Total Posts',
                data: communityPosts.counts || [],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: 'area',
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
            },
            xaxis: {
                type: 'day',
                categories: articlesPerDay.dates || [],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm',
                },
            },
        },
    });

    // Use useEffect to update the state after data has been fetched
    useEffect(() => {
        setState({
            series: [
                {
                    name: 'Total Article',
                    data: articlesPerDay.counts || [],
                },
                {
                    name: 'Total Posts',
                    data: communityPosts.counts || [],
                },
            ],
            options: {
                chart: {
                    height: 350,
                    type: 'area',
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'smooth',
                },
                xaxis: {
                    type: 'day',
                    categories: articlesPerDay.dates || [],
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm',
                    },
                },
            },
        });
    }, [articlesPerDay, communityPosts]);

    if (isArticlesPending || isCommunityPostsPending) {
        // Loading state or add a loading spinner here
        return (
            <div className='flex justify-center'>
                <Spinner aria-label="Extra large spinner example" size="xl" />
            </div>
        );
    }

    return (
        <div>
            <div className='sm:w-[350px] md:w-[500px] lg:w-[750px] xl:w-[1000px] mx-auto'>
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type='area'
                    height={350}
                    className={'w-full'}
                />
            </div>
        </div>
    );
};

export default Chart;
