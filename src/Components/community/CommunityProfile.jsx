"use client"
import React from "react";
import useAuth from './../../Hooks/useAuth';

const CommunityProfile = () => {
  const {user} =useAuth()
  return (
    <div>
      <div className="w-full lg:max-w-sm bg-[#ededed] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-end px-4 pt-4">
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
            type="button">
            <span className="sr-only">Open dropdown</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3">
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
          </button>
          {/* Dropdown menu */}
          <div
            id="dropdown"
            className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2" aria-labelledby="dropdownButton">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Edit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Export Data
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={user?.photoURL}
            alt="Profile Image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {user?.displayName}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
          {user?.email}
          </span>
          <div className="flex mt-4 gap-3 justify-center items-center md:mt-6">
            <div  className="flex flex-col justify-center items-center">
              <p className="text-sm font-semibold">450</p>
              <p className="text-gray-600">Posts</p>
            </div>
              <hr className="w-[1px] h-8 bg-gray-600 transform rotate-180 mx-auto" />
            <div  className="flex flex-col justify-center items-center">
              <p className="text-sm font-semibold">2k</p>
              <p className="text-gray-600">Follower</p>
            </div>
            <hr className="w-[1px] h-8 bg-gray-600 transform rotate-180 mx-auto" />
            <div className="flex flex-col justify-center items-center">
            <p className="text-sm font-semibold">25</p>
              <p className="text-gray-600">Following</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default CommunityProfile;
