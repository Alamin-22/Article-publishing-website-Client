"use client";


import SocialLogin from "@/Components/SocialLogin/SocialLogin";
import useAuth from "@/Hooks/useAuth";
import { Button } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { Login } = useAuth();
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // login
    Login(email, password)
      .then((res) => {
        const user = res.user;
        // console.log(user);
        toast.success(`User Successfully Logged in`);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
        const message = error.message;
        toast.error(`Error!, ${message.slice(10, 50)}`);
      });
  };

  return (
    <div>
      <div className="relative ">
        <div className="">
          <img
            src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            className="absolute inset-0  object-cover w-full h-full"
            alt=""
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
          <svg
            className="absolute inset-x-0 bottom-0 text-white"
            viewBox="0 0 1160 163"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none ">
                  Log In and Explore Your
                  <br className="hidden md:block" />
                  Creative Horizon!
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                  Unlock a world of knowledge and creativity! 🚀 Welcome to our
                  Article Posting platform, where your ideas come to life. Dive
                  into a seamless login experience and join a community
                  passionate about sharing insights, stories, and expertise.
                  Your journey into a realm of endless possibilities begins
                  here. Let the words flow, and let the connections grow. Login
                  now and be part of the story! 🌐✨ #EmpowerIdeas
                  #ConnectCreateInspire.
                </p>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded-xl shadow-2xl p-7 sm:p-10">
                  <div>
                    <SocialLogin></SocialLogin>
                   
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-center sm:mb-6 sm:text-2xl">
                    Welcome Back!
                  </h3>
                  <form onSubmit={handleLogin}>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                      >
                        Email Address
                      </label>
                      <input
                        placeholder="xyz@gmail.com"
                        required
                        type="email"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2 relative">
                      <label
                        htmlFor="password"
                        className="inline-block mb-1 font-medium"
                      >
                        Password
                      </label>
                      <input
                        placeholder="*******"
                        required
                        type={showPassword ? "text" : "password"}
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="password"
                        name="password"
                      />
                      <span
                        className="absolute right-5 top-10  cursor-pointer"
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                      >
                        {showPassword ? <p>Show</p> : <p> Hide</p>}
                      </span>
                      <label className="label flex justify-end">
                        <a
                          href="#"
                          className="text-sm hover:text-blue-600 transition duration-300 delay-100 cursor-pointer"
                        >
                          Forgot password?
                        </a>
                      </label>
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <Button
                        type="submit"
                        gradientDuoTone="purpleToBlue"
                        className="w-full"
                      >
                        Login
                      </Button>
                    </div>
                    <div>
                      <p className="text-sm">
                        {" "}
                        Don't have an account?{" "}
                        <span className="text-blue-500 font-semibold text-lg">
                          <Link href={"/singup"}>SingUp</Link>
                        </span>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
