import useAuth from "@/Hooks/useAuth";
import Link from "next/link";
import { FaPerson } from "react-icons/fa6";
import { TbGraph } from "react-icons/tb";
import { TiChartPieOutline } from "react-icons/ti";
import { GrArticle } from "react-icons/gr";
import { GoGear } from "react-icons/go";
import { BsChatLeftText } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { ImProfile } from "react-icons/im";
import { useRouter } from "next/navigation";
import { MdFavoriteBorder } from "react-icons/md";

const DashboardNav = () => {

    const { user, logOut } = useAuth();
    console.log(user);

    const router = useRouter()
    const isAdmin = false;

    const handleLogout = () => {
        logOut()
            .then(() => {
                // for redirect to the home page after Successful logOut
                router.push('/');
            })
            .catch()
    }

    const links = (
        <> <div className="w-full mb-4 border-b-2"></div>
            <Link
                className={({ isActive }) =>
                    isActive
                        ? " bg-gray-200 text-red-500 font-bold"
                        : "hover:text-red-400 transition duration-300 delay-100"
                }
                href={"/dashboard"}
            >
                <p className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100">
                    <TbGraph className="text-2xl" />
                    <span className="mx-2 font-medium">Dashboard</span>
                </p>
            </Link>

            {
                isAdmin ?
                    <>
                        <div>
                            <Link
                                className={({ isActive }) =>
                                    isActive
                                        ? " bg-gray-200 text-red-500 font-bold"
                                        : "hover:text-red-400 transition duration-300 delay-100"
                                }
                                href={"admin-profile"}
                            >
                                <p className="flex items-center px-4 py-2 rounded-lg mt-3 hover:bg-gray-100">
                                    <FaPerson className="text-2xl" />
                                    <span className="mx-4 font-medium">Admin Profile</span>
                                </p>
                            </Link>
                        </div>
                    </>
                    :
                    <>
                        <div>

                            <Link
                                className={({ isActive }) =>
                                    isActive
                                        ? " bg-gray-200 text-red-500 font-bold"
                                        : "hover:text-red-400 transition duration-300 delay-100"
                                }
                                href={"/analytics"}
                            >
                                <p className="flex items-center px-4 py-2 rounded-lg mt-3 hover:bg-gray-100">
                                    <TiChartPieOutline className="text-2xl"></TiChartPieOutline>
                                    <span className="mx-2 font-medium">Analytics</span>
                                </p>
                            </Link>
                            <Link
                                className={({ isActive }) =>
                                    isActive
                                        ? " bg-gray-200 text-red-500 font-bold"
                                        : "hover:text-red-400 transition duration-300 delay-100"
                                }
                                href={"/dashboard/myarticle"}
                            >
                                <p className="flex items-center px-4 py-2 rounded-lg mt-3 hover:bg-gray-100">
                                    <GrArticle className="text-xl"></GrArticle>
                                    <span className="mx-4 font-medium">My Articles</span>
                                </p>
                            </Link>
                            <Link
                                className={({ isActive }) =>
                                    isActive
                                        ? " bg-gray-200 text-red-500 font-bold"
                                        : "hover:text-red-400 transition duration-300 delay-100"
                                }
                                href={"/contact-us"}
                            >
                                <p className="flex items-center px-4 py-2 rounded-lg mt-3 hover:bg-gray-100">
                                    <MdFavoriteBorder className="text-2xl"/>
                                    <span className="mx-4 font-medium">Favorite Post</span>
                                </p>
                            </Link>
                            
                            <div className="w-full mt-4 border-b-2"></div>
                            <Link
                                className={({ isActive }) =>
                                    isActive
                                        ? " bg-gray-200 text-red-500 font-bold"
                                        : "hover:text-red-400 transition duration-300 delay-100"
                                }
                                href={"/customer-reviews"}
                            >
                                <p className="flex items-center px-4 py-2 rounded-lg mt-3 hover:bg-gray-100">
                                    <ImProfile className="text-xl" />
                                    <span className="mx-4 font-medium">My Profile</span>
                                </p>
                            </Link>

                            <Link
                                className={({ isActive }) =>
                                    isActive
                                        ? " bg-gray-200 text-red-500 font-bold"
                                        : "hover:text-red-400 transition duration-300 delay-100"
                                }
                                href={"/customer-reviews"}
                            >
                                <p className="flex items-center px-4 py-2 rounded-lg mt-3 hover:bg-gray-100">
                                    <GoGear className="text-xl" />
                                    <span className="mx-4 font-medium">Setting</span>
                                </p>
                            </Link>
                            <Link
                                className={({ isActive }) =>
                                    isActive
                                        ? " bg-gray-200 text-red-500 font-bold"
                                        : "hover:text-red-400 transition duration-300 delay-100"
                                }
                                href={"/support"}
                            >
                                <p className="flex items-center px-4 py-2 rounded-lg mt-3 hover:bg-gray-100">
                                    <BsChatLeftText className="text-xl" />
                                    <span className="mx-4 font-medium">Support</span>
                                </p>
                            </Link>
                            <div className="w-full mt-4 border-b-2"></div>
                            <div >
                                <p onClick={handleLogout} className="cursor-pointer flex items-center px-4 py-2 rounded-lg mt-3 hover:bg-gray-100">
                                    <FiLogOut className="text-xl text-red-600" />
                                    <span className="mx-4 text-red-600 font-medium">Log Out</span>
                                </p>
                            </div>

                        </div>
                    </>
            }

        </>
    );

    return (
        <>
            <div className=" hidden md:block">
                <aside className="flex flex-col w-64 h-screen px-4 py-2 overflow-y-auto   ">

                    <div className="flex flex-col items-center">
                        <div>
                            <div class="shadow-lg rounded-2xl  dark:bg-gray-800 p-4">
                                <div class="flex-row gap-2 flex justify-center items-center">
                                    <div class="flex-shrink-0">
                                        {
                                            user?.photoURL ?
                                                <>
                                                    <img
                                                        className="mx-auto object-cover rounded-full h-16 w-16 "
                                                        src={user?.photoURL}
                                                        alt={user?.displayName}
                                                    />
                                                </>
                                                :
                                                <>
                                                    <img
                                                        className="mx-auto object-cover rounded-full h-16 w-16 "
                                                        src={"https://i.ibb.co/bFq9X83/user.png"}
                                                        alt={user?.displayName}
                                                    />
                                                </>
                                        }
                                    </div>
                                    <div class=" flex flex-col">
                                        <span class="text-lg font-medium text-gray-600 dark:text-white">
                                            {user?.displayName}
                                        </span>
                                        <span class="text-xs text-gray-400">
                                            FullStack dev
                                        </span>
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
                {/* moobile Responsive */}
            </div>
        </>
    );
};

export default DashboardNav;