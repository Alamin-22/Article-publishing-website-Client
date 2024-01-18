import { FaLocationArrow, FaPhoneSquareAlt, FaMailBulk } from "react-icons/fa";

import LocationMap from "./../../components/LocationMap";
const ContactPage = () => {
  return (
    <div className="">
      <div className="flex bg-[#d9d9d9]   justify-center items-center h-28">
        <h2 className="text-3xl font-bold ">Contact Us</h2>
      </div>

      <div className="grid  pb-5 grid-cols-1 md:grid-cols-2 justify-center items-center mt-5 ">
        <div className="max-w-sm mx-auto">
          <h1 className="text-xl font-semibold">Contact with Us</h1>
          <ul class="space-y-4 mt-3 text-left text-gray-500 dark:text-gray-400">
            <li class="flex items-center space-x-3 rtl:space-x-reverse">
              <FaLocationArrow />
              <span>Address: </span>
              <span className="font-medium">Dhaka, Bangladesh</span>
            </li>
          </ul>
          <ul class="space-y-4 my-3 text-left text-gray-500 dark:text-gray-400">
            <li class="flex items-center space-x-3 rtl:space-x-reverse">
              <FaPhoneSquareAlt />
              <span>Phone: </span>
              <span className="font-medium">+2 222 222-2222</span>
            </li>
          </ul>
          <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
            <li class="flex items-center space-x-3 rtl:space-x-reverse">
              <FaMailBulk />
              <span>Email: </span>
              <span className="font-medium">info@scriptly.com</span>
            </li>
          </ul>
        </div>
        <div>
          <form class="max-w-sm mx-auto">
            <h1 className="text-xl font-semibold ">Say Hello</h1>
            <div class="mb-5 mt-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="firstName"
                  placeholder="First Name"
                  id="firstName"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <input
                  type="lastName"
                  placeholder="Last Name"
                  id="lastName"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="grid grid-cols-1 mt-2 md:grid-cols-2 gap-3">
                <input
                  type="email"
                  placeholder="Email Address"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <input
                  type="subject"
                  placeholder="Subject"
                  id="subject"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  rows="2"
                  class="block p-2.5 w-full my-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your message here..."></textarea>
              </div>
              <input
                type="submit"
                id="base-input"
                class="border border-gray-300 p-2 text-white font-semibold bg-[#525252] rounded-lg hover:ring-blue-500 "
              />
            </div>
          </form>
        </div>
      </div>

      <div className="h-80 overflow-hidden bg-[#d9d9d9] px-20 border-2">
        <LocationMap />
      </div>

      <div className="mx-20 mt-20 mb-5 border-2 py-5 border-gray-800 p-2">
        <div
          id="newsletter-banner"
          class="  flex justify-between mx-20 p-4 border-b border-gray-  lg:h-28">
          <div class="flex items-center  w-full mx-auto sm:w-auto">
            <form class="flex flex-col gap-5 items-center w-full md:flex-row">
              <div>
                <h1 className="text-xl font-bold">
                  Sign up for our newsletter
                </h1>{" "}
                <br />
                <h4 className="text-sm text-gray-500">
                  Do you want to get notified when a new Article is <br />
                  added to scriptly? Sign up for our newsletter
                </h4>
              </div>
              <input
                type="email"
                id="newsLetterEmail"
                placeholder="Enter your email"
                class="bg-white border border-gray-300 text-gray-900 md:w-64 mb-2 md:mb-0 md:me-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Subscribe
              </button>
            </form>
          </div>
          <div class="flex items-center absolute top-2.5 end-2.5 md:relative md:top-auto md:end-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
