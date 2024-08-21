import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useGlobalContext } from "../context";
import Addjob from "../components/Addjob";
import Modal from "../components/Modal";
const Dashboard = () => {
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
      <Addjob />
      <Modal />
    </section>
  );
};

export default Dashboard;
