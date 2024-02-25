"use client"
import React, { useState, useEffect } from "react";
import axiosInstance from "@/api";
import { Button, Card } from "flowbite-react";
import toast from "react-hot-toast";

const CommunityRecentPost = () => {
  const [recentArticles, setRecentArticles] = useState([]);
  const apiEndPointRecentArticles = "/allArticle";



  useEffect(() => {
    const fetchRecentArticles = async () => {
      try {
        const { data } = await axiosInstance.get(apiEndPointRecentArticles);
        setRecentArticles(data.slice(0, 3)); 
      } catch (error) {
        console.error("Error fetching recent articles:", error);
        toast.error("Failed to fetch recent articles.");
      }
    };
    fetchRecentArticles();
  }, []);

  return (
    <div className="w-full p-2 bg-[#ededed] mt-5 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
        Recent Articles
      </h5>
      {recentArticles.map((article, index) => (
        <div key={index}>
          <Card className="mt-3 bg-[#ededed]">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {article.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {article.description}
            </p>
            <Button href={`/articles/${article.id}`}>
              Read more
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CommunityRecentPost;
