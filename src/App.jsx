import { useState } from "react";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Resume from "./Components/Resume/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [hasError, setHasError] = useState(false);

  const pages = [
    { component: <Contact onError={setHasError} />, id: 1 }, // props names start with onSmth
    { component: <Experience />, id: 2 },
    { component: <Education />, id: 3 },
    { component: <Projects />, id: 4 },
    { component: <Skills />, id: 5 },
    { component: <Resume onSetCurrentPage={setCurrentPage} />, id: 6 },
  ];

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      {currentPage < 5 && <h1>Job Application</h1>}
      {pages[currentPage].component}
      <nav>
        {currentPage > 0 && <button onClick={handlePrevious}>Previous</button>}
        {currentPage < pages.length - 1 && (
          <button onClick={handleNext} disabled={hasError}>
            Next
          </button>
        )}
      </nav>
    </>
  );
}

export default App;
