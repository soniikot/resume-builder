import "./Resume.css";

export default function Resume({ setCurrentPage }) {
  const contact = JSON.parse(localStorage.getItem("contact"));

  const { firstName, lastName, email, phone, address } = contact;
  console.log(firstName);
  const job = JSON.parse(localStorage.getItem("jobs"));

  const handleEdit = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <h2>Resume</h2>
      <div className="contact">
        <div className="fields">
          <h3>First Name: {firstName}</h3>
          <h3>LastName: {lastName}</h3>
          <h3>Email: {email}</h3>
          <h3> Phone: {phone}</h3>
          <h3>Address: {address}</h3>
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
