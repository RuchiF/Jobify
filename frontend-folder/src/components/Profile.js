import React from "react";
import { useGlobalContext } from "../context";
const Profile = () => {
  const { showSidebar } = useGlobalContext();
  return (
    <section
      className={
        showSidebar ? "add-job update-add-job add-job2" : "add-job add-job2"
      }
    >
      <span>Profile</span>
      <form action="" className="add-job-form update-addform">
        <div className="field">
          <label htmlFor="user-img">Select An Image File (Max 0.5 MB)</label>
          <input type="file" id="user-img" />
        </div>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value="Zippy" />
        </div>
        <div className="field">
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" value="shakeAndBake" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" value="test@test.com" />
        </div>

        <div className="field">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" value="Codeville" />
        </div>

        <button className="btn btn-thin add-submit">Submit</button>
      </form>
    </section>
  );
};

export default Profile;
