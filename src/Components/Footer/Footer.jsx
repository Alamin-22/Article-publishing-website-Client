
'use client';

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import Logo from '../Miscellaneous/Logo';

function FooterCom() {
    return (
        <Footer container className='bg-gray-700 text-white rounded-none'>
            <div className="w-full ">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <Logo className={"text-4xl"} />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div className='text-white'>
                        </div>
                        <div>
                            <Footer.Title className='text-white' title="Follow us" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#" className='text-white hover:text-blue-600 transition duration-300 delay-100 cursor-pointer'>Github</Footer.Link>
                                <Footer.Link href="#" className='text-white hover:text-blue-600 transition duration-300 delay-100 cursor-pointer'>Discord</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider className='' />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright className='text-white' href="#" by="Scriptly" year={2024} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="#" icon={BsFacebook} className='text-white hover:text-blue-600 transition duration-300 delay-100 cursor-pointer' />
                        <Footer.Icon href="#" icon={BsGithub} className='text-white hover:text-gray-800 transition duration-300 delay-100 cursor-pointer' />
                    </div>
                </div>
            </div>
        </Footer>
    );
}


export default FooterCom;