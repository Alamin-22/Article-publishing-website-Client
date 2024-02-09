import AboutUsTitle from "@/Component/AboutUsTitle/AboutUsTitle";
import TeameMember from "@/Component/TeameMember/TeameMember";
import { FaUsers } from "react-icons/fa";
const AboutPage = () => {
  return (
    <div>
      <AboutUsTitle />

      <div className="mx-5 mt-20">
        <h1 className="text-center text-4xl font-medium my-10">
          Meet The Team
        </h1>
        <TeameMember />
      </div>

      <div className="bg-[#D9D9D9] h-96 my-24">
        <h1 className=" text-center pt-9 text-3xl font-medium">Countdown</h1>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-slate-200 w-56 h-52 mt-8 rounded-xl mx-5 shadow-xl">
            <figure className="flex justify-center items-center ">
              <img
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Factive-users-icon&psig=AOvVaw3yeGIPcP6LEZru-WiAYPuq&ust=1707542463726000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKjOrcLBnYQDFQAAAAAdAAAAABAJ"
              alt="Shoes"
              className="rounded-full"
            />
              <h1 className=" bg-slate-100 w-14 h-14 rounded-full"></h1>
            </figure>
            <h1 className="text-xl font-semibold text-center mt-3">1k+ </h1>
          </div>
          <div className="bg-slate-200 w-56 h-52 mt-8 rounded-xl mx-5 shadow-xl">
            <figure className="flex justify-center items-center mt-12 ">
              {/* <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-full"
            /> */}
              <h1 className=" bg-slate-100 w-14 h-14 rounded-full"></h1>
            </figure>
            <h1 className="text-xl font-semibold text-center mt-3">Hading</h1>
          </div>
          <div className="bg-slate-200 w-56 h-52 mt-8 rounded-xl mx-5 shadow-xl">
            <figure className="flex justify-center items-center mt-12 ">
              {/* <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-full"
            /> */}
              <h1 className=" bg-slate-100 w-14 h-14 rounded-full"></h1>
            </figure>
            <h1 className="text-xl font-semibold text-center mt-3">Hading</h1>
          </div>
          <div className="bg-slate-200 w-56 h-52 mt-8 rounded-xl mx-5 shadow-xl">
            <figure className="flex justify-center items-center ">
              <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-full"
            />
            
              <h1 className=" bg-slate-100 w-14 h-14 rounded-full"></h1>
            </figure>
            <h1 className="text-xl font-semibold text-center mt-3">Hading</h1>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-medium text-center mt-6">
          Top Autors
        </h1>
        <div className="mt-11 mx-5 grid grid-cols-3 gap-5">
          <div className="h-96 rounded-lg w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                className="rounded-t-lg"
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className=" mt-10 px-4">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          <div className="h-96 rounded-lg w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                className="rounded-t-lg"
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className=" mt-10 px-4">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          <div className="h-96 rounded-lg w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                className="rounded-t-lg"
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className=" mt-10 px-4">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="my-12">
        <div className="border border-black mx-32 h-44 flex gap-5 items-center px-12">
          <div className="flex-1">
            <h1 className="text-2xl font-medium">Newsletter</h1>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia
            </p>
          </div>
          <div className="flex-1 ">
            <input
              className="bg-slate-200 mr-5 border rounded-sm border-black"
              type="text"
              name=""
              id=""
            />
            <button className="bg-slate-200 px-6 ">Button</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutPage;
