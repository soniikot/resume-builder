import { useLocalStorage } from "../../hooks/useLocalStorage";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const BLANK_PROJECT = {
  id: null,
  title: "",
  link: "",
  description: "",
};

export default function Projects() {
  const [projects, setProjects, setFieldList] = useLocalStorage("projects");

  const handleClickAdd = () => {
    Object.entries(BLANK_PROJECT).forEach(([key, value]) => {
      setProjects(key, value, uuidv4());
    });
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    setProjects(name, value, projects[i].id);
  };

  const handleDelete = (id) => {
    const projectArray = [...projects];
    const updatedProjectArray = projectArray.filter(
      (project) => project.id !== id
    );
    setFieldList(updatedProjectArray);
    localStorage.setItem("projects", JSON.stringify(updatedProjectArray));
  };
  return (
    <div className="Projects">
      <h2>Projects</h2>
      {projects.map((val, i) => (
        <div key={val.id}>
          <h3>Projects {i + 1}</h3>

          <form className="form">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={val.title}
              name="title"
              onChange={(e) => handleChange(e, i)}
            />

            <label htmlFor="school">Link</label>
            <input
              type="url"
              value={val.link}
              name="link"
              onChange={(e) => handleChange(e, i)}
            />

            <label htmlFor="description">Description</label>
            <input
              type="textarea"
              value={val.description}
              name="description"
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
