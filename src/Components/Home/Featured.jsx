"use client"
import React, { useEffect, useState } from 'react';
import LastestCard from './LastestCard';
import CategoryBox from './CategoryBox';
import axios from 'axios';
import axiosInstance from '@/api';
import FeaturedCard from './FeaturedCard';
import { Carousel } from 'flowbite-react';


const Featured = () => {
    const [FeaturedArticlesData, setFeaturedArticlesData] = useState([]);
    const apiEndPoint = "/mostLikedArticles"

    useEffect(() => {
        const getFeaturedArticlesData = async () => {
            const { data: res } = await axiosInstance.get(apiEndPoint);
            setFeaturedArticlesData(res);
            console.log(res);
        }
        getFeaturedArticlesData();
    }, [])


    return (
        <div className='bg-[#D9D9D9]'>
            <div className='col-span-3 order-2'>
                <h1 className='font-black text-4xl py-10 pl-5'>Featured Articles</h1>
                <div className='max-w-7xl px-5'>
                    <Carousel className='px-20' slide={false}>
                        {FeaturedArticlesData.map((article, index) => (
                            <FeaturedCard
                                key={article._id}
                                articleId={article._id}
                                title={article.title}
                                author={article.author}
                                text={article.article}
                                thumbnail={article.imglink}
                                idx={index}
                            />
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Featured;
