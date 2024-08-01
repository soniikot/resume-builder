import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./Experience.css";
import { useState } from "react";

const JOB_EXPERIENCE = [
  "jobTitle",
  "dateStarted",
  "dateFinished",
  "description",
];
export default function Experience() {
  const [values, setValues] = useLocalStorage(JOB_EXPERIENCE);

  const { jobTitle, dateStarted, dateFinished, description } = values;

  const handleFormChange = (index, event) => {
    let data = [...values];
    data[index][event.target.name] = event.target.value;
    setValues(data);
  };

  const addJobExperience = () => {
    let newJob = { jobTitle: "", dateStarted: "" };
    setValues([...values, newJob]);
  };

  return (
    <div id="2">
      <h2>Experience</h2>
      {values.map((index) => {
        return (
          <>
            <h3>Job</h3>
            <form className="form" key={index}>
              <label htmlFor="jobTitle`${">Job Title</label>
              <input
                type="text"
                name="jobTitle"
                value={jobTitle}
                onChange={(event) => handleFormChange(index, event)}
              />

              <label htmlFor="dateStarted">Date started</label>
              <input
                type="date"
                name="dateStarted"
                value={dateStarted}
                onChange={(event) => handleFormChange(index, event)}
              />

              <label htmlFor="dateFinished">Date finished</label>
              <input
                type="date"
                name="dateFinished"
                value={dateFinished}
                onChange={(event) => handleFormChange(index, event)}
              />

              <label htmlFor="description">Responsibilities </label>
              <input
                type="textarea"
                name="description"
                value={description}
                onChange={(event) => handleFormChange(index, event)}
              />
            </form>
          </>
        );
      })}
      <button className="addButton" onClick={addJobExperience}>
        Add another Job
      </button>
    </div>
  );
}
