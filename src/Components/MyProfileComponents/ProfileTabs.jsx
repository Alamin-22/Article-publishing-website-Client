import React from 'react';
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import ProfileDetails from './ProfileDetails';
const ProfileTabs = ({UserInfo}) => {
    return (
        <Tabs aria-label="Tabs with underline" style="underline">
            <Tabs.Item active title="Profile" icon={FaUser}>
                <ProfileDetails UserInfo={UserInfo}></ProfileDetails>
            </Tabs.Item>
            {/* <Tabs.Item title="Followers" icon={FaHeart}>
                <p className='text-3xl text-red-500 text-center'>Currently Followers Section is under Development</p>
            </Tabs.Item>
            <Tabs.Item title="Friends" icon={FaPeopleGroup}>
                <p className='text-3xl text-red-500 text-center'>Currently Friends Section is under Development</p>
            </Tabs.Item>
            <Tabs.Item title="Gallery" icon={GrGallery}>
                <p className='text-3xl text-red-500 text-center'>Currently Gallery Section is under Development</p>
            </Tabs.Item> */}

        </Tabs>
    );
};

export default ProfileTabs;

