"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import bannerImg from "../../../../public/bg-writing.jpg";
// import CountUp from "react-countup";
import CountUp from 'react-countup';
import BreadCrumb from "@/Components/MyProfileComponents/BreadCrumb";
import ProfileTabs from "@/Components/MyProfileComponents/ProfileTabs";
import axiosInstance from "@/api";
import useAuth from "@/Hooks/useAuth";
import { FaRegEdit } from "react-icons/fa";

const MyProfile = () => {

  const [userInfo, setUserInfo] = useState();
  const { user } = useAuth();

  useEffect(() => {
    axiosInstance.get("/v1/api/all-users")
      .then(res => {
        setUserInfo(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  const ProfileInfo = userInfo && userInfo.find(u => u.email === user?.email);


  // console.log("user infor", ProfileInfo);



  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-gray-800">
        Profile Information
      </h2>
      <div className="py-3">
        <BreadCrumb user={user} ></BreadCrumb>
      </div>
      {/* user profile with banner and title */}
      <figure className="relative">
        <FaRegEdit className='absolute right-5 top-5 z-50 text-blue-500 text-xl hover:cursor-pointer hover:text-blue-700' />
        <div className="w-full h-[350px] bg-black relative rounded-xl">
          <div className="absolute z-40 h-full w-full flex items-center justify-center text-center flex-col ">
            <img
              src={ProfileInfo?.UserPhoto}
              className="w-36 h-36 mt-5 rounded-full"
              alt="user Image"
            />
            <div className="my-2">
              <div>
                <h2 className="text-gray-100 font-black text-3xl lg:text-3xl max-w-80 lg:max-w-[640px]">
                  {ProfileInfo?.displayName}
                </h2>
                <p className="text-zinc-200 font-semibold text-xl max-w-[640px] ">
                  Full Stack Developer
                </p>
              </div>
              <div className="flex justify-evenly mt-5 text-gray-100 text-3xl gap-5">
                <div>
                  <p className="font-semibold ">
                    {" "}
                    <CountUp end={25620} duration={8} />{" "}
                  </p>
                  <p className="text-zinc-300 text-lg">Followers </p>
                </div>
                <div>
                  <p className="font-semibold ">
                    <CountUp end={61526} duration={8} />
                  </p>
                  <p className="text-zinc-300 text-lg">Following </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 ">
            <Image
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              src={bannerImg}
              alt="Banner Image"
            />
          </div>
        </div>
      </figure>
      <div className="my-2">
        <ProfileTabs></ProfileTabs>
      </div>
    </div>
  );
};

export default MyProfile;
