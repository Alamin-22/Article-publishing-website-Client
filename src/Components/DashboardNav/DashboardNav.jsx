'use client'

import useAuth from "@/Hooks/useAuth";
import { FaPerson } from "react-icons/fa6";
import { TbGraph } from "react-icons/tb";
import { TiChartPieOutline } from "react-icons/ti";
import { GrArticle } from "react-icons/gr";
import { GoGear } from "react-icons/go";
import { BsChatLeftText } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { ImProfile } from "react-icons/im";
import { MdFavoriteBorder } from "react-icons/md";
import { useRouter } from "next/navigation";
import DashboardNavPhone from "./DashboardNavPhone";

const DashboardNav = () => {
    const { user, logOut } = useAuth();
    const router = useRouter();
    const isAdmin = false;

    const handleLogout = () => {
        logOut()
            .then(() => {
                router.push('/');
            })
            .catch();
    };

    const handleLinkClick = (path) => {
        router.push(path);
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

    return (
        <>
            <div className=" hidden md:block">
                <aside className="flex flex-col w-64 h-screen px-4 py-2 overflow-y-auto   ">
                    <div className="flex flex-col items-center">
                        <div>
                            <div className="shadow-lg rounded-2xl dark:bg-gray-800 p-4">
                                <div className="flex-row gap-2 flex justify-center items-center">
                                    <div className="flex-shrink-0">
                                        {user?.photoURL ? (
                                            <img
                                                className="mx-auto object-cover rounded-full h-16 w-16 "
                                                src={user?.photoURL}
                                                alt={user?.displayName}
                                            />
                                        ) : (
                                            <img
                                                className="mx-auto object-cover rounded-full h-16 w-16 "
                                                src={"https://i.ibb.co/bFq9X83/user.png"}
                                                alt={user?.displayName}
                                            />
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-lg font-medium text-gray-600 dark:text-white">
                                            {user?.displayName}
                                        </span>
                                        <span className="text-xs text-gray-400">FullStack dev</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between flex-1 mt-6 ">
                        <nav>{links}</nav>
                    </div>
                </aside>
            </div>
            <div className="block lg:hidden fixed">
                {/* mobile Responsive */}
                
            </div>
        </>
    );
};

export default DashboardNav;
