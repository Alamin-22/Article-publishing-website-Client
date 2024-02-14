"use client";
import { useState, useEffect } from "react";
import axiosInstance from "@/api";
import useAuth from "./../../Hooks/useAuth";
import toast from "react-hot-toast";

const CommunityViewPost = () => {
  const { user } = useAuth();
  const [comment, setComment] = useState({});
  const [allPostData, setAllPostData] = useState([]);
  const [allCommunityData, setAllCommunityData] = useState([]);
  const apiEndPointComment = "/v1/api/CommunityComments";
  const apiEndPoint = "/v1/api/posts";
  const [postLikes, setPostLikes] = useState({});
  const handleAddComment = async (e, postId) => {
    e.preventDefault();
    const form = e.target;
    const Comments = form.Comments.value;
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();
    const userName = user.displayName;
    const userEmail = user.email;
    const userPhoto = user.photoURL;

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
      setAllCommunityData((prevData) => [...prevData, response.data]);
    } catch (error) {
      toast.error("Failed to add comment.");
      console.error("Error adding comment:", error);
    }
  };
  const handleLike = async (postId) => {
    try {
      
      await axiosInstance?.post(`/v1/api/posts/${postId}`);
      
      setPostLikes((prevLikes) => ({
        ...prevLikes,
        [postId]: (prevLikes[postId] || 0) + 1,
      }));
      toast.success("Post liked successfully!");
    } catch (error) {
      toast.error("Failed to like post.");
      console.error("Error liking post:", error);
    }
  };

  useEffect(() => {
    const getAllPostData = async () => {
      try {
        const { data: res } = await axiosInstance.get(apiEndPoint);
        setAllPostData(res);
      } catch (error) {
        console.error("Error fetching all post data:", error);
        toast.error("Failed to fetch post data.");
      }
    };
    getAllPostData();
  }, []);

  useEffect(() => {
    // Fetch comments only when comment state changes
    const getAllCommunityCommentsData = async () => {
      try {
        const { data: res } = await axiosInstance.get(apiEndPointComment);
        setAllCommunityData(res);
      } catch (error) {
        console.error("Error fetching all community comments data:", error);
        toast.error("Failed to fetch community comments data.");
      }
    };
    getAllCommunityCommentsData();
  }, [comment]);

  return (
    <div className="">
      <div>
        {allPostData.map((post, index) => (
          <div className="mt-5 bg-[#ededed] p-5 rounded-lg" key={index}>
            <div className="flex gap-3">
              <img
                className="w-8 h-8 rounded-full"
                src={post?.userPhoto}
                alt="User image"
              />
              <div>
                <h1 className="font-semibold text-gray-900 dark:text-white">
                  {post?.userName}
                </h1>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  {post?.datetime}
                </p>
              </div>
            </div>
            <div className="pb-3 mt-3 bg-white p-2 rounded-lg">
              <p>{post?.content}</p>
            </div>
            <div className="my-2">
              <hr />
              {/* like comments and share section  */}
              <div>
                <div className="flex justify-evenly py-1 bg-white mt-2 rounded-lg">
                  <div className="hover:text-blue-700 text-sm font-semibold cursor-pointer">
                    <span className="mr-1">{postLikes[post._id] || ""}</span> 
                    <button
                      className="hover:text-blue-700 text-sm font-semibold cursor-pointer"
                      onClick={() => handleLike(post._id)}>
                       Like
                    </button>
                  </div>
                  <div>
                    <button
                      className="hover:text-blue-700 text-sm font-semibold"
                      onClick={() => setComment({ [post._id]: true })}>
                      {
                        allCommunityData.filter(
                          (comment) => comment.postId === post._id
                        ).length
                      }{" "}
                      Comment
                    </button>
                  </div>
                  <p className="hover:text-blue-700 text-sm font-semibold cursor-pointer">
                    Share
                  </p>
                </div>
              </div>
              <hr />
            </div>
            <form
              onSubmit={(e) => handleAddComment(e, post._id)}
              className={`${comment[post._id] ? "block" : "hidden"}`}>
              <label htmlFor="chat" className="sr-only">
                Your Comment
              </label>
              <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                <textarea
                  name="Comments"
                  id="chat"
                  rows="1"
                  className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your message..."></textarea>
                <button
                  type="submit"
                  className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                  <svg
                    className="w-5 h-5 rotate-90 rtl:-rotate-90"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20">
                    <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                  </svg>
                  <span className="sr-only">Send Replay</span>
                </button>
              </div>
              <div>
                {/* views Comments  */}
                {allCommunityData
                  .filter((comment) => comment.postId === post._id)
                  .map((communityComment) => (
                    <div
                      className="shadow-2xl mt-2 p-5  rounded-lg"
                      key={communityComment._id}>
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
                            {communityComment?.datetime}
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
        ))}
      </div>
    </div>
  );
};

export default CommunityViewPost;
