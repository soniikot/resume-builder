import "./Resume.css";

export default function Resume({ setCurrentPage }) {
  const contact = JSON.parse(localStorage.getItem("contact"));
  const { firstName, lastName, email, phone, address, position } = contact[0];

  const job = JSON.parse(localStorage.getItem("jobs"));

  const schools = JSON.parse(localStorage.getItem("education"));

  const projects = JSON.parse(localStorage.getItem("projects"));

  const skills = JSON.parse(localStorage.getItem("skills"));
  const { technicalSkills, softSkills } = skills[0];

  const handleEdit = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="resume">
      <button onClick={print()}> Print or Save as PDF</button>
      <h1>{position}</h1>
      <h2>
        {firstName} {lastName}
      </h2>

      <div className="general-fields">
        <h3>Email: {email}</h3>
        <h3>Phone: {phone}</h3>
        <h3>Address: {address}</h3>

        <button className="edit-button" onClick={() => handleEdit(0)}>
          Edit
        </button>
      </div>
      <h2>Experience</h2>
      <div className="multifields">
        {job &&
          job.map((job, idx) => (
            <div className="fields" key={idx}>
              <h3>Job Title: {job.jobTitle}</h3>
              <p>
                {job.dateStarted} - {job.dateFinished}
              </p>
              <p>Description: {job.description}</p>
            </div>
          ))}
        <button className="edit-button" onClick={() => handleEdit(1)}>
          Edit
        </button>
      </div>

      <h2>Education</h2>
      <div className="multifields">
        {schools &&
          schools.map((school, idx) => (
            <div className="fields" key={idx}>
              <h3>Degree: {school.degree}</h3>
              <p>School Name: {school.school}</p>
              <p>Date Finished: {school.dateFinished}</p>
            </div>
          ))}
        <button className="edit-button" onClick={() => handleEdit(2)}>
          Edit
        </button>
      </div>

      <h2>Projects</h2>
      <div className="multifields">
        {projects &&
          projects.map((project, idx) => (
            <div className="fields" key={idx}>
              <h3>Title: {project.title}</h3>
              <p>
                Link: <a href={project.link}> {project.link}</a>
              </p>
              <p>
                {" "}
                <b>Description:</b>
                {project.description}
              </p>
            </div>
          ))}
        <button className="edit-button" onClick={() => handleEdit(3)}>
          Edit
        </button>
      </div>

      <div className="general-fields">
        <h4>Technical Skills:</h4> <p>{technicalSkills}</p>
        <h4>Soft Skills:</h4> <p>{softSkills}</p>
      </div>

      <button className="edit-button" onClick={() => handleEdit(4)}>
        edit
      </button>
    </div>
  );
}
