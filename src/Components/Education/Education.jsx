import { useLocalStorage } from "../../hooks/useLocalStorage";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const BLANK_EDUCATION = {
  id: null,
  degree: "",
  nameOfSchool: "",
  dateFinished: "",
};

export default function Education() {
  const [schools, setSchools, setFieldList] = useLocalStorage("education");

  const handleClickAdd = () => {
    Object.entries(BLANK_EDUCATION).forEach(([key, value]) => {
      setSchools(key, value, uuidv4());
    });
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    setSchools(name, value, schools[i].id);
  };

  const handleDelete = (id) => {
    const schoolArray = [...schools];
    const updatedSchoolArray = schoolArray.filter((school) => school.id !== id);
    setFieldList(updatedSchoolArray);
    localStorage.setItem("school", JSON.stringify(updatedSchoolArray));
  };
  return (
    <div className="Education">
      <h2>Education</h2>
      {schools.map((val, i) => (
        <div key={val.id}>
          <h3>School {i + 1}</h3>

          <form className="form">
            <label htmlFor="degree">Degree</label>
            <input
              type="text"
              value={val.degree}
              name="degree"
              onChange={(e) => handleChange(e, i)}
            />

            <label htmlFor="school">Name of School</label>
            <input
              type="text"
              value={val.nameOfSchool}
              name="school"
              onChange={(e) => handleChange(e, i)}
            />

            <label htmlFor="dateFinished">Date finished</label>
            <input
              type="date"
              value={val.dateFinished}
              name="dateFinished"
              onChange={(e) => handleChange(e, i)}
            />
            <button onClick={() => handleDelete(val.id)}>Delete</button>
          </form>
        </div>
      ))}
      <button onClick={handleClickAdd}>Add</button>
    </div>
  );
}
