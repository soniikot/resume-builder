import React from "react";
import "./Experience.css";
import { useLocalStorage2 } from "./useLocalStorage2";

const Form = () => {
  const blankJob = {
    jobTitle: "",
    dateStarted: "",
    dateFinished: "",
    description: "",
  };

  const [jobState, setJobState] = useLocalStorage2("jobs", [{ ...blankJob }]);

  const addJob = () => {
    setJobState([...jobState, { ...blankJob }]);
  };

  const handleJobChange = (e) => {
    const updatedJobs = [...jobState];
    const idx = e.target.dataset.idx;
    updatedJobs[idx][e.target.className] = e.target.value;
    setJobState(updatedJobs);
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

export default Form;
