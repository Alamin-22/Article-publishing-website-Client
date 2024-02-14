"use client";
import axiosInstance from "@/api";
import { useEffect, useState } from "react";
import useAuth from "./../../../Hooks/useAuth";

const MyAllArticle = () => {
  const { user } = useAuth();
  const apiEndPoint = "/allArticle";
  const [myAllArticleData, setMyAllArticleData] = useState([]);

  useEffect(() => {
    const getAllPostData = async () => {
      try {
        const { data: res } = await axiosInstance.get(apiEndPoint);
        setMyAllArticleData(res);
      } catch (error) {
        console.error("Error fetching all post data:", error);
        // Assuming you have imported toast from some library
        toast.error("Failed to fetch post data.");
      }
    };
    getAllPostData();
  }, []);

  const myArticles = myAllArticleData.filter(
    (article) => article?.authorEmail === user?.email
  );

  return (
    <div>
        <div className="bg-[#D7D7D7] shadow-2xl rounded-2xl m-2 p-5"><h1>Total Post: {myArticles?.length}</h1></div>
      <div>
        {myArticles?.length === 0 && <div>You Have No Article</div>}
        {myArticles?.map((article, index) => (
          <div
            className="bg-[#D7D7D7] shadow-2xl rounded-2xl m-2 p-5"
            key={article?._id}>
            

            <div className="flex items-center gap-5">
              <div>
                <h1 className="text-white font-black text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                  {index + 1}
                </h1>
              </div>
              <div>
                <img
                  className=" h-36 w-56 object-cover shadow-xl border-white border-2"
                  src={article?.imglink}
                  alt="Profile Image"
                />
              </div>
              <div>
                <h1 className="text-gray-800 font-black text-2xl">
                  {article?.title}
                </h1>
                <p className="text-gray-700 text-justify">{article?.article}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAllArticle;
