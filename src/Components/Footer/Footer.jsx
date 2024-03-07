"use client";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import Logo from "../Miscellaneous/Logo";

function FooterCom() {
  return (
    <Footer container className="bg-gray-500  text-white rounded-none">
      <div className="w-full ">
        <div className="flex flex-col md:flex-row gap-5 justify-between max-w-7xl mx-auto">
          <div className="">
            <Logo className={"text-4xl"} />
            <p>Unlock Your Voice, Scriptly </p>
            <p> Where Ideas Take Shape</p>
          </div>

          <div>
            <Footer.Title className="text-white" title="Follow us" />
            <Footer.LinkGroup col>
              <Footer.Link
                href="#"
                className="text-white hover:text-blue-600 transition duration-300 delay-100 cursor-pointer"
              >
                Github
              </Footer.Link>
              <Footer.Link
                href="#"
                className="text-white hover:text-blue-600 transition duration-300 delay-100 cursor-pointer"
              >
                Discord
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className="text-white" title="Links" />
            <Footer.LinkGroup col>
              <Footer.Link
                href="/about"
                className="text-white hover:text-blue-600 transition duration-300 delay-100 cursor-pointer"
              >
                About Us
              </Footer.Link>
              <Footer.Link
                href="/contact"
                className="text-white hover:text-blue-600 transition duration-300 delay-100 cursor-pointer"
              >
                Contact Us
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <Footer.Divider className="" />
        <div className="w-full flex items-center justify-between">
          <Footer.Copyright
            className="text-white"
            href="#"
            by="Scriptly"
            year={2024}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
              className="text-white hover:text-blue-600 transition duration-300 delay-100 cursor-pointer"
            />
            <Footer.Icon
              href="#"
              icon={BsGithub}
              className="text-white hover:text-gray-800 transition duration-300 delay-100 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterCom;
