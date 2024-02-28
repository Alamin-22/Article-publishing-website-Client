import Banner from "@/components/Home/Banner";
import Featured from "@/components/Home/Featured";
import LastestArticles from "@/components/Home/LastestArticles";
import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <Banner />
      <Featured />
      <LastestArticles />
      <div className="flex items-center justify-center pb-5">
        <Link href={"/allarticles"}>
          <Button color="dark" pill>
            Show All Articles
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Home;
