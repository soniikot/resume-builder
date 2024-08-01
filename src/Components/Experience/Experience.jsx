import { useLocalStorage } from "../../hooks/useLocalStorage";

const JOB_EXPERIENCE = [
  "jobTitle",
  "dateStarted",
  "dateFinished",
  "description",
];
export default function Experience() {
  const [values, setValues] = useLocalStorage(JOB_EXPERIENCE);

  const { jobTitle, dateStarted, dateFinished, description } = values;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues(name, value);
  };

  return (
    <div id="2">
      <h2>Experience</h2>
      <form className="form">
        <label htmlFor="jobTitle">Job Title</label>
        <input
          type="text"
          name="jobTitle"
          value={jobTitle}
          onChange={handleChange}
        />

        <label htmlFor="dateStarted">Date started</label>
        <input
          type="date"
          name="dateStarted"
          value={dateStarted}
          onChange={handleChange}
        />

        <label htmlFor="dateFinished">Date finished</label>
        <input
          type="date"
          name="dateFinished"
          value={dateFinished}
          onChange={handleChange}
        />

        <label htmlFor="description">Responsibiliries </label>
        <input
          type="textarea"
          name="description"
          value={description}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
