'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/router';

function NavbarComponent() {

    const user = false;


    return (
        <Navbar fluid rounded className='shadow-xl bg-[#ebe3eb] '>
            <Navbar.Brand >
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite React
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2 ">
                {
                    user ?
                        <>
                            <Dropdown
                                arrowIcon={false}
                                inline
                                label={
                                    <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                                }
                            >
                                <Dropdown.Header>
                                    <span className="block text-sm">Bonnie Green</span>
                                    <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                                </Dropdown.Header>
                                <Dropdown.Item>Dashboard</Dropdown.Item>
                                <Dropdown.Item>Settings</Dropdown.Item>
                                <Dropdown.Item>Earnings</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>Sign out</Dropdown.Item>
                            </Dropdown>
                        </>
                        :
                        <>
                            <Button gradientMonochrome="teal">Get Start</Button>
                        </>
                }

                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="/" >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/about" >About Us</Navbar.Link>
                <Navbar.Link href="#">Community</Navbar.Link>
                <Navbar.Link href="#">Support</Navbar.Link>
                <Navbar.Link href="/contact">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent