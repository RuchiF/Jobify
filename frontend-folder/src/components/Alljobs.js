import React from "react";
import { useGlobalContext } from "../context";
import JobList from "./JobList";
const Alljobs = () => {
  const { showSidebar } = useGlobalContext();
  return (
    <section className={showSidebar ? "add-job update-add-job" : "add-job"}>
      <section className="search-job">
        <span>Search Form</span>
        <form action="" className="add-job-form update-addform">
          <div className="field">
            <label htmlFor="search">Search</label>
            <input type="text" id="search" />
          </div>
          <div className="field">
            <label htmlFor="job-status">Job Status</label>
            <select name="" id="job-status">
              <option value="">all</option>
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
          <div className="field">
            <label htmlFor="sort">Sort</label>
            <select name="" id="sort">
              <option value="">newest</option>
              <option value="">oldest</option>
              <option value="">a-z</option>
              <option value="">z-a</option>
            </select>
          </div>

          <button className="btn btn-thin add-submit">
            Reset Search Values
          </button>
        </form>
      </section>
      <section>
        <h1 className="numjobs">99 Jobs Found</h1>
        <JobList />
      </section>
    </section>
  );
};

export default Alljobs;
