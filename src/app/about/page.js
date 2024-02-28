import Image from "next/image";
import about from "@/Asset/image/about.webp";
import goal from "@/Asset/image/goals.avif";
import Link from "next/link";
import AboutCount from "@/Components/AboutUs/AboutCount";
import TeamMember from "@/Components/AboutUs/TeamMember";
const page = () => {
  return (
    <div>
      <div className="flex  justify-center items-center h-28">
        <h2 className="text-3xl font-bold ">About Us</h2>
      </div>
      <div>
        <div className=" lg:mx-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-5">
          <div>
            <Image
              className="rounded-t-lg"
              src={about}
              width={500}
              height={500}
              placeholder="blur"
              alt=""
            />
          </div>

          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Unleash Your Creativity with Scriptly: Empowering Writers
                Worldwide
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              At Scriptly, we believe in the transformative power of words. Our
              platform is a haven for writers, creators, and storytellers of all
              kinds. We understand the importance of providing a space where
              imagination flourishes, ideas thrive, and narratives come to life.
            </p>
            <Link
              href="/termsAndCondition"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <AboutCount />
      </div>
      <div>
        <div className=" lg:mx-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-5">
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Our Goal
            </h5>

            <ul className="list-disc ml-5 space-y-3">
              <li>
                Engage writers globally through a dynamic and accessible
                platform.
              </li>
              <li>Foster a vibrant community for collaboration and support.</li>
              <li>Provide user-friendly navigation and intuitive tools.</li>
              <li>
                Inspire and educate writers with curated content and resources.
              </li>
              <li>
                Increase brand visibility and attract new users through
                professional website presentation.
              </li>
            </ul>
          </div>
          <div>
            <Image
              className="rounded-t-lg"
              src={goal}
              width={500}
              height={500}
              placeholder="blur"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <TeamMember />
      </div>
    </div>
  );
};

export default page;
