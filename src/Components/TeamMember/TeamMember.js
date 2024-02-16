import Member from "./Member.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";

const TeamMember = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <a className={Member.card1} id="shadow-xl" href="#">
        <figure className="flex justify-center  items-center mt-2">
          <img
            src="https://media.licdn.com/dms/image/C5622AQE-BpHGe_If-A/feedshare-shrink_800/0/1666095915290?e=2147483647&v=beta&t=7vaEXtzon2kscoyjqfs1pSGeYSkq1xDlZiC_PSKlMto"
            alt="Shoes"
            className="rounded-3xl h-48"
          />
        </figure>
        <div>
          <h1 className="text-center mt-4 text-2xl">Shahin Sadik</h1>
          <p className={Member.small}>
            Junior Web Developer. Currently studying Applied Physics from Rajshahi City College
          </p>
          <div className={Member.go_corner} href="#">
            <div className={Member.go_arrow}>→</div>
          </div>
          <div className="mt-4 flex justify-evenly">
            <FaLinkedin className="text-3xl text-blue-700"/>
            <FaGithub className="text-3xl"/>
            <FaEnvelopeCircleCheck className="text-3xl"/>
          </div>
        </div>
      </a>
      <a className={Member.card1} href="#">
        <figure className="flex justify-center  items-center mt-2">
          <img
            src="https://i.ibb.co/wd5H27r/my-pic.jpg"
            alt="Shoes"
            className="rounded-3xl h-48"
          />
        </figure>
        <div>
          <h1 className="text-center mt-4 text-2xl">Md. Al Amin Mollik</h1>
          <p className={Member.small}>
            MERN Stack Developer.Currently Studying CSE.
          </p>
          <div className={Member.go_corner} href="#">
            <div className={Member.go_arrow}>→</div>
          </div>
          <div className="mt-4 flex justify-evenly">
            <FaLinkedin className="text-3xl text-blue-700"/>
            <FaGithub className="text-3xl"/>
            <FaEnvelopeCircleCheck className="text-3xl"/>
          </div>
        </div>
      </a>
      <a className={Member.card1} href="#">
        <figure className="flex justify-center  items-center mt-2">
          <img
            src="https://i.ibb.co/6N79HnP/394559949-374692381622478-7628019852304827346-n.jpg
            "
            alt="Shoes"
            className="rounded-3xl h-48"
          />
        </figure>
        <div>
          <h1 className="text-center mt-4 text-2xl">Easin Arafat</h1>
          <p className={Member.small}>
            Junior Web Developer. Currently studying H.S.C form Science Group.
          </p>
          <div className={Member.go_corner} href="#">
            <div className={Member.go_arrow}>→</div>
          </div>
          <div className="mt-4 flex justify-evenly">
            <FaLinkedin className="text-3xl text-blue-700"/>
            <FaGithub className="text-3xl"/>
            <FaEnvelopeCircleCheck className="text-3xl"/>
          </div>
        </div>
      </a>
      <a className={Member.card1} href="#">
        <figure className="flex justify-center items-center mt-2">
          <img
            src="https://i.ibb.co/kMBW5Lr/Screenshot-2023-12-12-004das631.png"
            alt="Shoes"
            className="rounded-3xl h-48"
          />
        </figure>
        <div>
          <h1 className="text-center mt-4 text-xl">Tawhid Al Muhaimin Choudhury</h1>
          <p className={Member.small}>
            I am a passionate react developer, eager to  learn and grow
          </p>
          <div className={Member.go_corner} href="#">
            <div className={Member.go_arrow}>→</div>
          </div>
          <div className="mt-4 flex justify-evenly">
            <FaLinkedin className="text-3xl text-blue-700"/>
            <FaGithub className="text-3xl"/>
            <FaEnvelopeCircleCheck className="text-3xl"/>
          </div>
        </div>
      </a>
    </div>
  );
};

export default TeamMember;
