"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import bannerImg from "../../../../public/bg-writing.jpg";
import CountUp from 'react-countup';
import BreadCrumb from "@/components/MyProfileComponents/BreadCrumb";
import ProfileTabs from "@/components/MyProfileComponents/ProfileTabs";
import axiosInstance from "@/api";
import useAuth from "@/Hooks/useAuth";
import { FileInput, Label } from 'flowbite-react';
import { FaRegEdit } from "react-icons/fa";
import { Button } from 'flowbite-react';
import { imageUpload } from "@/api/utils";

const MyProfile = () => {
  const [editCoverPic, setEditCoverPic] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const { user } = useAuth();
  const [image, setImage] = useState(null);

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
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleEditCover = () => {
    
    setEditCoverPic(!editCoverPic);
  };

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
        <FaRegEdit onClick={handleEditCover} className='absolute right-5 top-5 z-50 text-blue-500 text-xl hover:cursor-pointer hover:text-blue-700' />
        {
          editCoverPic &&
          <div className="flex flex-wrap gap-2 absolute left-5 top-5 z-40">
            <Button  onClick={handleEditCover}>
              X
            </Button>
            <Button>
              Save Changes
            </Button>
          </div>
        }
        <div className="w-full h-[350px] bg-black relative rounded-xl">

          {
            editCoverPic ?
              <>
                <div className="flex w-full items-center justify-center z-50">
                  <Label
                    htmlFor="dropzone-file"
                    className="dark:hover:bg-bray-800 flex h-[350px] w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pb-6 pt-5">
                      <svg
                        className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLineJoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <FileInput id="dropzone-file" className="hidden" />
                  </Label>
                </div>
              </>
              :
              <>
                <div className="absolute z-10 h-full w-full flex items-center justify-center text-center flex-col ">
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
              </>
          }

        </div>
      </figure>
      <div className="my-2">
        <ProfileTabs ProfileInfo={ProfileInfo}></ProfileTabs>
      </div>
    </div>
  );
};

export default MyProfile;
