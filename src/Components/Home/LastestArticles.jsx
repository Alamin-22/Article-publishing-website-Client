import React from 'react';
import LastestCard from './LastestCard';
import CategoryBox from './CategoryBox';

const LastestArticles = () => {
    const latestArticlesData = [
        {
            title: "Long Title for Latest Article",
            text: " Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit...",
            thumbnail: "/marek-levak-GNVxujZ_CxU-unsplash.jpg"
        },
        {
            title: "Long Title for Latest Article",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit...",
            thumbnail: "/marek-levak-GNVxujZ_CxU-unsplash.jpg"
        },
        {
            title: "Long Title for Latest Article",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit...",
            thumbnail: "/marek-levak-GNVxujZ_CxU-unsplash.jpg"
        },
        {
            title: "Long Title for Latest Article",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit...",
            thumbnail: "/marek-levak-GNVxujZ_CxU-unsplash.jpg"
        },
        {
            title: "Long Title for Latest Article",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit...",
            thumbnail: "/marek-levak-GNVxujZ_CxU-unsplash.jpg"
        },
        {
            title: "Long Title for Latest Article",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit...",
            thumbnail: "/marek-levak-GNVxujZ_CxU-unsplash.jpg"
        },
        {
            title: "Long Title for Latest Article",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit...",
            thumbnail: "/marek-levak-GNVxujZ_CxU-unsplash.jpg"
        },
    ];

    const categoryData = ["Category A", "Category B", "Category C", "Category D", "Category E"];

    return (
        <div className='bg-[#D9D9D9] min-h-screen'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 '>
                <div className='col-span-3 order-2'>
                    <h1 className='font-black text-4xl py-10 pl-5'>Latest Articles</h1>
                    <div className='max-w-7xl px-5'>
                        {latestArticlesData.map((article, index) => (
                            <LastestCard
                                key={index}
                                title={article.title}
                                text={article.text}
                                thumbnail={article.thumbnail}
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
