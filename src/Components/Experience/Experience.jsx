import React, { useState } from "react";

const Form = () => {
  const blankJob = {
    jobTitle: "",
    dateStarted: "",
    dateFinished: "",
    description: "",
  };

  const [jobState, setJobState] = useState([{ ...blankJob }]);

  const addJob = () => {
    setJobState([...jobState, { ...blankJob }]);
  };

  const handleJobChange = (e) => {
    const updatedJobs = [...jobState];
    updatedJobs[e.target.dataset.idx][e.target.className] = e.target.value;
    setJobState(updatedJobs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Jobs: ", jobState);
  };

  return (
    <form>
      <input type="button" value="Add New Job" onClick={addJob} />
      {jobState.map((val, idx) => {
        const jobTitleId = `jobTitle-${idx}`;
        const dateStartedId = `dateStarted-${idx}`;

        const dateFinishedId = `dateStarted-${idx}`;
        const descriptionId = `dateStarted-${idx}`;
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
              type="text"
              name={dateStartedId}
              data-idx={idx}
              id={dateStartedId}
              className="dateStarted"
              value={jobState[idx].dateStarted}
              onChange={handleJobChange}
            />
            <label htmlFor={dateFinishedId}>Date finished</label>
            <input
              type="date"
              name={dateFinishedId}
              data-idx={idx}
              id={dateFinishedId}
              className="dateFinished"
              value={jobState[idx].dateFinished}
              onChange={handleJobChange}
            />

            <label htmlFor={descriptionId}>Responsibiliries </label>
            <input
              type="textarea"
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
      <input type="submit" value="Submit" onClick={handleSubmit} />
    </form>
  );
};
export default Form;
