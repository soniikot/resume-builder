import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function Skills() {
  const [values, setValues] = useLocalStorage("skills");

  const skills = values.find((item) => item.id === "skills") || {};
  const { technicalSkills, softSkills } = skills;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues(name, value, "skills");
  };

  return (
    <div>
      <h2>Skills</h2>
      <form className="form">
        <label htmlFor="technicalSkills">Technical skills</label>
        <input
          type="textarea"
          name="technicalSkills"
          value={technicalSkills}
          onChange={handleChange}
        />

        <label htmlFor="softSkills">Soft skills</label>
        <input
          type="textarea"
          name="softSkills"
          value={softSkills}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
