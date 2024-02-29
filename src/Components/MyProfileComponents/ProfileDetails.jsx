import React, { useState } from 'react';
import { FaEnvelopeOpenText, FaRegCheckCircle } from "react-icons/fa";
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
import { TbBuildingBank } from "react-icons/tb"; import { Button } from 'flowbite-react';
import { MdOutlineCancel } from "react-icons/md";
import { FaCheck } from "react-icons/fa";


const ProfileDetails = ({ UserInfo }) => {

    // const { About, LinkedIn, Education, Facebook, Twitter, Instagram, workPlace, WorkSector } = UserInfo;

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
                <div className='col-span-4 lg:col-span-2'>
                    <div className='flex gap-5'>
                        <h2 className='text-2xl font-semibold text-gray-800 mb-4'>About Me</h2>
                        <TiEdit onClick={handleEditAbout} className='mt-1 cursor-pointer text-slate-500 hover:text-slate-800 text-2xl' />
                    </div>
                    <div>
                        {
                            editAbout ?
                                <> <form onSubmit={handleAbout} className='relative'>
                                    <div className="max-w-md">
                                        <Textarea name='About' id="comment" placeholder="Write ABout Yourself..." required rows={8} />
                                    </div>
                                    <div className="absolute -mt-12 right-12 flex flex-wrap gap-2">
                                        <Button size={"xs"} pill>
                                            <MdOutlineCancel className="h-6 w-5" />
                                        </Button>
                                        <Button size={"xs"} pill>
                                            <FaRegCheckCircle className="h-6 w-5" />
                                        </Button>
                                    </div>
                                </form>
                                </>
                                :
                                <>
                                    <p>
                                        {UserInfo?.About}
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
                                    <form onSubmit={handleWorkEdu}>
                                        <div className='mt-4'>
                                            <div className=' relative   '>
                                                <FaComputer className='absolute z-30 mt-3 ml-3 text-xl' />
                                                <FloatingLabel className='pl-10' variant="outlined" label="Add Work Sector" />
                                            </div>
                                            <div className=' relative   '>
                                                <TbBuildingBank className='absolute z-30 mt-3 ml-3 text-xl' />
                                                <FloatingLabel className='pl-10' variant="outlined" label="Add Your Institute" />
                                            </div>
                                            <div className=' relative   '>
                                                <ImOffice className='absolute z-30 mt-3 ml-3 text-xl' />
                                                <FloatingLabel className='pl-10' variant="outlined" label="Add Your Work Company" />
                                            </div>
                                            <div className=' relative  '>
                                                <FaLocationDot className='absolute z-30 mt-3 ml-3 text-xl' />
                                                <FloatingLabel className='pl-10' variant="outlined" label="Add Your Current City" />
                                            </div>

                                        </div>
                                    </form>
                                </>
                                :
                                <>
                                    <div className='mt-2 space-y-2 text-gray-700'>
                                        <p className='flex items-center gap-2 font-medium'>
                                            <FaComputer className='text-xl ' /> {UserInfo?.WorkSector}
                                        </p>
                                        <p className='flex items-center gap-2 font-medium'>
                                            <FaGraduationCap className='text-xl ' /> Studied at {UserInfo?.Education}
                                        </p>
                                        <p className='flex items-center gap-2 font-medium'>
                                            <ImOffice className='text-xl ' /> Working At {UserInfo?.WorkPlace}
                                        </p>
                                        <p className='flex items-center gap-2 font-medium'>
                                            <FaEnvelopeOpenText className='text-xl ' /> {UserInfo?.email}
                                        </p>
                                        <p className='flex items-center gap-2 font-medium'>
                                            <FaLocationDot className='text-xl ' /> {UserInfo?.location}
                                        </p>
                                    </div>
                                </>
                        }


                    </div>


                </div>
                <div className='col-span-4 lg:col-span-2'>
                    <div className='flex gap-5 '>
                        <h2 className='text-2xl font-semibold text-gray-800 mb-4 '>Social Media Link</h2>
                        <TiEdit onClick={handleEditSocial} className=' mt-1 cursor-pointer text-slate-500 hover:text-slate-800 text-2xl' />
                    </div>
                    <div>
                        {
                            editSocial ?
                                <>
                                    <form onSubmit={handleSocial}>
                                        <div className='mt-4'>
                                            <div className=' relative  '>
                                                <FaFacebook className='absolute z-30 mt-3 ml-3 text-xl' />
                                                <FloatingLabel className='pl-10' variant="outlined" label="Add Facebook " />
                                            </div>
                                            <div className=' relative   '>
                                                <FaLinkedin className='absolute z-30 mt-3 ml-3 text-xl' />
                                                <FloatingLabel className='pl-10' variant="outlined" label="Add LinkedIn" />
                                            </div>
                                            <div className=' relative   '>
                                                <FaTwitter className='absolute z-30 mt-3 ml-3 text-xl' />
                                                <FloatingLabel className='pl-10' variant="outlined" label="Add Twitter" />
                                            </div>
                                            <div className=' relative  '>
                                                <RiInstagramLine className='absolute z-30 mt-3 ml-3 text-xl' />
                                                <FloatingLabel className='pl-10' variant="outlined" label="Add Instagram" />
                                            </div>

                                        </div>
                                    </form>

                                </>
                                :
                                <>

                                    <div className='  space-y-2 text-gray-700'>
                                        <p className='flex items-center gap-2 font-medium'>
                                            <FaFacebook className='text-xl text-blue-600' /> {UserInfo?.Facebook}
                                        </p>
                                        <p className='flex items-center gap-2 font-medium'>
                                            <FaLinkedin className='text-xl text-blue-600 ' />{UserInfo?.LinkedIn}
                                        </p>
                                        <p className='flex items-center gap-2 font-medium'>
                                            <FaTwitter className='text-xl text-blue-600 ' /> {UserInfo?.Twitter}
                                        </p>
                                        <p className='flex items-center gap-2 font-medium'>
                                            <RiInstagramLine className='text-xl text-red-500 ' /> {UserInfo?.Instagram}
                                        </p>
                                    </div>
                                </>
                        }

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;