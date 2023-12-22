import { FaLightbulb } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-white border flex-row items-center border-b-gray-500 h-20 flex justify-between gap-8 px-24">
      <span className="text-xl italic">rohankulkarni.dev</span>
      <div className="flex flex-row">
        <ul className="flex flow-row gap-12 text-xl cursor-pointer ">
          <li className="hover:underline-offset-2 text-gray-400 hover:text-black hover: hover:underline">
            <a href="#about">About</a>
          </li>
          <li className="hover:underline-offset-2 text-gray-400 hover:text-black hover: hover:underline">
            <a href="#experience">Experience</a>
          </li>
          <li className="hover:underline-offset-2 text-gray-400 hover:text-black hover: hover:underline">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:underline-offset-2 text-gray-400 hover:text-black hover: hover:underline">
            <a href="#community">Community Contributions</a>
          </li>
          <li className="hover:underline-offset-2 text-gray-400 hover:text-black hover: hover:underline">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://blogs.rohankulkarni.dev"
            >
              Blogs
            </a>
          </li>
          {/* <li className="hover:underline-offset-2 text-gray-400 hover:text-black hover: hover:underline">
            Newsletter
          </li> */}
        </ul>
      </div>
      <div className="flex flex-row place-items-center gap-8">
        <button className="text-xl bg-purple-600 rounded-2xl p-3 text-white   font-bold">
          Hire Me !!
        </button>
        <button>
          <FaLightbulb className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Header;
