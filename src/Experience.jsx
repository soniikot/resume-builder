import "./Contact_data.css";

export default function Experience() {
  return (
    <div id="2">
      <h2>Experience</h2>
      <form className="form">
        <label htmlFor="JobTitle">Job Title</label>
        <input type="text" name="jobTitle" />

        <label htmlFor="dateStarted">Date started</label>
        <input type="date" name="dateStarted" />

        <label htmlFor="dateFinished">Date finished</label>
        <input type="date" name="dateFinished" />

        <label htmlFor="describtion">Responsibiliries </label>
        <input type="textarea" name="describtion" />
      </form>
    </div>
  );
}
