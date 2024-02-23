import React, { useState } from 'react'; import { PiDesktopTowerDuotone } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg"; import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaGraduationCap, FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { Textarea } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { ImCancelCircle } from "react-icons/im";
import { IoCloudUploadOutline } from "react-icons/io5";

import { FloatingLabel } from 'flowbite-react';




const ProfileDetails = () => {

    const [editMode, setEditMode] = useState(false);
    const [editWorkEdu, setEditWorkEdu] = useState(false);
    const [editSocial, setEditSocial] = useState(false);
    const [aboutText, setAboutText] = useState("Hello, I'm Md. Al Amin Mollik, a passionate junior web developer with expertise in the MERN stack - React.js, Node.js, Express.js, and MongoDB. My journey in the world of technology is fueled by a relentless passion for crafting seamless and user-centric web experiences.");


    const handleEditClick = () => {
        setEditMode(!editMode);
    };
    const handleEditWorkEdu = () => {
        setEditWorkEdu(!editWorkEdu);
    };
    const handleEditSocial = () => {
        setEditSocial(!editSocial);
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
                            <FaRegEdit onClick={handleEditClick} className='mr-10 mt-1 text-blue-500 text-xl hover:cursor-pointer hover:text-blue-700' />
                        </div>

                    </div>

                    <div className='p-1'>
                        {editMode ? (
                            <form >
                                <div className="max-w-md">
                                    <div className="max-w-md">
                                        <Textarea id="about"
                                            placeholder="Write About Yourself..."
                                            required rows={10} value={aboutText}
                                            onChange={handleAboutChange} />
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <Button.Group outline>
                                        <Button onClick={handleEditClick} gradientMonochrome="info">
                                            <ImCancelCircle className="mr-3 h-4 w-4" />
                                            Cancel
                                        </Button>
                                        <Button gradientMonochrome="info">
                                            <IoCloudUploadOutline className="mr-3 h-4 w-4" />
                                            Update
                                        </Button>
                                    </Button.Group>
                                </div>
                            </form>
                        ) : (
                            <p>
                                {aboutText}
                            </p>
                        )}
                    </div>
                </div>

                <div className='col-span-4 lg:col-span-2   space-y-2 text-gray-700'>
                    <div className='flex items-center'>
                        <div className='flex gap-3'>
                            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Work & Education</h2>
                            <FaRegEdit onClick={handleEditWorkEdu} className='mr-10 mt-1 text-blue-500 text-xl hover:cursor-pointer hover:text-blue-700' />
                        </div>
                        {
                            editWorkEdu && <div className='mb-4'>
                                <div className='flex gap-3'>
                                    <Button onClick={handleEditWorkEdu} gradientMonochrome="info">
                                        <ImCancelCircle className=" text-lg" />
                                    </Button>
                                    <Button gradientMonochrome="info">
                                        <IoCloudUploadOutline className="mr-3 h-4 w-4 " />
                                        Save
                                    </Button>
                                </div>


                            </div>
                        }

                    </div>

                    <div >
                        {
                            editWorkEdu ?
                                <>
                                    <form >
                                        <div>
                                            <FloatingLabel variant="outlined" label="Add Your Work Sector" />
                                            <FloatingLabel variant="outlined" label="Add A Work place" />
                                            <FloatingLabel variant="outlined" label="Add Your Education" />
                                            <FloatingLabel variant="outlined" label="Add Your City and Country" />
                                        </div>
                                    </form>
                                </>
                                :
                                <>
                                    <div className='space-y-2'>
                                        <p className='flex items-center gap-2 font-medium'>
                                            <PiDesktopTowerDuotone className='text-xl ' /> Web Developer
                                        </p>
                                        <p className='flex items-center gap-2 font-medium'>
                                            <HiOutlineBuildingOffice2 className='text-xl ' /> Work At Web Developer
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
                                </>
                        }


                    </div>

                </div>

            </div>
            <div className=' mt-8'>
                <div className='flex gap-4'>
                    <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Social Media Link</h2>
                    <FaRegEdit onClick={handleEditSocial} className='mr-10 mt-1 text-blue-500 text-xl hover:cursor-pointer hover:text-blue-700' />
                </div>
                {
                    editSocial ?
                        <>
                            <form >
                                <div>
                                    <div className='   relative'>
                                        <FaFacebook  className=' absolute top-3 left-3 z-20 text-2xl text-blue-600' />
                                        <FloatingLabel className='pl-12' variant="outlined" label="Add Your Facebook Link" />
                                    </div>
                                    <div className='   relative'>
                                        <FaLinkedin  className=' absolute top-3 left-3 z-20 text-2xl text-blue-600' />
                                        <FloatingLabel className='pl-12' variant="outlined" label="Add Your LinkedIn Link" />
                                    </div>
                                    <div className='   relative'>
                                        <FaTwitter  className=' absolute top-3 left-3 z-20 text-2xl text-blue-600' />
                                        <FloatingLabel className='pl-12' variant="outlined" label="Add Your Twitter Link" />
                                    </div>
                                    <div className='   relative'>
                                        <RiInstagramLine  className=' absolute top-3 left-3 z-20 text-2xl text-blue-600' />
                                        <FloatingLabel className='pl-12' variant="outlined" label="Add Your Instagram" />
                                    </div>
                                </div>
                            </form>
                        </>
                        :
                        <>
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
                        </>
                }

            </div>
        </div>

    );
};

export default ProfileDetails;