"use client"

import getTopContributors from "@/lib/getTopContributors";
const TopContributors = async () => {
const topContributor = await getTopContributors()

  return (
    <div className="w-full  bg-[#ededed] rounded-lg shadow-md sm:p-8 dark:bg-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Top Contributors
        </h5>
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          {/* View all */}
        </a>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-white dark:divide-gray-700">
          {topContributor.map((contributor, index) => (
            <li key={contributor?._id} className="shadow-xl bg-white p-2 my-1 rounded-xl sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={contributor?.UserPhoto}
                    alt="User image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
                    {contributor?.displayName}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {contributor?.email}
                  </p>
                </div>
                {/* <div className="inline-flex place-items-end text-base font-semibold text-blue-600">
                  Follow
                </div> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopContributors;