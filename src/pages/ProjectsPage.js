import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../projects-data.json";
 
import { useContext } from "react"; // <== ADD
import { ThemeContext } from "../context/theme.context"; // <== ADD
 
//  src/pages/ProjectsPage.js
// ... previous imports stay unchanged

function ProjectsPage() {
  const [projects, setProjects] = useState(projectsData);
  const { theme } = useContext(ThemeContext);  // <== UPDATE

  return (
    <div className={"ProjectsPage " + theme}>   {/* <== UPDATE  */}
      <h1>My Projects</h1>
      <div className="projects">
        {projects.map(p => (
          <ProjectCard key={p._id} project={p} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
