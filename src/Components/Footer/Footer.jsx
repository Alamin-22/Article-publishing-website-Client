
'use client';

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function FooterCom() {
    return (
        <Footer container className='bg-[#bebcbc] mt-16 '>
            <div className="w-full ">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <span className="self-center whitespace-nowrap text-2xl md:text-3xl lg:text-5xl font-semibold dark:text-white">
                            <span className='text-[#cd1cd2] text-3xl md:text-5xl lg:text-7xl' >S</span>cr<span className='text-[#da4681]'>ip</span>t<span className='text-[#d24bff]'>ly</span>
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#" className='hover:text-blue-600 transition duration-300 delay-100 cursor-pointer'>Flowbite</Footer.Link>
                                <Footer.Link href="#" className='hover:text-blue-600 transition duration-300 delay-100 cursor-pointer'>Tailwind CSS</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#" className='hover:text-blue-600 transition duration-300 delay-100 cursor-pointer'>Github</Footer.Link>
                                <Footer.Link href="#" className='hover:text-blue-600 transition duration-300 delay-100 cursor-pointer'>Discord</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#" className='hover:text-blue-600 transition duration-300 delay-100 cursor-pointer'>Privacy Policy</Footer.Link>
                                <Footer.Link href="#" className='hover:text-blue-600 transition duration-300 delay-100 cursor-pointer'>Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider className='' />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="Scriptly" year={2022} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="#" icon={BsFacebook} className='hover:text-blue-600 transition duration-300 delay-100 cursor-pointer' />
                        <Footer.Icon href="#" icon={BsInstagram} className='hover:text-orange-600 transition duration-300 delay-100 cursor-pointer' />
                        <Footer.Icon href="#" icon={BsTwitter} className='hover:text-blue-600 transition duration-300 delay-100 cursor-pointer' />
                        <Footer.Icon href="#" icon={BsGithub} className='hover:text-gray-800 transition duration-300 delay-100 cursor-pointer' />
                        <Footer.Icon href="#" icon={BsDribbble} className='hover:text-red-600 transition duration-300 delay-100 cursor-pointer' />
                    </div>
                </div>
            </div>
        </Footer>
    );
}


export default FooterCom;