"use client";
import React from "react";
import useAuth from "./../../../Hooks/useAuth";
import Image from 'next/image'
const PostUser = () => {
  const { user } = useAuth();

  return (
    <div className=" p-5 flex gap-5 items-center justify-evenly bg-[#D7D7D7] shadow-2xl rounded-2xl m-2">
      <div>
      <img
  
 
  className="w-36 h-36 shadow-xl border-white border-2"
  src={user?.photoURL}
  alt="Profile Image"
/>
      </div>
      <div >
        <h1 className="text-2xl font-bold">Name: {user?.displayName}</h1>
        <p className="my-2">Email: {user?.email}</p>
        <p className="text-gray-500">Type: Content Writer</p>
        
      </div>
    </div>
  );
};

export default PostUser;
