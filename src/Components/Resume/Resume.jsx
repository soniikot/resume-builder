export default function Resume({ setCurrentPage }) {
  const savedfirstName = localStorage.getItem("firstName");
  const savedEmail = localStorage.getItem("email");

  const handleEdit = () => {
    setCurrentPage(0);
  };

  return (
    <div>
      <h2>Resume</h2> <button onClick={handleEdit}>edit</button>
      <h3>{savedfirstName}</h3>
      <h3>{savedEmail}</h3>
    </div>
  );
}
