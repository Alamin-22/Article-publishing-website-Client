import Image from 'next/image';
import React from 'react';

const LastestCard = ({ title, text, thumbnail }) => {
    return (
        <div className='flex items-center gap-5 mb-10 border-[4px] p-4 rounded-lg'>

            <div>
                <h1 className='text-gray-800 font-black text-2xl'>{title}</h1>
                <p className='text-gray-700 text-justify'>{text}</p>
            </div>

            <div className='rounded-lg overflow-hidden'>
                <Image
                    width={400}
                    height={500}
                    src={`${thumbnail}`} alt="" />
            </div>
        </div>
    );
};

export default LastestCard;