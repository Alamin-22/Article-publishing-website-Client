"use client";
import { useState } from "react";

const CommunityViewPost = () => {
  const [comment, setComment] = useState(false);
  return (
    <div className="">
      <div className="mt-5 bg-[#ededed] p-5 rounded-lg">
        <div className="flex gap-3 ">
          <img
            className="w-8 h-8 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="Jese image"
          />
          <div className="">
            <h1 className="font-semibold text-gray-900 dark:text-white">
              Name
            </h1>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Today, 09:00 PM
            </p>
          </div>
        </div>
        <div className="my-2">
          <div className="pb-3 bg-white p-2 rounded-lg">
            <p>
            Noteworthy technology acquisitions 2021
Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </div>
          <hr />
          <div className="flex justify-evenly py-1 bg-white mt-2 rounded-lg">
            <p className="hover:text-blue-700 text-sm font-semibold">Like</p>
            <div>
              <button
                className="hover:text-blue-700 text-sm font-semibold"
                onClick={() => setComment(!comment)}>
                Comment
              </button>
            </div>
            <p className="hover:text-blue-700 text-sm font-semibold">Share</p>
          </div>
          <hr />
          {/* comment form  */}
          <form className={`${comment ? "block" : "hidden"}`}>
            <label for="chat" className="sr-only">
              Your Comment
            </label>
            <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
              <textarea
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
          </form>
        </div>
      </div>
      <div className="mt-5 bg-[#ededed] p-5 rounded-lg">
        <div className="flex gap-3 ">
          <img
            className="w-8 h-8 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="Jese image"
          />
          <div className="">
            <h1 className="font-semibold text-gray-900 dark:text-white">
              Name
            </h1>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
             
             31 Dec, 2024 11:46 PM
            </p>
          </div>
        </div>
        <div className="my-2">
          <div className="pb-3 bg-white p-2 rounded-lg">
            <p>
              "Welcome to our article writing platform!", "Explore the world of
              professional article writing with us!", "Unlock your potential as
              a writer on our platform!", "Join our community of passionate
              writers!", "Ready to showcase your writing skills? Let's get
              started!", "Discover a new avenue for expressing your ideas
              through writing!", "Empowering writers to create compelling
              content!", "Transform your thoughts into captivating articles with
              us!"
            </p>
          </div>
          <hr />
          <div className="flex justify-evenly py-1 bg-white mt-2 rounded-lg">
            <p className="hover:text-blue-700 text-sm font-semibold">Like</p>
            <div>
              <button
                className="hover:text-blue-700 text-sm font-semibold"
                onClick={() => setComment(!comment)}>
                Comment
              </button>
            </div>
            <p className="hover:text-blue-700 text-sm font-semibold">Share</p>
          </div>
          <hr />
          {/* comment form  */}
          <form className={`${comment ? "block" : "hidden"}`}>
            <label for="chat" className="sr-only">
              Your Comment
            </label>
            <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
              <textarea
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommunityViewPost;
