"use client"
import React from 'react';
import { Progress } from 'flowbite-react';
import Image from 'next/image'
import GolChart from '@/components/DashboardComponents/GolChart';

const Dashboard = () => {



  return (
    <div className=' px-5 py-3 lg:px-14 lg:py-6'>
      <h2 className='text-2xl text-gray-800 font-semibold font-serif mb-4'>My Writing Stats</h2>
      <div className=' grid grid-cols-3'>
        <div className='col-span-3 lg:col-span-2 shadow-xl min-h-screen border-green-800 border-2'>
          {/* challenge */}
          <div className='flex border justify-center'>

            <div className='px-5 bg-gray-200'>
              <div className=' flex justify-center'>
                <Image src="https://i.ibb.co/wd5H27r/my-pic.jpg" width={80} height={80}
                  alt="Picture of Badge"
                />
              </div>
              <p className='text-center'>Novice Writer</p>
              <Progress progress={60} textLabel="Progress" size="lg" labelProgress labelText />
              <div className=' flex justify-between'>
                <p>17345 Words</p>
                <p>25000</p>
              </div>
            </div>
            {/* pie chart */}
            <div>
              <GolChart></GolChart>

            </div>
          </div>


        </div>
        <div className='col-span-3 lg:col-span-1 bg-blue-500 min-h-screen'>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;