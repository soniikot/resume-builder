import "./Resume.css";

export default function Resume({ onSetCurrentPage }) {
  const contact = JSON.parse(localStorage.getItem("contact"));
  const { firstName, lastName, email, phone, address, position } = contact[0];

  const job = JSON.parse(localStorage.getItem("jobs"));

  const schools = JSON.parse(localStorage.getItem("education"));

  const projects = JSON.parse(localStorage.getItem("projects"));

  const skills = JSON.parse(localStorage.getItem("skills"));
  const { technicalSkills, softSkills } = skills[0];

  const handleEdit = (page) => {
    onSetCurrentPage(page);
  };

  return (
    <>
      <button class="print-button" onClick={() => print()}>
        {" "}
        Print or Save as PDF
      </button>
      <div className="resume">
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

        <div className="skills">
          <div class="fields__list">
            <h4>Technical Skills:</h4> <p>{technicalSkills}</p>
            <h4>Soft Skills:</h4> <p>{softSkills}</p>
          </div>
          <div>
            <button className="edit-button" onClick={() => handleEdit(4)}>
              Edit
            </button>
          </div>
        </div>

        {job.length > 0 ? (
          <>
            <h2>Experience</h2>
            <div className="fields">
              <div className="fields__list">
                {job &&
                  job.map((job, idx) => (
                    <div key={idx}>
                      <h3>Job Title: {job.jobTitle}</h3>
                      <p>
                        {job.dateStarted} - {job.dateFinished}
                      </p>
                      <p>Description: {job.description}</p>
                    </div>
                  ))}
              </div>
              <div>
                <button className="edit-button" onClick={() => handleEdit(1)}>
                  Edit
                </button>
              </div>
            </div>
          </>
        ) : null}

        {schools.length > 0 ? (
          <>
            <h2>Education</h2>
            <div className="fields">
              <div className="fields__list">
                {schools &&
                  schools.map((school, idx) => (
                    <div key={idx}>
                      <h3>Degree: {school.degree}</h3>
                      <p>School Name: {school.school}</p>
                    </div>
                  ))}
              </div>
              <div className=" fields__button">
                <button className="edit-button" onClick={() => handleEdit(2)}>
                  Edit
                </button>
              </div>
            </div>
          </>
        ) : null}

        {projects.length > 0 ? (
          <>
            <h2>Projects</h2>

            <div className="fields fields--projects">
              <div className="fields__list">
                {projects &&
                  projects.map((project, idx) => (
                    <div key={idx}>
                      <h3>Title: {project.title}</h3>
                      <p>
                        Link: <a href={project.link}> {project.link}</a>
                      </p>
                      <p>
                        <b>Description:</b>
                        {project.description}
                      </p>
                    </div>
                  ))}
              </div>
              <div>
                <button className="edit-button" onClick={() => handleEdit(3)}>
                  Edit
                </button>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
