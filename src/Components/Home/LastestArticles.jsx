import React from 'react';
import LastestCard from './LastestCard';
import CategoryBox from './CategoryBox';

const LastestArticles = () => {
    return (
        <div className='bg-[#D9D9D9] min-h-screen'>
            <div className='grid grid-cols-4 gap-10 '>
                <div className='col-span-3'>
                    <h1 className='font-black text-4xl py-10 pl-5'>Lastest Articles</h1>
                    <div className='max-w-7xl pl-10'>
                        <LastestCard
                            title={"This a Title Sent Through Props"}
                            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                            thumbnail={"/marek-levak-GNVxujZ_CxU-unsplash.jpg"}
                        />
                        <LastestCard
                            title={"This a Title Sent Through Props"}
                            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                            thumbnail={"/marek-levak-GNVxujZ_CxU-unsplash.jpg"}
                        />
                        <LastestCard
                            title={"This a Title Sent Through Props"}
                            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                            thumbnail={"/marek-levak-GNVxujZ_CxU-unsplash.jpg"}
                        />
                        <LastestCard
                            title={"This a Title Sent Through Props"}
                            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                            thumbnail={"/marek-levak-GNVxujZ_CxU-unsplash.jpg"}
                        />
                        <LastestCard
                            title={"This a Title Sent Through Props"}
                            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                            thumbnail={"/marek-levak-GNVxujZ_CxU-unsplash.jpg"}
                        />
                        <LastestCard
                            title={"This a Title Sent Through Props"}
                            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                            thumbnail={"/marek-levak-GNVxujZ_CxU-unsplash.jpg"}
                        />
                    </div>
                </div>
                <div>
                    <h1 className='font-black text-4xl py-10 pl-5'>Categories</h1>
                    <div className='flex flex-wrap gap-4'>
                        <CategoryBox categoryName={"categoryName"} />
                        <CategoryBox categoryName={"Name"} />
                        <CategoryBox categoryName={"Category"} />
                        <CategoryBox categoryName={"New Category"} />
                        <CategoryBox categoryName={"Long category Name"} />
                        <CategoryBox categoryName={"Sm Name"} />
                        <CategoryBox categoryName={"categoryName"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LastestArticles;