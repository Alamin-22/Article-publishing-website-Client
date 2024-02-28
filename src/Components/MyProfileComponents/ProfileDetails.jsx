import React, { useState } from 'react';
import { CgWebsite } from "react-icons/cg";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { TiEdit } from "react-icons/ti";
import { Textarea } from 'flowbite-react';
import { FaGraduationCap } from "react-icons/fa6";
import { FloatingLabel } from 'flowbite-react';
import { ImOffice } from "react-icons/im";
import { FaComputer } from "react-icons/fa6";
import { TbBuildingBank } from "react-icons/tb";



const ProfileDetails = ({ ProfileInfo }) => {

    const [editAbout, setEditAbout] = useState(false);
    const [editWorkEdu, setEditWorkEdu] = useState(false);
    const [editSocial, setEditSocial] = useState(false);

    // Toggle Related Func
    const handleEditAbout = () => {
        setEditAbout(!editAbout);
    };
    const handleEditWorkEdu = () => {
        setEditWorkEdu(!editWorkEdu);
    };
    const handleEditSocial = () => {
        setEditSocial(!editSocial);
    };

    // end Toggle Related Func

    // Form Related

    const handleAbout = (e) => {
        e.preventDefault();
        const AboutForm = new FormData(e.currentTarget);
        const About = AboutForm.get("About");
        // console.log({About});
        axiosInstance.patch(`/v1/api/patch-user/${ProfileInfo?._id}`, { About })
            .then(res => {
                toast.success('About Section Successfully Updated!')
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
                toast.error('Sorry There is some Internal Issue. Please Try again later')
            })
        setEditMode(!editMode);
    }
    const handleWorkEdu = (e) => {
        e.preventDefault();
        const WorkEdu = new FormData(e.currentTarget);
        const WorkSector = WorkEdu.get("WorkSector");
        const WorkPlace = WorkEdu.get("WorkPlace");
        const Education = WorkEdu.get("Education");
        const location = WorkEdu.get("location");

        const WorkEduInfo = {
            WorkSector, WorkPlace, Education, location
        }

        axiosInstance.patch(`/v1/api/patch-user/${ProfileInfo?._id}`, WorkEduInfo)
            .then(res => {
                toast.success('Work And Education Successfully Updated!')
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
                toast.error('Sorry There is some Internal Issue. Please Try again later')
            })
        setEditWorkEdu(!editWorkEdu);
    }
    const handleSocial = (e) => {
        e.preventDefault();
        const Social = new FormData(e.currentTarget);
        const Facebook = Social.get("fb");
        const LinkedIn = Social.get("lnkdin");
        const Twitter = Social.get("twtr");
        const Instagram = Social.get("insta");

        const WorkSocial = {
            Facebook, LinkedIn, Twitter, Instagram,
        }
        axiosInstance.patch(`/v1/api/patch-user/${ProfileInfo?._id}`, WorkSocial)
            .then(res => {
                toast.success('Social Links Successfully Updated!')
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
                toast.error('Sorry There is some Internal Issue. Please Try again later')
            })
        setEditSocial(!editSocial);
    }


    return (
        <div>
            <div className='grid grid-cols-4 mt-2 gap-4'>
                <div className='col-span-4 md:col-span-2'>
                    <div className='flex gap-5'>
                        <h2 className='text-2xl font-semibold text-gray-800 mb-4'>About Me</h2>
                        <TiEdit onClick={handleEditAbout} className='mt-1 cursor-pointer text-slate-500 hover:text-slate-800 text-2xl' />
                    </div>
                    <div>
                        {
                            editAbout ?
                                <> <form onSubmit={handleAbout}>
                                    <div className="max-w-md">
                                        <Textarea name='About' id="comment" placeholder="Write ABout Yourself..." required rows={8} />
                                    </div>
                                </form>
                                </>
                                :
                                <>
                                    <p>
                                        Hello, I'm Md. Al Amin Mollik, a passionate junior web developer with expertise in the MERN stack - React.js, Node.js, Express.js, and MongoDB. My journey in the world of technology is fueled by a relentless passion for crafting seamless and user-centric web experiences.
                                    </p>
                                </>
                        }


                    </div>
                    <div className='flex gap-5 items-center'>
                        <h2 className='text-2xl font-semibold text-gray-800 mt-6'>Work And Education</h2>
                        <TiEdit onClick={handleEditWorkEdu} className='mt-5 cursor-pointer text-slate-500 hover:text-slate-800 text-2xl' />
                    </div>
                    <div>
                        {
                            editWorkEdu ?
                                <>
                                    <div className='mt-4'>
                                        <div className=' relative   '>
                                            <FaComputer className='absolute z-30 mt-3 ml-3 text-xl' />
                                            <FloatingLabel className='pl-10' variant="outlined" label="Add Work Sector" />
                                        </div>
                                        <div className=' relative   '>
                                            <TbBuildingBank className='absolute z-30 mt-3 ml-3 text-xl' />
                                            <FloatingLabel  className='pl-10' variant="outlined" label="Add Your Institute" />
                                        </div>
                                        <div className=' relative   '>
                                            <ImOffice className='absolute z-30 mt-3 ml-3 text-xl' />
                                            <FloatingLabel  className='pl-10' variant="outlined" label="Add Your Work Company" />
                                        </div>
                                        <div className=' relative  '>
                                            <FaLocationDot className='absolute z-30 mt-3 ml-3 text-xl' />
                                            <FloatingLabel className='pl-10'  variant="outlined" label="Add Your Current City" />
                                        </div>
                                        
                                    </div>
                                </>
                                :
                                <>
                                    <div className='mt-2 space-y-2 text-gray-700'>
                                        <p className='flex items-center gap-2 font-medium'>
                                            <FaComputer className='text-xl ' /> Web Developer
                                        </p>
                                        <p className='flex items-center gap-2 font-medium'>
                                            <FaGraduationCap className='text-xl ' /> Studied at BUET
                                        </p>
                                        <p className='flex items-center gap-2 font-medium'>
                                            <ImOffice className='text-xl ' /> Working at XYZ Company LTD
                                        </p>
                                        <p className='flex items-center gap-2 font-medium'>
                                            <FaEnvelopeOpenText className='text-xl ' /> xyz@gmail.com
                                        </p>
                                        <p className='flex items-center gap-2 font-medium'>
                                            <FaLocationDot className='text-xl ' /> Dhaka, Bangladesh
                                        </p>
                                    </div>
                                </>
                        }


                    </div>


                </div>
                <div className='col-span-4 md:col-span-2'>
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