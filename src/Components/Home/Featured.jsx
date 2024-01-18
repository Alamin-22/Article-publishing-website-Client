import React from 'react';
import FeaturedCard from './FeaturedCard';

const Featured = () => {
    return (
        <div className='bg-[#D9D9D9] py-36'>
            <h1 className='font-black text-4xl py-10 pl-5'>Featured Articles</h1>

            <div className='grid grid-cols-2 gap-5 px-10'>
                <FeaturedCard idx={"01"} title={"This a Title Sent Through Props"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} />
                <FeaturedCard idx={"02"} title={"This a Title Sent Through Props"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} />
                <FeaturedCard idx={"03"} title={"This a Title Sent Through Props"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} />
                <FeaturedCard idx={"04"} title={"This a Title Sent Through Props"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} />
            </div>
        </div>
    );
};

export default Featured;