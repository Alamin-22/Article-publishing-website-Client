import React from "react";

const TopContributors = () => {
  return (
    <div className="w-full p-2 bg-[#ededed] border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
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
      <div className="flow-root ">
        <ul
          role="list"
          className="divide-y divide-gray-6 00 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center ">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Sims
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  info@scriptly.com
                </p>
              </div>
              <div className="inline-flex place-items-end text-base font-semibold text-blue-600 ">
                Follow
              </div>
            </div>
          </li>
          {/* Other list items go here */}
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  John
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                info@scriptly.com
                </p>
              </div>
              <div className="inline-flex place-items-end text-base font-semibold text-blue-600 ">
                Follow
              </div>
            </div>
          </li>
          {/* Other list items go here */}
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Alias
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                info@scriptly.com
                </p>
              </div>
              <div className="inline-flex place-items-end text-base font-semibold text-blue-600 ">
                Follow
              </div>
            </div>
          </li>
          {/* Other list items go here */}
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Neil Sims
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                info@scriptly.com
                </p>
              </div>
              <div className="inline-flex place-items-end text-base font-semibold text-blue-600 ">
                Follow
              </div>
            </div>
          </li>
          {/* Other list items go here */}
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Joe Sims
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                info@scriptly.com
                </p>
              </div>
              <div className="inline-flex place-items-end text-base font-semibold text-blue-600 ">
                Follow
              </div>
            </div>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default TopContributors;
