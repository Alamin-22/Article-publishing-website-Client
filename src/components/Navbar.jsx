"use client";

import useAuth from "@/Hooks/useAuth";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Button } from "flowbite-react";
import Link from "next/link";
import Logo from "./Miscellaneous/Logo";
import { usePathname, useRouter } from "next/navigation";
import axiosInstance from "@/api";
import DashboardNavPhone from "./DashboardNav/DashboardNavPhone";
//
import { FaPerson } from "react-icons/fa6";
import { TbGraph } from "react-icons/tb";
import { TiChartPieOutline } from "react-icons/ti";
import { GrArticle } from "react-icons/gr";
import { GoGear } from "react-icons/go";
import { BsChatLeftText } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { ImProfile } from "react-icons/im";
import { MdFavoriteBorder } from "react-icons/md";

function NavbarComponent() {
  const { user, logOut } = useAuth();
  const router = useRouter();
  const axiosPublic = axiosInstance();
  const isAdmin = false;
  const location = usePathname();
  const handleLogout = () => {
    logOut()
      .then(() => {
        // for redirect to the home page after Successful logOut
        router.push("/");
      })
      .catch();
  };

  const links = (
    <>
      <div className="w-full mb-4 border-b-2"></div>
      <p
        onClick={() => handleLinkClick("/dashboardlayout")}
        className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
      >
        <TbGraph className="text-2xl" />
        <span className="mx-2 font-medium">Dashboard</span>
      </p>

      {isAdmin ? (
        <div>
          <p
            onClick={() => handleLinkClick("/admin-profile")}
            className="flex items-center px-4 py-2 rounded-lg mt-3 hover:bg-gray-100 cursor-pointer"
          >
            <FaPerson className="text-2xl" />
            <span className="mx-4 font-medium">Admin Profile</span>
          </p>
        </div>
      ) : (
        <div>
          <p
            onClick={() => handleLinkClick("/dashboardlayout/analytics")}
            className="flex items-center px-4 py-2 rounded-lg mt-3 hover:bg-gray-100 cursor-pointer"
          >
            <TiChartPieOutline className="text-2xl" />
            <span className="mx-2 font-medium">Analytics</span>
          </p>
          <p
            onClick={() => handleLinkClick("/dashboardlayout/my-articles")}
            className="flex items-center px-4 py-2 rounded-lg mt-3 hover:bg-gray-100 cursor-pointer"
          >
            <GrArticle className="text-xl" />
            <span className="mx-4 font-medium">My Articles</span>
          </p>
          <p
            onClick={() => handleLinkClick("/dashboardlayout/favorite-post")}
            className="flex items-center px-4 py-2 rounded-lg mt-3 hover:bg-gray-100 cursor-pointer"
          >
            <MdFavoriteBorder className="text-2xl" />
            <span className="mx-4 font-medium">Favorite Post</span>
          </p>
          <div className="w-full mt-4 border-b-2"></div>
          <p
            onClick={() => handleLinkClick("/dashboardlayout/my-profile")}
            className="flex items-center px-4 py-2 rounded-lg mt-3 hover:bg-gray-100 cursor-pointer"
          >
            <ImProfile className="text-xl" />
            <span className="mx-4 font-medium">My Profile</span>
          </p>
          <p
            onClick={() => handleLinkClick("/dashboardlayout/setting")}
            className="flex items-center px-4 py-2 rounded-lg mt-3 hover:bg-gray-100 cursor-pointer"
          >
            <GoGear className="text-xl" />
            <span className="mx-4 font-medium">Setting</span>
          </p>
          <p
            onClick={() => handleLinkClick("/dashboardlayout/support")}
            className="flex items-center px-4 py-2 rounded-lg mt-3 hover:bg-gray-100 cursor-pointer"
          >
            <BsChatLeftText className="text-xl" />
            <span className="mx-4 font-medium">Support</span>
          </p>
          <div className="w-full mt-4 border-b-2"></div>
          <div>
            <p
              onClick={handleLogout}
              className="cursor-pointer flex items-center px-4 py-2 rounded-lg mt-3 hover:bg-gray-100"
            >
              <FiLogOut className="text-xl text-red-600" />
              <span className="mx-4 text-red-600 font-medium">Log Out</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
  const handleLinkClick = (path) => {
    router.push(path);
  };

  return (
    <Navbar fluid rounded className="shadow-xl bg-[#ebe7e7]">
      <Navbar fluid rounded className="w-full max-w-7xl mx-auto bg-[#ebe7e7]">
        <Navbar.Brand>
          <div className="md:hidden">
            <DashboardNavPhone links={links}></DashboardNavPhone>
          </div>
          <Logo className={"text-2xl"} />
        </Navbar.Brand>
        <div className="flex md:order-2 z-50">
          {user ? (
            <>
              <Dropdown
                arrowIcon={false}
                inline
                label={<Avatar alt="User Pic" img={user?.photoURL} rounded />}
              >
                <Dropdown.Header>
                  <span className="block text-sm">{user?.displayName}</span>
                  <span className="block truncate text-sm font-medium">
                    {user?.email}
                  </span>
                </Dropdown.Header>
                <Dropdown.Item href="/dashboardlayout">Dashboard</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
              </Dropdown>
            </>
          ) : (
            <>
              <Link href={"/login"}>
                <Button color="dark" pill>
                  Get Start
                </Button>
              </Link>
            </>
          )}

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            className={`${location === "/" ? "text-[#1f2937] font-bold" : ""} hover:font-bold hover:!text-[#1f2937] `}
            href="/"
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            className={`${location === "/about" ? "text-[#1f2937] font-bold" : ""} hover:font-bold hover:!text-[#1f2937] `}
            href="/about"
          >
            About Us
          </Navbar.Link>
          <Navbar.Link
            className={`${location === "/community" ? "text-[#1f2937] font-bold" : ""} hover:font-bold hover:!text-[#1f2937] `}
            href="/community"
          >
            Community
          </Navbar.Link>
          <Navbar.Link
             className={`${location === "/write" ? "text-[#1f2937] font-bold" : ""} hover:font-bold hover:!text-[#1f2937] `}
            href="/write"
          >
            Write
          </Navbar.Link>
          <Navbar.Link
             className={`${location === "/contact" ? "text-[#1f2937] font-bold" : ""} hover:font-bold hover:!text-[#1f2937] `}
            href="/contact"
          >
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </Navbar>
  );
}

export default NavbarComponent;
