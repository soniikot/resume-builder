export default function Resume({ setCurrentPage }) {
  const savedName = localStorage.getItem("name");
  const savedEmail = localStorage.getItem("email");

  const handleEdit = () => {
    console.log("Edit button clicked");
    setCurrentPage(0);
  };

  return (
    <div>
      <h2>Resume</h2> <button onClick={handleEdit}>edit</button>
      <h3>{savedName}</h3>
      <h3>{savedEmail}</h3>
    </div>
  );
}
