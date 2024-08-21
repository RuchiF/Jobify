import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

const Addjob = () => {
  const { showSidebar } = useGlobalContext();
  return (
    <section
      className={
        showSidebar ? "add-job update-add-job add-job2" : "add-job add-job2"
      }
    >
      <span>Add Job</span>
      <form action="" className="add-job-form update-addform">
        <div className="field">
          <label htmlFor="position">Position</label>
          <input type="text" id="position" />
        </div>
        <div className="field">
          <label htmlFor="company">Company</label>
          <input type="text" id="company" />
        </div>
        <div className="field">
          <label htmlFor="job-location">Job Location</label>
          <input type="text" id="job-location" value="Codeville" />
        </div>
        <div className="field">
          <label htmlFor="job-status">Job Status</label>
          <select name="" id="job-status">
            <option value="">pending</option>
            <option value="">interview</option>
            <option value="">declined</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="job-type">Job Type</label>
          <select name="" id="job-type">
            <option value="">full-time</option>
            <option value="">part-time</option>
            <option value="">internship</option>
          </select>
        </div>

        <button className="btn btn-thin add-submit">Submit</button>
      </form>
    </section>
  );
};

export default Addjob;
