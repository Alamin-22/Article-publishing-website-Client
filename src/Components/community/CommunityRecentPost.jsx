"use client"
import { Button, Card } from "flowbite-react";
import getRecentPostData from "@/lib/getRecentCommunityPost";
import { useEffect, useState } from "react";

const CommunityRecentPost = () => {
  const [recentArticles, setRecentArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articles = await getRecentPostData();
        setRecentArticles(articles);
      } catch (error) {
        console.error("Error fetching recent posts:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <div className="w-full p-2 bg-[#ededed] mt-5 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
        Recent Articles
      </h5>
      {recentArticles.map((article, index) => (
        <div className="" key={index}>
          <Card className="mt-3 bg-white">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {article.title}
            {/* <p className=" text-gray-700 font-black text-sm dark:text-gray-400">
             {article.author}
            </p> */}
            <p className="font-normal text-gray-700 text-sm  dark:text-gray-400">
              {article.article.slice(0,50)}
            </p>
            
            </h5>
            
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CommunityRecentPost;