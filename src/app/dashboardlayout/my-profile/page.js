import BreadCrumb from '@/components/MyProfileComponents/BreadCrumb';
import React from 'react';
import Image from "next/image";
import bannerImg from "../../../../public/bg-writing.jpg"
import userImg from "../../../../public/my pic.jpg"



const MyProfile = () => {
    return (
        <div className='p-4'>
            <h2 className='text-2xl font-semibold text-gray-800'>Profile Information</h2>
            <div className='py-3'>
                <BreadCrumb ></BreadCrumb>
            </div>
            {/* user profile with banner and title */}
            <div>
                <figure>
                    <div className="w-full h-[350px] bg-black relative rounded-xl">
                        <div className="absolute z-40 h-full w-full flex items-center justify-center text-center flex-col ">

                            <img src={"https://i.ibb.co/Bw6HfMF/my-pic.jpg"} className='w-36 h-36 mt-5 rounded-full' alt="user Image" />
                            <div className='my-2'>
                                <div>
                                    <h2 className="text-gray-100 font-black text-3xl lg:text-3xl max-w-80 lg:max-w-[640px]">
                                        Md. Al Amin Mollik
                                    </h2>
                                    <p className="text-zinc-200 font-semibold text-xl max-w-[640px] ">
                                        Full Stack Developer
                                    </p>
                                </div>
                                <div className='flex justify-evenly mt-5 text-gray-100 text-3xl'>
                                    <div>
                                        <p className='font-semibold '>25,620</p>
                                        <p className='text-zinc-300 text-lg'>Followers </p>
                                    </div>
                                    <div>
                                        <p className='font-semibold '>61,526</p>
                                        <p className='text-zinc-300 text-lg'>Following </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-50 ">
                            <Image
                                layout="fill"
                                objectFit="cover"
                                className="rounded-xl"
                                src={bannerImg} alt="Banner Image" />
                        </div>
                    </div>
                </figure>
            </div>
        </div>
    );
};

export default MyProfile;