"use client"

import GetAllArticle from "@/lib/getAllArticle";
import GetAllPostData from "@/lib/getAllPostData";
import GetAllUsers from "@/lib/getAllUser";
import CountUp from "react-countup";

const AboutCount = async () => {
  const [getAllArticle] =GetAllArticle();
  const [getAllUsers] = GetAllUsers();
const [getAllPost] =GetAllPostData()





  return (
    <div className="p-5 lg:mx-10 bg-slate-500  my-5">
      <h1 className="text-center font-bold text-3xl text-white">Grow Your Writing and Reading Speed</h1>
      <p className="text-center my-2 text-sm text-slate-300">Enhance your writing and reading speed with our tailored techniques and strategies.</p>
      <div className="flex my-2 justify-center gap-5 mt-5 text-gray-100 text-3xl">
        <div>
          <p className="font-semibold">
            <CountUp end={getAllUsers?.length} duration={8} />k
          </p>
          <p className="font-semibold  text-zinc-300 text-lg">Total Clients</p>
        </div>
        |
        <div>
          <p className="font-semibold">
            <CountUp end={getAllArticle?.length} duration={8} />k
          </p>
          <p className="font-semibold  text-zinc-300 text-lg">Total Articles</p>
        </div>
        |
        <div>
          <p className="font-semibold">
            <CountUp end={getAllPost?.length} duration={8} />k
          </p>
          <p className="font-semibold  text-zinc-300 text-lg">Total Posts</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCount;