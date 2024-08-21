import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useGlobalContext } from "../context";
import Modal from "../components/Modal";
import Profile from "../components/Profile";
import Logo from "../components/Logo";
const DashboardAlljobs = () => {
  const { showSidebar } = useGlobalContext();

  return (
    <section className="dashboard">
      <Navbar />
      <div
        className={showSidebar ? "dash-sidebar show-sidebar" : "dash - sidebar"}
        // className="dash-sidebar"
      >
        <Sidebar />
      </div>
      <Profile />
      <Modal />
    </section>
  );
};

export default DashboardAlljobs;
