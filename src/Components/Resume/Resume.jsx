import "./Resume.css";

export default function Resume({ setCurrentPage }) {
  const savedFirstName = localStorage.getItem("firstName");
  const savedLastName = localStorage.getItem("lastName");
  const savedEmail = localStorage.getItem("email");
  const savedPhone = localStorage.getItem("phone");
  const savedAddress = localStorage.getItem("address");

  const handleEdit = () => {
    setCurrentPage(0);
  };

  return (
    <>
      <h2>Resume</h2>
      <div className="contact">
        <div class="fields">
          <h3>First Name: {savedFirstName}</h3>
          <h3>LastName: {savedLastName}</h3>
          <h3>Email: {savedEmail}</h3>
          <h3> Phone: {savedPhone}</h3>
          <h3>Address: {savedAddress}</h3>
        </div>
        <button className="edit-button" onClick={handleEdit}>
          edit
        </button>
      </div>
    </>
  );
}
