import { IoInformationCircleSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="h-[55%] flex justify-between items-center px-10">
      <h1 className="text-white uppercase font-bold text-xl">CV Builder</h1>
      <IoInformationCircleSharp className="text-white text-3xl"/>
    </nav>
  );
};

export default Navbar;
