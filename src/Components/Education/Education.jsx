export default function Education() {
  return (
    <div>
      <h2>Education</h2>

      <form className="form">
        <label htmlFor="degree">Degree</label>
        <input type="text" name="degree" />

        <label htmlFor="school">Name of School</label>
        <input type="text" name="school" />

        <label htmlFor="dateFinished">Date finished</label>
        <input type="date" name="dateFinished" />
      </form>
    </div>
  );
}
