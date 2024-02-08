"use client";
import React, { useEffect, useState } from "react";
import LastestCard from "../../Components/Home/LastestCard";
import axios from "axios";
import axiosInstance from "@/api";
import { TextInput } from "flowbite-react";

const page = () => {
  const [allArticlesData, setAllArticlesData] = useState([]);
  const apiEndPoint = "/allArticle";

  useEffect(() => {
    const getAllArticlesData = async () => {
      const { data: res } = await axiosInstance.get(apiEndPoint);
      setAllArticlesData(res);
      console.log(res);
    };
    getAllArticlesData();
  }, []);
  return (
    <div className="min-h-screen max-w-7xl m-auto">
      <h1 className="font-black text-center text-3xl py-10">All Articles</h1>

      <form className="p-5">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-lg bg-[#ffffff85] border-none"
            placeholder="Search articles"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <div className="px-5">
        {allArticlesData.map((article, index) => (
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
  );
};

export default page;
