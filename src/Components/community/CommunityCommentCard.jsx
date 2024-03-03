"use client";
import React, { useState, useEffect } from "react";
import axiosInstance from "@/api";
import moment from "moment";
import useAuth from "./../../Hooks/useAuth";
import toast from "react-hot-toast";
import axios from 'axios';
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import GetAllCommunityComments from "@/lib/getCommunityComments";

const CommunityCommentCard = ({ post }) => {
  const { user } = useAuth();
  const [allCommunityData, setAllCommunityData] = useState([]);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState({});
  const apiEndPointComment = "/v1/api/CommunityComments";

  const [getCommunityComments, refetch] = GetAllCommunityComments()

  const formatDateTime = (dateTime) => {
    return moment(dateTime).format("hh:mm a DD-MM-YYYY");
  };

  const handleAddComment = async (e, postId) => {
    e.preventDefault();
    const form = e.target;
    const Comments = form.Comments.value;
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();
    const userName = user.displayName;
    const userEmail = user.email;
    const userPhoto = user?.photoURL;

    const postData = {
      postId,
      content: Comments,
      datetime: formattedDate,
      userName,
      userEmail,
      userPhoto,
    };

    try {
      const response = await axiosInstance.post(apiEndPointComment, postData);
      console.log("Comment added successfully:", response.data);
      toast.success("Successfully added!");
      form.reset();
      refetch()
    } catch (error) {
      toast.error("Failed to add comment.");
      console.error("Error adding comment:", error);
    }
  };



 
 
  const handleLike = async (postId) => {
    try {
      const response = await axiosInstance.post(`/v1/api/posts/${postId}/likes`, {
        userEmail: user?.email,
      });

      if (response.status === 200) {
        setLiked(!liked);
        if (!liked) {
          toast.success("Post liked!");
        } else {
          toast.success("Post unliked!");
        }
      }
    } catch (error) {
      console.error("Error liking post:", error);
      toast.error("Failed to like/unlike post.");
    }
  };

  
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: post.title,
          text: post.content,
          url: window.location.href
        });
      } else {
        throw new Error("Web Share API not supported");
      }
    } catch (error) {
      console.error("Error sharing:", error);

    }
  };

  return (
    <div>
      <div className="my-2">
        <hr />
        <div>
          <div className="flex justify-evenly py-1 bg-white mt-2 rounded-lg">
            <div className="hover:text-blue-700 flex justify-center items-center text-sm font-semibold cursor-pointer">
              
              <span className="mr-1">
                {post.likes ? post.likes : ""}
              </span>
              
              <button onClick={() => handleLike(post._id)}>
              {liked ? <IoIosHeart className="text-red-500 text-xl" /> : <IoIosHeartEmpty className="text-xl"/>}
              

              </button>
            </div>
            <div>
              <button
                className="hover:text-blue-700 text-sm font-semibold"
                onClick={() => setComment({ [post._id]: true })}
              >
                {
                  getCommunityComments.filter(
                    (comment) => comment.postId === post._id
                  ).length
                }{" "}
                Comment
              </button>
            </div>
            <div className="hover:text-blue-700 text-sm font-semibold cursor-pointer">
              <button
                className="hover:text-blue-700 text-sm font-semibold cursor-pointer"
                onClick={handleShare}
              >
                Share
              </button>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <form
        onSubmit={(e) => handleAddComment(e, post._id)}
        className={`${comment[post._id] ? "block" : "hidden"}`}
      >
        <label htmlFor="chat" className="sr-only">
          Your Comment
        </label>
        <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
          <textarea
            name="Comments"
            id="chat"
            rows="1"
            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."
          ></textarea>
          <button
            type="submit"
            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
          >
            <svg
              className="w-5 h-5 rotate-90 rtl:-rotate-90"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
            </svg>
            <span className="sr-only">Send Replay</span>
          </button>
        </div>
        <div>
          {getCommunityComments
            .filter((comment) => comment.postId === post._id)
            .map((communityComment) => (
              <div
                className="shadow-2xl mt-2 p-5  rounded-lg"
                key={communityComment._id}
              >
                <div className="flex gap-3">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={communityComment?.userPhoto}
                    alt="User image"
                  />
                  <div>
                    <h1 className="font-semibold text-sm text-gray-900 dark:text-white">
                      {communityComment?.userName}
                    </h1>
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      {formatDateTime(communityComment?.datetime)}
                    </p>
                  </div>
                </div>
                <div className="p-5 rounded-lg bg-white">
                  {communityComment?.content}
                </div>
              </div>
            ))}
        </div>
      </form>
    </div>
  );
};

export default CommunityCommentCard;
