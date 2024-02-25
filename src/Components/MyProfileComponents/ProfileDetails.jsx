import React, { useState } from 'react'; import { PiDesktopTowerDuotone } from "react-icons/pi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
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
import axiosInstance from '@/api';
import toast from 'react-hot-toast';




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


    console.log(ProfileInfo)
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
                            <form onSubmit={handleAbout}>
                                <div className="max-w-md">
                                    <div className="max-w-md">
                                        <Textarea id="about"
                                            name='About'
                                            placeholder="Write About Yourself..."
                                            required rows={10} defaultValue={ProfileInfo?.About}
                                        />
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <Button.Group outline>
                                        <Button onClick={handleEditClick} gradientMonochrome="info">
                                            <ImCancelCircle className="mr-3 h-4 w-4" />
                                            Cancel
                                        </Button>
                                        <Button type='submit' gradientMonochrome="info">
                                            <IoCloudUploadOutline className="mr-3 h-4 w-4" />
                                            Save
                                        </Button>
                                    </Button.Group>
                                </div>
                            </form>
                        ) : (
                            <p>
                                {ProfileInfo?.About}
                            </p>
                        )}
                    </div>
                </div>
                <div className='col-span-4 lg:col-span-2   space-y-2 text-gray-700'>
                    <form onSubmit={handleWorkEdu}>
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
                                        <Button type='submit' gradientMonochrome="info">
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

                                        <div>
                                            <FloatingLabel name='WorkSector' variant="outlined" label="Add Your Work Sector" />
                                            <FloatingLabel name='WorkPlace' variant="outlined" label="Add A Work place" />
                                            <FloatingLabel name='Education' variant="outlined" label="Add Your School / College/ University " />
                                            <FloatingLabel name='location' variant="outlined" label="Add Your City and Country" />
                                        </div>

                                    </>
                                    :
                                    <>
                                        <div className='space-y-2'>
                                            <p className='flex items-center gap-2 font-medium'>
                                                <PiDesktopTowerDuotone className='text-xl ' /> {ProfileInfo?.WorkSector}
                                            </p>
                                            <p className='flex items-center gap-2 font-medium'>
                                                <HiOutlineBuildingOffice2 className='text-xl ' />
                                                Work At {ProfileInfo?.WorkPlace}
                                            </p>
                                            <p className='flex items-center gap-2 font-medium'>
                                                <FaEnvelopeOpenText className='text-xl ' /> {ProfileInfo?.email}
                                            </p>
                                            <p className='flex items-center gap-2 font-medium'>
                                                <FaGraduationCap className='text-xl ' />
                                                Studied At {ProfileInfo?.Education}
                                            </p>
                                            <p className='flex items-center gap-2 font-medium'>
                                                <FaLocationDot className='text-xl ' /> {ProfileInfo?.location}
                                            </p>
                                        </div>
                                    </>
                            }


                        </div>

                    </form>
                </div>

            </div>
            <form onSubmit={handleSocial} className=' mt-8'>
                <div className='flex'>
                    <div className='flex gap-4'>
                        <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Social Media Link</h2>
                        <FaRegEdit onClick={handleEditSocial} className='mr-10 mt-1 text-blue-500 text-xl hover:cursor-pointer hover:text-blue-700' />
                    </div>
                    {
                        editSocial && <div className='mb-4'>
                            <div className='flex gap-3'>
                                <Button onClick={handleEditSocial} gradientMonochrome="info">
                                    <ImCancelCircle className=" text-lg" />
                                </Button>
                                <Button type='submit' gradientMonochrome="info">
                                    <IoCloudUploadOutline className="mr-3 h-4 w-4 " />
                                    Save
                                </Button>
                            </div>


                        </div>
                    }
                </div>


                {
                    editSocial ?
                        <>

                            <div>
                                <div className='   relative'>
                                    <FaFacebook className=' absolute top-3 left-3 z-20 text-2xl text-blue-600' />
                                    <FloatingLabel name='fb' className='pl-12' variant="outlined"
                                        label="Add Your Facebook Link" defaultValue={ProfileInfo?.Facebook} />
                                </div>
                                <div className='   relative'>
                                    <FaLinkedin className=' absolute top-3 left-3 z-20 text-2xl text-blue-600' />
                                    <FloatingLabel name='lnkdin' className='pl-12' variant="outlined"
                                        defaultValue={ProfileInfo?.LinkedIn}
                                        label="Add Your LinkedIn Link" />
                                </div>
                                <div className='   relative'>
                                    <FaTwitter className=' absolute top-3 left-3 z-20 text-2xl text-blue-600' />
                                    <FloatingLabel name='twtr' className='pl-12' variant="outlined"
                                        defaultValue={ProfileInfo?.Twitter}
                                        label="Add Your Twitter Link" />
                                </div>
                                <div className='   relative'>
                                    <RiInstagramLine className=' absolute top-3 left-3 z-20 text-2xl text-blue-600' />
                                    <FloatingLabel name='insta' className='pl-12' variant="outlined"
                                        defaultValue={ProfileInfo?.Instagram}
                                        label="Add Your Instagram" />
                                </div>
                            </div>

                        </>
                        :
                        <>
                            <div className=' space-y-2 text-gray-700'>
                                <div>
                                    <a href={ProfileInfo?.Facebook} target='_blank'>
                                        <p className='flex items-center gap-2 font-medium flex-wrap hover:text-blue-600'>
                                            <FaFacebook className='text-xl text-blue-600' />
                                            {ProfileInfo?.Facebook}
                                        </p>
                                    </a>
                                </div>
                                <div>
                                    <a href={ProfileInfo?.LinkedIn} target='_blank'>
                                        <p className='flex items-center gap-2 font-medium flex-wrap  hover:text-blue-600'>
                                            <FaLinkedin className='text-xl text-blue-600 ' />
                                            {ProfileInfo?.LinkedIn}
                                        </p>
                                    </a>
                                </div>
                                <div>
                                    <a href={ProfileInfo?.Twitter}>
                                        <p className='flex items-center gap-2 font-medium hover:text-blue-600'>
                                            <FaTwitter className='text-xl text-blue-600 flex-wrap' />
                                            {ProfileInfo?.Twitter}
                                        </p>
                                    </a>
                                </div>
                                <div>
                                    <a href={ProfileInfo?.Instagram} target='_blank'>
                                        <p className='flex items-center gap-2 font-medium hover:text-blue-600'>
                                            <RiInstagramLine className='text-xl text-red-500 flex-wrap' />
                                            {ProfileInfo?.Instagram}
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </>
                }

            </form>
        </div>

    );
};

export default ProfileDetails;