"use client"
import useAuth from "@/Hooks/useAuth";
import axiosInstance from "@/api";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const TopContributors = () => {
  const { user } = useAuth();
  const [topContributors, setTopContributors] = useState([]);

  useEffect(() => {
    const fetchTopContributors = async () => {
      try {
        const response = await axiosInstance.get("/v1/api/all-users");
        const users = response.data;
        users.sort((a, b) => b.posts - a.posts);

        // Get top 5 contributors
        const top5Contributors = users.slice(0, 5);
        setTopContributors(top5Contributors);
      } catch (error) {
        console.error("Error fetching top contributors:", error);
        toast.error("Failed to fetch top contributors.");
      }
    };

    fetchTopContributors();
  }, []);

  return (
    <div className="w-full p-2 bg-[#ededed] rounded-lg shadow-md sm:p-8 dark:bg-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Top Contributors
        </h5>
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          View all
        </a>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-white dark:divide-gray-700">
          {topContributors.map((contributor, index) => (
            <li key={contributor._id} className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={contributor?.UserPhoto}
                    alt="User image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {contributor?.displayName}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {contributor?.email}
                  </p>
                </div>
                <div className="inline-flex place-items-end text-base font-semibold text-blue-600">
                  Follow
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopContributors;