import React from "react";
import Logo from "./Logo";
import { IoMoon } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useGlobalContext } from "../context";
const Navbar = () => {
  const { setShowSidebar, showSidebar, setShowModal, showModal } =
    useGlobalContext();
  const Modal_Sidebar = () => {
    let width = window.innerWidth;
    if (width <= 1091) {
      setShowModal(!showModal);
      console.log("modal toggled");
    } else {
      setShowSidebar(!showSidebar);
      console.log("sidebar toggled");
    }
  };
  return (
    <nav className={showSidebar ? "navbar" : "navbar update-navbar"}>
      <svg
        onClick={Modal_Sidebar}
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 448 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.83 352h262.34A12.82 12.82 0 0 0 288 339.17v-38.34A12.82 12.82 0 0 0 275.17 288H12.83A12.82 12.82 0 0 0 0 300.83v38.34A12.82 12.82 0 0 0 12.83 352zm0-256h262.34A12.82 12.82 0 0 0 288 83.17V44.83A12.82 12.82 0 0 0 275.17 32H12.83A12.82 12.82 0 0 0 0 44.83v38.34A12.82 12.82 0 0 0 12.83 96zM432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path>
      </svg>
      <div className="nav-logo">
        <Logo />
      </div>

      <span className="nav-dash">Dashboard</span>
      <div className="user">
        <IoMoon color={"black"} />
        <button className="btn btn-thin">
          <FaUserCircle color={"white"} />
          Zippy
          <MdOutlineArrowDropDown color={"white"} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
