import AboutContent from "../../assets/about/AboutContent";
import Nav from "../../assets/nav/nav";
import "./projects.css";
import ProjectTree from "../../assets/projectTree/projectTree";
function Projects(){
  return(
    <div>
      <Nav />
      <AboutContent title="Projects"></AboutContent>
      <div>
        {projectData.map((yearData, index) => (
          <ProjectTree 
            key={index} 
            year={yearData.year} 
            projects={yearData.projects} 
          />
        ))}
      </div>
    </div>
  );
}

const projectData = [
  {
    year: "2025",
    projects: [
      {
        title: "Project 1",
        desc: "This is a description of project 1"
      },
      {
        title: "Project 2",
        desc: "This is a description of project 2"
      }
    ]
  },
  {
    year: "2024",
    projects: [
      {
        title: "Project 3",
        desc: "This is a description of project 3"
      },
      {
        title: "Project 4",
        desc: "This is a description of project 4"
      }
    ]
  }
];
export default Projects;