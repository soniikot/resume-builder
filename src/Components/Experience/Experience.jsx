import "./Experience.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const BLANK_JOB = {
  id: null,
  jobTitle: "",
  dateStarted: "",
  dateFinished: "",
  description: "",
};

function Experience() {
  const [jobs, setJobs, setFieldList] = useLocalStorage("jobs");

  const handleClickAdd = () => {
    Object.entries(BLANK_JOB).forEach(([key, value]) => {
      setJobs(key, value, uuidv4());
    });
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    setJobs(name, value, jobs[i].id);
  };

  const handleDelete = (id) => {
    const jobsArray = [...jobs];
    const updatedJobsArray = jobsArray.filter((job) => job.id !== id);
    console.log(updatedJobsArray);
    setFieldList(updatedJobsArray);
    localStorage.setItem("jobs", JSON.stringify(updatedJobsArray));
  };

  return (
    <div className="experience">
      {jobs.map((val, i) => (
        <div key={val.id}>
          <h2>Job {i + 1}</h2>
          <form className="form">
            <label htmlFor="JobTitle">Job Title</label>
            <input
              name="jobTitle"
              value={val.jobTitle}
              onChange={(e) => handleChange(e, i)}
            />
            <label htmlFor="dateStarted">Date Started</label>
            <input
              name="dateStarted"
              type="date"
              value={val.dateStarted}
              onChange={(e) => handleChange(e, i)}
            />
            <label htmlFor="dateFinished">Date Finished</label>
            <input
              name="dateFinished"
              type="date"
              value={val.dateFinished}
              onChange={(e) => handleChange(e, i)}
            />
            <label htmlFor="description">Description</label>
            <input
              type="textarea"
              name="description"
              value={val.description}
              onChange={(e) => handleChange(e, i)}
            />
            <button onClick={() => handleDelete(val.id)}>Delete</button>
          </form>
        </div>
      ))}
      <button onClick={handleClickAdd}>Add</button>
    </div>
  );
}

export default Experience;
