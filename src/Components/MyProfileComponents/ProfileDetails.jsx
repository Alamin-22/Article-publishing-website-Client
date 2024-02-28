import React, { useState } from 'react';
import { CgWebsite } from "react-icons/cg";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";




const ProfileDetails = ({ ProfileInfo }) => {

    const [editMode, setEditMode] = useState(false);
    const [editWorkEdu, setEditWorkEdu] = useState(false);
    const [editSocial, setEditSocial] = useState(false);

    // Toggle Related Func
    const handleEditClick = () => {
        setEditMode(!editMode);
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