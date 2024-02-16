import React from 'react';
import { FaLocationArrow, FaPhoneSquareAlt, FaMailBulk, FaLinkedinIn } from "react-icons/fa";
import { FaRegHandPointDown } from "react-icons/fa";
import { FaXTwitter, FaSquareFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";

const support = () => {
    return (
        <div>
            <div className="shadow-2xl ">

                <div className="text-center  py-10 ">
                    <h2 className="text-3xl font-bold ">Support Hub!</h2>
                    <p className='text-lg font-semibold mt-4 text-gray-600'>Share your any issue or Quires Our Expertise Team will solve it.</p>
                </div>

                <div className=" grid pb-5 grid-cols-1 lg:grid-cols-2 justify-center items-center  ">
                    <div className="max-w-sm mx-auto px-2">
                        <p className='font-medium text-justify font-serif'>
                            Welcome to Scriptly Support Hub! Our team is here to assist you with any questions or issues. Whether it's navigating the site or optimizing your writing process, we've got you covered. Explore our knowledge base or reach out to our experts for prompt solutions. Your success is our priority at Scriptly!
                        </p>
                        <div className='hidden lg:block'>
                            <h1 className="text-xl font-semibold text-center my-3">Contact with Us</h1>
                            <div className='flex flex-col md:flex-row  px-4 gap-4 mx-auto justify-between'>
                                <ul class="space-y-4 my-3 text-left text-gray-500 dark:text-gray-400">
                                    <li >
                                        <div className='flex gap-2 items-center'>
                                            <FaPhoneSquareAlt />
                                            <span>Phone </span>
                                            <FaRegHandPointDown />
                                        </div>
                                        <span className="font-medium">+880 1234567895</span>
                                    </li>
                                    <li >
                                        <div className='flex gap-2 items-center'>
                                            <FaLinkedinIn />
                                            <span>LinkedIn </span>
                                            <FaRegHandPointDown />
                                        </div>
                                        <a href="" className=' underline hover:text-blue-700 text-blue-500'>
                                            <span className="font-medium"> linkedin.com/scriptly </span>
                                        </a>
                                    </li>
                                    <li >
                                        <div className='flex gap-2 items-center'>
                                            <FaMailBulk />
                                            <span>Email: </span>
                                            <FaRegHandPointDown />
                                        </div>
                                        <span className="font-medium">info@scriptly.com</span>
                                    </li>
                                </ul>
                                <ul class="space-y-4 my-3 text-left text-gray-500 dark:text-gray-400">
                                    <li >
                                        <div className='flex gap-2 items-center'>
                                            <FaSquareFacebook />
                                            <span>FaceBook </span>
                                            <FaRegHandPointDown />
                                        </div>
                                        <a href="" className=' underline hover:text-blue-700 text-blue-500'>
                                            <span className="font-medium"> facebook.com/scriptly </span>
                                        </a>
                                    </li>
                                    <li >
                                        <div className='flex gap-2 items-center'>
                                            <FaXTwitter />
                                            <span>Twitter </span>
                                            <FaRegHandPointDown />
                                        </div>
                                        <a href="" className=' underline hover:text-blue-700 text-blue-500'>
                                            <span className="font-medium"> www.twitter.com/scriptly22 </span>
                                        </a>
                                    </li>
                                    <li >
                                        <div className='flex gap-2 items-center'>
                                            <GrInstagram />
                                            <span>Instagram </span>
                                            <FaRegHandPointDown />
                                        </div>
                                        <a href="" className=' underline hover:text-blue-700 text-blue-500'>
                                            <span className="font-medium">insta.com/scriptly22</span>
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>


                    </div>
                    <div>
                        <form className="mt-6 p-6 bg-gray-200 mx-2 rounded-lg">
                            <div className="flex-1">
                                <label className="block mb-2 font-semibold text-sm text-gray-600 ">Full Name</label>
                                <input type="text" name="Name" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-rose-200 focus:ring-rose-200 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div className="flex-1 mt-6">
                                <label className="block mb-2 font-semibold text-sm text-gray-600 ">Email address</label>
                                <input name="email" type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-rose-200 focus:ring-rose-200  focus:ring-opacity-40  focus:outline-none focus:ring" />
                            </div>
                            <div className="flex-1 mt-6">
                                <label className="block font-semibold mb-2 text-sm text-gray-600 ">Subject</label>
                                <input name="email" type="email" placeholder="Write your Topic" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-rose-200 focus:ring-rose-200  focus:ring-opacity-40  focus:outline-none focus:ring" />
                            </div>

                            <div className="w-full mt-6">
                                <label className="block font-semibold mb-2 text-sm text-gray-600 ">Message</label>
                                <textarea name="message" className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:border-rose-200 focus:ring-rose-200  focus:ring-opacity-40  focus:outline-none focus:ring" placeholder="Message"></textarea>
                            </div>

                            <button type="submit" className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50">
                                Send Text
                            </button>
                        </form>
                    </div>
                    <div className=' block lg:hidden'>
                        <h1 className="text-xl font-semibold text-center my-3">Contact with Us</h1>
                        <div className='flex flex-col md:flex-row  px-4 gap-4 mx-auto justify-between'>
                            <ul class="space-y-4 my-3 text-left text-gray-500 dark:text-gray-400">
                                <li >
                                    <div className='flex gap-2 items-center'>
                                        <FaPhoneSquareAlt />
                                        <span>Phone </span>
                                        <FaRegHandPointDown />
                                    </div>
                                    <span className="font-medium">+880 1234567895</span>
                                </li>
                                <li >
                                    <div className='flex gap-2 items-center'>
                                        <FaLinkedinIn />
                                        <span>LinkedIn </span>
                                        <FaRegHandPointDown />
                                    </div>
                                    <a href="" className=' underline hover:text-blue-700 text-blue-500'>
                                        <span className="font-medium"> linkedin.com/scriptly </span>
                                    </a>
                                </li>
                                <li >
                                    <div className='flex gap-2 items-center'>
                                        <FaMailBulk />
                                        <span>Email: </span>
                                        <FaRegHandPointDown />
                                    </div>
                                    <span className="font-medium">info@scriptly.com</span>
                                </li>
                            </ul>
                            <ul class="space-y-4 my-3 text-left text-gray-500 dark:text-gray-400">
                                <li >
                                    <div className='flex gap-2 items-center'>
                                        <FaSquareFacebook />
                                        <span>FaceBook </span>
                                        <FaRegHandPointDown />
                                    </div>
                                    <a href="" className=' underline hover:text-blue-700 text-blue-500'>
                                        <span className="font-medium"> facebook.com/scriptly </span>
                                    </a>
                                </li>
                                <li >
                                    <div className='flex gap-2 items-center'>
                                        <FaXTwitter />
                                        <span>Twitter </span>
                                        <FaRegHandPointDown />
                                    </div>
                                    <a href="" className=' underline hover:text-blue-700 text-blue-500'>
                                        <span className="font-medium"> www.twitter.com/scriptly22 </span>
                                    </a>
                                </li>
                                <li >
                                    <div className='flex gap-2 items-center'>
                                        <GrInstagram />
                                        <span>Instagram </span>
                                        <FaRegHandPointDown />
                                    </div>
                                    <a href="" className=' underline hover:text-blue-700 text-blue-500'>
                                        <span className="font-medium">insta.com/scriptly22</span>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default support;