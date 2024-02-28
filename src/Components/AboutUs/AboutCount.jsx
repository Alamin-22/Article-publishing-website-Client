"use client"
import CountUp from "react-countup";

const AboutCount = () => {
    return (
        <div className="p-5 lg:mx-10 bg-slate-500  my-5">
          <h1 className="text-center font-bold text-3xl text-white">Grow up Your writing and Reading Speed</h1>
          <p className="text-center my-2 text-sm text-slate-300">Enhance your writing and reading speed  with our <br/>tailored techniques and strategies. </p>
            <div className="flex my-2  justify-center gap-5 mt-5 text-gray-100 text-3xl">

                <div>
                  <p className="font-semibold ">
                    {" "}
                    <CountUp end={256} duration={8} />k
                  </p>
                  <p className="font-semibold  text-zinc-300 text-lg">Total Client</p>
                </div>
                |
                <div>
                  <p className="font-semibold ">
                    <CountUp end={615} duration={8} />k
                  </p>
                  <p className="font-semibold  text-zinc-300 text-lg">Total Article</p>
                </div>
                |
                <div>
                  <p className="font-semibold ">
                    <CountUp end={351} duration={8} />k
                  </p>
                  <p className="font-semibold  text-zinc-300 text-lg">Total Post</p>
                </div>
              </div>
        </div>
    );
};

export default AboutCount;