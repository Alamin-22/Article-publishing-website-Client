import React from 'react';

const FeaturedCard = ({ idx, title, text }) => {
    return (
        <div className='flex items-center gap-5'>
            <div>
                <h1 className='text-white font-black text-5xl'>{idx}</h1>
            </div>
            <div>
                <h1 className='text-gray-800 font-black text-2xl'>{title}</h1>
                <p className='text-gray-700'>{text}</p>
            </div>
        </div>
    );
};

export default FeaturedCard;