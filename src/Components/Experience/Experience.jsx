import "./Experience.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import React from "react";

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
      setJobs(key, value, jobs.length);
    });
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    setJobs(name, value, i);
  };

  const handleDelete = (i) => {
    const list = [...jobs];
    list.splice(i);
    setFieldList(list);
  };

  return (
    <div className="experience">
      {jobs.map((val, i) => (
        <div>
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
            <button onClick={() => handleDelete(i)}>Delete</button>
          </form>
        </div>
      ))}
      <button onClick={handleClickAdd}>Add</button>
    </div>
  );
}

export default Experience;
