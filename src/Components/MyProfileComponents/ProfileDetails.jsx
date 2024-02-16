import React from 'react';
import { CgWebsite } from "react-icons/cg";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";



const ProfileDetails = () => {
    return (
        <div>
            <div className='grid grid-cols-4 mt-2 gap-4'>
                <div className='col-span-2'>
                    <h2 className='text-2xl font-semibold text-gray-800 mb-4'>About Me</h2>
                    <p>
                        Hello, I'm Md. Al Amin Mollik, a passionate junior web developer with expertise in the MERN stack - React.js, Node.js, Express.js, and MongoDB. My journey in the world of technology is fueled by a relentless passion for crafting seamless and user-centric web experiences.
                    </p>
                    <div className='mt-8 space-y-2 text-gray-700'>
                        <p className='flex items-center gap-2 font-medium'>
                            <CgWebsite className='text-xl ' /> Web Developer
                        </p>
                        <p className='flex items-center gap-2 font-medium'>
                            <FaEnvelopeOpenText className='text-xl ' /> xyz@gmail.com
                        </p>
                        <p className='flex items-center gap-2 font-medium'>
                            <MdOutlineMenuBook className='text-xl ' /> Studied at BUET
                        </p>
                        <p className='flex items-center gap-2 font-medium'>
                            <FaLocationDot className='text-xl ' /> Dhaka, Bangladesh
                        </p>
                    </div>

                </div>
                <div className='col-span-2'>
                    <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Social Media Link</h2>
                    <div className=' space-y-2 text-gray-700'>
                        <p className='flex items-center gap-2 font-medium'>
                            <FaFacebook className='text-xl text-blue-600' /> www.facebook.com/xyz22
                        </p>
                        <p className='flex items-center gap-2 font-medium'>
                            <FaLinkedin className='text-xl text-blue-600 ' /> https://www.linkedin.com/in/md-al-amin-mollik
                        </p>
                        <p className='flex items-center gap-2 font-medium'>
                            <FaTwitter className='text-xl text-blue-600 ' /> www.twitter.com/xyz22
                        </p>
                        <p className='flex items-center gap-2 font-medium'>
                            <RiInstagramLine className='text-xl text-red-500 ' /> www.instagram.com/xyz22
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;