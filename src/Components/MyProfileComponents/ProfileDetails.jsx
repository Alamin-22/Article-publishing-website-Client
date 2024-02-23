import React, { useState } from 'react';
import { CgWebsite } from "react-icons/cg";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import { FaGraduationCap, FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { Label, Textarea } from 'flowbite-react';

const ProfileDetails = () => {

    const [editMode, setEditMode] = useState(false);
    const [aboutText, setAboutText] = useState("Hello, I'm Md. Al Amin Mollik, a passionate junior web developer with expertise in the MERN stack - React.js, Node.js, Express.js, and MongoDB. My journey in the world of technology is fueled by a relentless passion for crafting seamless and user-centric web experiences.");


    const handleEditClick = () => {
        setEditMode(!editMode);
    };

    const handleAboutChange = (e) => {
        setAboutText(e.target.value);
    };

    return (
        <div>
            <div className='grid grid-cols-4 mt-2 gap-4'>
                <div className=' col-span-4 lg:col-span-2'>
                    <div>
                        <div className='flex gap-3'>
                            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>About Me</h2>
                            <FaRegEdit className='mr-10 mt-1 text-blue-500 text-xl hover:cursor-pointer hover:text-blue-700' />
                        </div>

                    </div>

                    <div className='p-1'>
                        {editMode ? (
                            <div className="max-w-md">
                                <div className="max-w-md">
                                    <Textarea id="about"
                                        placeholder="Write About Yourself..."
                                        required rows={10} value={aboutText}
                                        onChange={handleAboutChange} />
                                </div>
                            </div>
                        ) : (
                            <p>
                                {aboutText}
                            </p>
                        )}
                    </div>
                </div>

                <div className='col-span-4 lg:col-span-2  mt-1 space-y-2 text-gray-700'>
                    <div className='flex gap-3'>
                        <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Work & Education</h2>
                        <FaRegEdit className='mr-10 mt-1 text-blue-500 text-xl hover:cursor-pointer hover:text-blue-700' />
                    </div>
                    <div className='space-y-2'>
                        <p className='flex items-center gap-2 font-medium'>
                            <CgWebsite className='text-xl ' /> Web Developer
                        </p>
                        <p className='flex items-center gap-2 font-medium'>
                            <FaEnvelopeOpenText className='text-xl ' /> xyz@gmail.com
                        </p>
                        <p className='flex items-center gap-2 font-medium'>
                            <FaGraduationCap className='text-xl ' /> Studied at BUET
                        </p>
                        <p className='flex items-center gap-2 font-medium'>
                            <FaLocationDot className='text-xl ' /> Dhaka, Bangladesh
                        </p>
                    </div>

                </div>

            </div>
            <div className=' mt-8'>
                <div className='flex gap-4'>
                    <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Social Media Link</h2>
                    <FaRegEdit className='mr-10 mt-1 text-blue-500 text-xl hover:cursor-pointer hover:text-blue-700' />
                </div>
                <div className=' space-y-2 text-gray-700'>
                    <p className='flex items-center gap-2 font-medium flex-wrap'>
                        <FaFacebook className='text-xl text-blue-600' /> www.facebook.com/xyz22
                    </p>
                    <p className='flex items-center gap-2 font-medium flex-wrap'>
                        <FaLinkedin className='text-xl text-blue-600 ' /> www.linkedin.com/in/md-al-amin-mollik
                    </p>
                    <p className='flex items-center gap-2 font-medium'>
                        <FaTwitter className='text-xl text-blue-600 flex-wrap' /> www.twitter.com/xyz22
                    </p>
                    <p className='flex items-center gap-2 font-medium'>
                        <RiInstagramLine className='text-xl text-red-500 flex-wrap' /> www.instagram.com/xyz22
                    </p>
                </div>
            </div>
        </div>

    );
};

export default ProfileDetails;