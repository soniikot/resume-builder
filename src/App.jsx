import { useState } from "react";
import "./App.css";
import Contact from "./Contact";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Resume from "./Resume";

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    { component: <Contact />, id: 1 },
    { component: <Experience />, id: 2 },
    { component: <Education />, id: 3 },
    { component: <Projects />, id: 4 },
    { component: <Skills />, id: 5 },
    { component: <Resume setCurrentPage={setCurrentPage} />, id: 6 },
  ];
  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      <h1>Job Application</h1>
      {pages[currentPage].component}
      <nav>
        {currentPage > 0 && <button onClick={handlePrevious}>Previous</button>}
        {currentPage < pages.length - 1 && (
          <button onClick={handleNext}>Next</button>
        )}
      </nav>
    </>
  );
}

export default App;
