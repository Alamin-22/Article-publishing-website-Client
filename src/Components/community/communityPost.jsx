"use client";
import React, { useState } from "react";
import { RiImageAddFill } from "react-icons/ri";
import axiosInstance from "@/api";
import toast from "react-hot-toast";
import useAuth from './../../Hooks/useAuth';
import moment from 'moment';

const CommunityPost = () => {
  const { user } = useAuth();
  const [image, setImage] = useState(null);

  const apiEndPoint = "/v1/api/posts";
  
  const handleAddPost = async (e) => {
    e.preventDefault();
    const form = e.target;
    const post = form.post.value;
    const formattedDate = moment().format("hh:mm a YYYY-MM-DD");
    const userName = user.displayName;
    const userEmail = user.email;
    const userPhoto = user.photoURL;

    const postData = {
      content: post,
      datetime: formattedDate,
      userName,
      userEmail,
      userPhoto,
      image: image // Add image data to the postData object
    };

    try {
      const response = await axiosInstance.post(apiEndPoint, postData);
      console.log("Article added successfully:", response.data);
      toast.success("Successfully added!");
      form.reset();
      setImage(null); // Reset the image state after successful submission
    } catch (error) {
      toast.error("This didn't work.");
      console.error("Error adding article:", error);
    }
  };

  const handleImageChange = (e) => {
    // Retrieve the selected image file
    const file = e.target.files[0];
    setImage(file); // Update the image state with the selected file
  };

  return (
    <div className="bg-[#ededed] p-5 rounded-md">
      <div className="flex gap-5">
        <img
          className="w-10 h-10 rounded-full"
          src={user?.photoURL}
          alt="Image"
        />
        <h1 className="block mb-5 font-bold text-gray-900 dark:text-white">
          {user?.displayName}
        </h1>
      </div>
      <div>
        <form onSubmit={handleAddPost} className="mt-2">
          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="postId"
                name="post"
                rows="2"
                className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write a post..."
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <label
                htmlFor="image"
                className="inline-flex items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <RiImageAddFill className="w-4 h-4" />
                <span className="sr-only">Upload image</span>
              </label>
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-gray-900 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommunityPost;
