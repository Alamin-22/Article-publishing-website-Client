"use client";
import React, { useEffect, useState } from "react";
import LastestCard from "../../components/Home/LastestCard";
import axiosInstance from "@/api";
import { Pagination } from "flowbite-react";

const Page = () => {
  const [allArticlesData, setAllArticlesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const apiEndPoint = "/allArticle";

  useEffect(() => {
    const getAllArticlesData = async () => {
      const { data: res } = await axiosInstance.get(
        `${apiEndPoint}?page=${currentPage}&search=${searchTerm}`
      );
      setAllArticlesData(res);
      // console.log(res);
    };

    const getTotalPages = async () => {
      const { data: res } = await axiosInstance.get(
        `/totalPages?search=${searchTerm}`
      );
      setTotalPages(res.totalPages);
    };

    getAllArticlesData();
    getTotalPages();
  }, [currentPage, searchTerm]);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const onSubmit = async (e) => {
    // console.log(totalPages);
    e.preventDefault();
    const searchInput = e.target.elements.searchInput.value;
    setSearchTerm(searchInput);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen max-w-7xl m-auto">
      <h1 className="font-black text-center text-3xl py-10">All Articles</h1>

      <form className="p-5" onSubmit={onSubmit}>
        <label
          htmlFor="default-search"
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
            name="searchInput"
            className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-lg bg-[#ffffff85] border-none"
            placeholder="Search articles"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-black hover:bg-white hover:text-black hover:border hover:border-black font-medium rounded-lg text-sm px-4 py-2 "
          >
            Search
          </button>
        </div>
      </form>

      <div className="px-5">
        <Pagination
          layout="navigation"
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          showIcons
        />
        {allArticlesData.map((article, index) => (
          <LastestCard
            key={article._id}
            articleId={article._id}
            title={article.title}
            author={article.author}
            text={article.article}
            thumbnail={article.imglink}
          />
        ))}
      </div>

      <div className="flex justify-center my-5">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </div>
  );
};

export default Page;
