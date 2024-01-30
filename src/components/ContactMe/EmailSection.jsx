import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const ContactMe = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-[#00FF00] mt-48 text-2xl md:text-3xl">
        Contact Me
      </h1>

      <div className="flex w-full">
        <div className=" h-screen text-center mt-12 ">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered input-sm w-full max-w-xs md:max-w-md md:input-md my-4"
          />
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered input-sm w-full max-w-xs mx-4 md:max-w-md md:input-md "
          />
          <textarea
            placeholder="Message"
            className="textarea textarea-bordered textarea-xs w-full max-w-xs h-[80px] my-4 md:max-w-md md:textarea-md md:h-[120px]"
          ></textarea>
          <div>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-3xl ">
              Send
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#00FF00"
                className="w-6 h-6 hover:text-black"
              >
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
