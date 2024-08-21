import React from "react";
import SingleJob from "./SingleJob";
import data from "../mock-data";
const JobList = () => {
  console.log(data);
  return (
    <div className="job-container">
      {data.map((item, index) => (
        <SingleJob key={index} data={item} />
      ))}
    </div>
  );
};

export default JobList;
