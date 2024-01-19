import React from 'react';
import FeaturedCard from './FeaturedCard';

const featuredData = [
    {
        idx: "01",
        title: "This a Title Sent Through Props",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        idx: "02",
        title: "This a Title Sent Through Props",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        idx: "03",
        title: "This a Title Sent Through Props",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        idx: "04",
        title: "This a Title Sent Through Props",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
];

const Featured = () => {
    return (
        <div className='bg-[#D9D9D9] min-h-screen flex flex-col items-start justify-center py-10'>
            <h1 className='font-black text-4xl py-10 pl-5'>Featured Articles</h1>

            <div className='grid grid-cols-2 gap-10 px-10'>
                {featuredData.map((data) => (
                    <FeaturedCard key={data.idx} idx={data.idx} title={data.title} text={data.text} />
                ))}
            </div>
        </div>
    );
};

export default Featured;
