'use client';

import useAuth from '@/Hooks/useAuth';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import Logo from './Miscellaneous/Logo';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/api';


function NavbarComponent() {

    const { user, logOut } = useAuth();
    const router = useRouter();
    const axiosPublic = axiosInstance();


    const handleLogout = () => {
        logOut()
            .then(() => {
                // for redirect to the home page after Successful logOut
                router.push('/');
            })
            .catch()
    }

    return (
        <Navbar fluid rounded className='shadow-xl bg-[#D9D9D9]'>
            <Navbar.Brand >
                <Logo className={"text-2xl"} />
            </Navbar.Brand>
            <div className="flex md:order-2 z-50">
                {
                    user ?
                        <>
                            <Dropdown
                                arrowIcon={false}
                                inline
                                label={
                                    <Avatar alt="User Pic" img={user?.photoURL} rounded />
                                }
                            >
                                <Dropdown.Header>
                                    <span className="block text-sm">{user?.displayName}</span>
                                    <span className="block truncate text-sm font-medium">{user?.email}</span>
                                </Dropdown.Header>
                                <Dropdown.Item href='/dashboard'>Dashboard</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
                            </Dropdown>
                        </>
                        :
                        <>
                            <Link href={"/login"}>
                                <Button color='dark' pill>Get Start</Button>
                            </Link>
                        </>
                }

                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="/" >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/about" >About Us</Navbar.Link>
                <Navbar.Link href="/write">Write</Navbar.Link>
                <Navbar.Link href="/community">Community</Navbar.Link>
                <Navbar.Link href="/contact">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent