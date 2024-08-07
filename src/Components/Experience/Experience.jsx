import "./Experience.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";

/*const Experience = () => {
  const blankJob = {
    id: null,
    jobTitle: "",
    dateStarted: "",
    dateFinished: "",
    description: "",
  };

  //const [jobState, setJobState] = useLocalStorage("jobs", []);

  const addJob = () => {
    const newJob = { ...blankJob, id: jobState.length };
    setJobState([...jobState, newJob]);
  };

  const handleJobChangeOld = (e) => {
    const updatedJobs = [...jobState];
    const idx = e.target.dataset.idx;
    updatedJobs[idx][e.target.className] = e.target.value;
    setJobState(updatedJobs);
  };

  const handleJobChange = (e, name, value) => {
    const idx = e.target.dataset.idx;

    setJobState(name, value, idx);
  };

  return (
    <form>
      {jobState.map((val, idx) => {
        const jobTitleId = `jobTitle-${idx}`;
        const dateStartedId = `dateStarted-${idx}`;
        const dateFinishedId = `dateFinished-${idx}`;
        const descriptionId = `description-${idx}`;
        return (
          <div key={`job-${idx}`}>
            <label htmlFor={jobTitleId}>{`Job #${idx + 1}`}</label>
            <input
              type="text"
              name={jobTitleId}
              data-idx={idx}
              id={jobTitleId}
              className="jobTitle"
              value={jobState[idx].jobTitle}
              onChange={handleJobChange}
            />
            <label htmlFor={dateStartedId}>Date Started</label>
            <input
              type="date"
              name={dateStartedId}
              data-idx={idx}
              id={dateStartedId}
              className="dateStarted"
              value={jobState[idx].dateStarted}
              onChange={handleJobChange}
            />
            <label htmlFor={dateFinishedId}>Date Finished</label>
            <input
              type="date"
              name={dateFinishedId}
              data-idx={idx}
              id={dateFinishedId}
              className="dateFinished"
              value={jobState[idx].dateFinished}
              onChange={handleJobChange}
            />
            <label htmlFor={descriptionId}>Responsibilities</label>
            <textarea
              name={descriptionId}
              data-idx={idx}
              id={descriptionId}
              className="description"
              value={jobState[idx].description}
              onChange={handleJobChange}
            />
          </div>
        );
      })}
      <input type="button" value="Add New Job" onClick={addJob} />
    </form>
  );
};

export default Experience;
*/

import React from "react";

function Experience() {
  const blankJob = {
    id: null,
    jobTitle: "",
    dateStarted: "",
  };

  const [jobs, setJob] = useLocalStorage("jobs");

  const handleClick = () => {
    setJob("id", jobs.length, jobs.length);
    setJob("jobTitle", "", jobs.length);
    setJob("dateStarted", "", jobs.length);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    setJob(name, value, i);
  };

  const handleDelete = (i) => {
    const newJobs = [...jobs];
    newJobs.splice(i, 1);
    setJob("id", newJobs);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Add</button>
      {jobs.map((val, i) => (
        <div>
          <input
            name="jobTitle"
            value={val.jobTitle}
            onChange={(e) => handleChange(e, i)}
          />
          <input
            name="dateStarted"
            value={val.dateStarted}
            onChange={(e) => handleChange(e, i)}
          />
          <button onClick={() => handleDelete(i)}>Delete</button>
        </div>
      ))}
      <p>{JSON.stringify(jobs)}</p>
    </div>
  );
}

export default Experience;
