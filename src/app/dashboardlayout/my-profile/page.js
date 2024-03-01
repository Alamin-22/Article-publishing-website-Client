"use client";
import React from "react";
import Image from "next/image";
import bannerImg from "../../../../public/bg-writing.jpg";
import CountUp from 'react-countup';
import BreadCrumb from "@/components/MyProfileComponents/BreadCrumb";
import ProfileTabs from "@/components/MyProfileComponents/ProfileTabs";
import useAuth from "@/Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/api";
import { Spinner } from 'flowbite-react';


const MyProfile = () => {

  const { user } = useAuth();




  const { data: users = [], isPending } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/v1/api/all-users`);
      return res.data;
    },
  });
  const UserInfo = users.find(item => item?.email === user?.email);
  // console.log(UserInfo);




  return (
    <>
      {
        isPending ?
          <>
            <div className="text-center">
              <Spinner aria-label="Extra large spinner example" size="xl" />
            </div>
          </>
          :
          <>

            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                Profile Information
              </h2>
              <div className="py-3">
                <BreadCrumb user={user}></BreadCrumb>
              </div>
              {/* user profile with banner and title */}
              <figure>
                <div className="w-full h-[350px] bg-black relative rounded-xl">
                  <div className="absolute z-40 h-full w-full flex items-center justify-center text-center flex-col ">

                    <Image
                      src={user?.photoURL || "https://i.ibb.co/bFq9X83/user.png" }
                      width={144}
                      height={144}
                      alt="Picture of the author"
                      className="rounded-full"
                    />

                    <div className="my-2">
                      <div>
                        <h2 className="text-gray-100 font-black text-3xl lg:text-3xl max-w-80 lg:max-w-[640px]">
                          {user?.displayName}
                        </h2>
                        <p className="text-zinc-200 font-semibold text-xl max-w-[640px] ">
                          Full Stack Developer
                        </p>
                      </div>
                      <div className="flex gap-4 justify-evenly mt-5 text-gray-100 text-3xl">
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
                <ProfileTabs UserInfo={UserInfo}></ProfileTabs>
              </div>
            </div>


          </>
      }

    </>
  );
};

export default MyProfile;
