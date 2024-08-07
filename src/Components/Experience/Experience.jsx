import React from "react";
import "./Experience.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";
useLocalStorage;

const Experience = () => {
  const blankJob = {
    jobTitle: "",
    dateStarted: "",
    dateFinished: "",
    description: "",
  };

  const [jobState, setJobState] = useLocalStorage("jobs", ["..."]);

  /*
  {
    

  {/*
    jobs: [
      {
      id: "1",
      jobTitle: "",
      dateStarted: "",
      },
      {
      id: "2",
      jobTitle: "",
      dateStarted: "",
      },
    ]
  }*/

  const addJob = () => {
    const newJob = { ...blankJob, id: jobState.length + 1 };
    setJobState([...jobState, newJob]);
  };

  const handleJobChangeOld = (e) => {
    const updatedJobs = [...jobState];
    const idx = e.target.dataset.idx;
    updatedJobs[idx][e.target.className] = e.target.value;
    setJobState(updatedJobs);
  };

  const handleJobChange = (e) => {
    const idx = e.target.dataset.idx;

    setJobState(name, value, idx);
  };

  return (
    <form>
      {jobState.map((input, idx) => {
        return (
          <div key={index}>
            <label htmlFor>Job Title</label>
            <input
              type="text"
              name="jobTitle"
              className="jobTitle"
              value={input.name}
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
