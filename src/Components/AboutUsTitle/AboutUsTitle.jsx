import React from "react";

const AboutUsTitle = () => {
  return (
    <div>
      <div className="bg-[#D9D9D9] w-full h-60 lg:h-[500px] ">
        <svg
          className="pt-[160px] lg:pt-[219px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 326"
        >
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,288L40,261.3C80,235,160,181,240,133.3C320,85,400,43,480,53.3C560,64,640,128,720,154.7C800,181,880,171,960,144C1040,117,1120,75,1200,53.3C1280,32,1360,32,1400,32L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
        <div className="absolute top-10 lg:top-40 text-center lg:px-44 ">
          <h1 className="text-2xl md:text-4xl font-semibold">About Us</h1>
          <p className="mt-3 text-xs md:text-base">
          Welcome to Scriptly – where words shape worlds! Dive into a community dedicated to the art of article writing. Explore diverse topics, share your insights, and join a creative space that celebrates the beauty of language. Unleash your storytelling prowess at Scriptly – where every word counts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsTitle;