import React from 'react';

const CategoryBox = ({ categoryName }) => {
    return (
        <div className='bg-gray-800 rounded-full text-white flex w-fit px-5 py-2'>
            {categoryName}
        </div>
    );
};

export default CategoryBox;