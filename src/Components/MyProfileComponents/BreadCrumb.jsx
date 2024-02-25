'use client';

import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

import React from 'react';

const BreadCrumb = ({user}) => {
    return (
        <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item href="/" icon={HiHome}>
                Home
            </Breadcrumb.Item>
            <Breadcrumb.Item >Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item >My Profile</Breadcrumb.Item>
            <Breadcrumb.Item>{user?.displayName}</Breadcrumb.Item>
        </Breadcrumb>
    );
};

export default BreadCrumb;