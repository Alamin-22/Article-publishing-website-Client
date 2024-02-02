import { FaLocationArrow, FaPhoneSquareAlt, FaMailBulk } from "react-icons/fa";
// import LocationMap from "./../../components/LocationMap";
import { Banner, Button, Label, TextInput } from "flowbite-react";
import { HiX } from "react-icons/hi";



const ContactPage = () => {
  return (
    <div className="shadow-2xl">
      
      <div className="flex justify-center items-center h-28">
        <h2 className="text-3xl font-bold ">Contact Us</h2>
      </div>

      <div className=" grid pb-5 grid-cols-1 md:grid-cols-2 justify-center items-center mt-5 ">
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
          <form class="shadow-2xl p-5 max-w-sm mx-auto">
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
                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-gray-900 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-gray-700 "
              />
            </div>
          </form>
        </div>
      </div>
      <div className="  px-20 py-5   bg-[#fcf7e5]">{/* <LocationMap /> */}</div>
    </div>
  );
};

export default ContactPage;
