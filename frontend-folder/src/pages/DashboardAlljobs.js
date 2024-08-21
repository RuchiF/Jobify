import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useGlobalContext } from "../context";
import Modal from "../components/Modal";
import Alljobs from "../components/Alljobs";
import Logo from "../components/Logo";
import JobList from "../components/JobList";
const DashboardAlljobs = () => {
  const { showSidebar } = useGlobalContext();
  useEffect(() => {
    console.log(window.innerWidth);
  });
  return (
    <section className="dashboard">
      <Navbar />
      <div
        className={showSidebar ? "dash-sidebar show-sidebar" : "dash - sidebar"}
        // className="dash-sidebar"
      >
        <Sidebar />
      </div>
      <Alljobs />
      <Modal />
    </section>
  );
};

export default DashboardAlljobs;
