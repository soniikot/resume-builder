import "./Resume.css";

export default function Resume({ setCurrentPage }) {
  const savedFirstName = localStorage.getItem("firstName");
  const savedLastName = localStorage.getItem("lastName");
  const savedEmail = localStorage.getItem("email");
  const savedPhone = localStorage.getItem("phone");
  const savedAddress = localStorage.getItem("address");

  const savedJobTitle = localStorage.getItem("jobTitle");
  const savedDateStarted = localStorage.getItem("dateStarted");
  const savedDateFinished = localStorage.getItem("DateFinished");
  const savedDescribtion = localStorage.getItem("description");

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

      <div className="experience">
        <div className="fields">
          <h3>Job Title: {savedJobTitle}</h3>
          <h3>Date Started: {savedDateStarted}</h3>
          <h3>Date Finished: {savedDateFinished}</h3>

          <h3>Describtion: {savedDescribtion}</h3>
        </div>
        <button className="edit-button" onClick={() => handleEdit(1)}>
          edit
        </button>
      </div>
    </>
  );
}
