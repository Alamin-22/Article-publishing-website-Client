import Image from 'next/image';
import React from 'react';
import { Button } from 'flowbite-react';
import { FaHeart, FaSave } from "react-icons/fa";

const LastestCard = ({ title, text, thumbnail }) => {
    return (
        <div className='flex flex-col-reverse lg:flex-row items-center gap-5 mb-10  p-4 rounded-lg bg-[#ffffff85]'>

            <div className='flex flex-col justify-between items-center'>
                <div className='flex-1'>
                    <h1 className='text-gray-800 font-black text-2xl'>{title}</h1>
                    <p className='text-gray-700 text-justify'>{text}</p>
                </div>
                <div>
                    <Button color='light' className='bg-transparent border-none font-black'>

                        View Full Article ▼
                    </Button>
                </div>
                <div className='flex gap-3 mt-5 w-full justify-between'>

                    <Button color='light' className='bg-transparent border-none '>
                        <span className='font-black'>Comments</span>(1234) ▼
                    </Button>
                    <div className='flex'>
                        <Button color='light' className='bg-transparent border-none'>
                            <FaHeart />&nbsp;8532
                        </Button>
                        <Button color='light' className='bg-transparent border-none'>
                            <FaSave />&nbsp;234
                        </Button>
                    </div>
                </div>
            </div>

            <div className='rounded-lg overflow-hidden' style={{ maxWidth: '400px', maxHeight: '500px', width: '100%', height: 'auto' }}>
                <Image
                    src={thumbnail}
                    alt="Image description"
                    layout="responsive"
                    width={400}
                    height={500}
                />
            </div>
        </div>
    );
};

export default LastestCard;
