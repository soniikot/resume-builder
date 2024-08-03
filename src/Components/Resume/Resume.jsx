import "./Resume.css";

export default function Resume({ setCurrentPage }) {
  const savedFirstName = localStorage.getItem("firstName");
  const savedLastName = localStorage.getItem("lastName");
  const savedEmail = localStorage.getItem("email");
  const savedPhone = localStorage.getItem("phone");
  const savedAddress = localStorage.getItem("address");

  const job = JSON.parse(localStorage.getItem("jobs"));
  console.log(job);
  const handleEdit = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <h2>Resume</h2>
      <div className="contact">
        <div className="fields">
          <h3>First Name: {savedFirstName}</h3>
          <h3>LastName: {savedLastName}</h3>
          <h3>Email: {savedEmail}</h3>
          <h3> Phone: {savedPhone}</h3>
          <h3>Address: {savedAddress}</h3>
        </div>
        <button className="edit-button" onClick={() => handleEdit(0)}>
          edit
        </button>
      </div>

      <div className="contact">
        {job &&
          job.map((job, idx) => (
            <div className="fields" key={idx}>
              <h3>Job Title: {job.jobTitle}</h3>
              <h3>Date Started: {job.dateStarted}</h3>
              <h3>Date Finished: {job.dateFinished}</h3>
              <h3>Description: {job.description}</h3>
            </div>
          ))}{" "}
        <button className="edit-button" onClick={() => handleEdit(1)}>
          Edit
        </button>
      </div>
    </>
  );
}
