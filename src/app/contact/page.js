import { FaLocationArrow, FaPhoneSquareAlt, FaMailBulk } from "react-icons/fa";
import LocationMap from "./../../components/LocationMap";
import { Banner, Button, Label, TextInput } from "flowbite-react";
import { HiX } from "react-icons/hi";

const ContactPage = () => {
  return (
    <div className="">
      <div>
        <div className="bg-[#ebe3eb] w-full h-60 lg:h-[500px] ">
          {/* <svg
            className="pt-[160px] lg:pt-[219px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 326"
          >
            <path
              fill="#fff"
              fill-opacity="1"
              d="M0,288L40,261.3C80,235,160,181,240,133.3C320,85,400,43,480,53.3C560,64,640,128,720,154.7C800,181,880,171,960,144C1040,117,1120,75,1200,53.3C1280,32,1360,32,1400,32L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg> */}
          <svg className="pt-[160px] lg:pt-[219px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 326">
            <path
              fill="#fff"
              fill-opacity="1"
              d="M0,128L48,112C96,96,192,64,288,90.7C384,117,480,203,576,224C672,245,768,203,864,176C960,149,1056,139,1152,138.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <div className="absolute top-10 lg:top-40 text-center lg:px-44 ">
            <h1 className="text-2xl md:text-4xl font-semibold">Contact Us</h1>
            <p className="mt-3 text-xs md:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              iste nisi deserunt asperiores doloremque, sit porro commodi totam,
              doloribus similique error dolor reiciendis magnam officiis, nemo
              dolore sunt. Sunt, eum!
            </p>
          </div>
        </div>
      </div>

      <div className="grid pb-5 grid-cols-1 md:grid-cols-2 justify-center items-center mt-5 ">
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
                  placeholder="Write your message here..."
                ></textarea>
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
      <div className="  px-20 py-5   bg-[#fcf7e5]">
        <LocationMap />
      </div>
      <div className="h-36 mx-20 border-2 border-black mt-10 py-10 bg-[#d9d9d9] mb-5">
        <Banner>
          <div className="flex  overflow-hidden w-full items-center justify-center ">
            <div className="mx-auto flex w-full flex-shrink-0 items-center sm:w-auto">
              <form
                action="#"
                className="flex w-full flex-col gap-5 items-center md:flex-row md:gap-x-3"
              >
                <Label
                  htmlFor="email"
                  className="mb-2 mr-auto flex-shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400 md:m-0 md:mb-0"
                >
                  <h1 className="text-xl font-semibold text-black mb-2">
                    Sign up for our newsletter
                  </h1>
                  <h4>
                    Do you want to get notified when a new Article <br />
                    is added to Scriptly? Sign up for our newsletter
                  </h4>
                </Label>
                <TextInput
                  id="email"
                  placeholder="Enter your email"
                  required
                  type="email"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </Banner>
      </div>
    </div>
  );
};

export default ContactPage;
