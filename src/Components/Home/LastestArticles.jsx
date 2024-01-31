"use client"
import React, { useEffect, useState } from 'react';
import LastestCard from './LastestCard';
import CategoryBox from './CategoryBox';
import axios from 'axios';


const LastestArticles = () => {
    const [latestArticlesData, setLastestArticlesData] = useState([]);
    const apiEndPoint = "https://article-publishing-website-server.vercel.app/latestArticles"

    useEffect(() => {
        const getlastestArticlesData = async () => {
            const { data: res } = await axios.get(apiEndPoint);
            setLastestArticlesData(res);
            console.log(res);
        }
        getlastestArticlesData();
    }, [])

    const categoryData = ["Category A", "Category B", "Category C", "Category D", "Category E"];

    return (
        <div className='bg-[#D9D9D9] min-h-screen'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 '>
                <div className='col-span-3 order-2'>
                    <h1 className='font-black text-4xl py-10 pl-5'>Latest Articles</h1>
                    <div className='max-w-7xl px-5'>
                        {latestArticlesData.map((article, index) => (
                            <LastestCard
                                key={article._id}
                                articleId={article._id}
                                title={article.title}
                                author={article.author}
                                text={article.article}
                            />
                        ))}
                    </div>
                </div>
                <div className='order-1 lg:order-3'>
                    <h1 className='font-black text-4xl py-10 pl-5'>Categories</h1>
                    <div className='flex flex-wrap gap-4 px-5'>
                        {categoryData.map((category, index) => (
                            <CategoryBox key={index} categoryName={category} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LastestArticles;
