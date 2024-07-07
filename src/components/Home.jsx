import heroImage from "../assets/heroImage.jpg";
import { RiArrowRightSLine } from "react-icons/ri";

import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className=" flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl text-white">
            I&apos;m a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md"></p>
          <div>
            <Link
              to="Projects"
              duration={500}
              smooth
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className=" group-hover:rotate-90 duration-300 ">
                <RiArrowRightSLine className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={heroimage}
            alt="My Profile"
            className="rounded-2xl w-2/3 mx-auto md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
