const Header = () => {
  return (
    <div className="bg-white border flex-row items-center border-b-gray-500 h-16 flex justify-between gap-8 px-24">
      <span className="text-xl italic">rohankulkarni.dev</span>
      <div className="flex flex-row">
        <ul className="flex flow-row gap-12 text-xl cursor-pointer ">
          <li className="hover:underline-offset-2 text-gray-400 hover:text-black hover: hover:underline">About</li>
          <li className="hover:underline-offset-2 text-gray-400 hover:text-black hover: hover:underline">Experience</li>
          <li className="hover:underline-offset-2 text-gray-400 hover:text-black hover: hover:underline">Projects</li>
          <li className="hover:underline-offset-2 text-gray-400 hover:text-black hover: hover:underline">Communties</li>
          <li className="hover:underline-offset-2 text-gray-400 hover:text-black hover: hover:underline">Blogs</li>
        </ul>
      </div>
      <div>
        <p className="text-2xl">Hire Me !!</p>
      </div>
    </div>
  );
};

export default Header;
