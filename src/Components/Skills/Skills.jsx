export default function Skills() {
  return (
    <div>
      <h2>Skills</h2>
      <form className="form">
        <label htmlFor="technicalSkills">Technical skills</label>
        <input type="text" name="technicalSkills" />

        <label htmlFor="softSkills">Soft skills</label>
        <input type="text" name="softSkills" />
      </form>
    </div>
  );
}
