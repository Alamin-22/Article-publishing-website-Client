"use client";
import React, { useEffect, useState } from "react";
import LastestCard from "../../components/Home/LastestCard";
// import LastestCard from "../../Components/Home/LastestCard";
import axios from "axios";
import axiosInstance from "@/api";

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
    <div className="min-h-screen">
      <h1 className="font-black text-center text-3xl py-10">All Articles</h1>
      <div className="max-w-7xl m-auto px-5">
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
