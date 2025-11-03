import AboutContent from "../../assets/about/AboutContent";
import Nav from "../../assets/nav/nav";
import "./projects.css";
import ProjectTree from "../../assets/projectTree/projectTree";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


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
        title: "PortfolioV2",
        desc: "Self explanatory, you're on it right now. Built with React"
      },
      {
        title: "Android ToDo App",
        desc: "Part of my Mobile Application Development course"
      }
    ]
  },
  {
    year: "2024",
    projects: [
      {
        title: "LastFM Web App",
        desc:(
          <>
          React web app that uses the LastFM API to display the song I am currently listening to.{" "}
          <a href="https://github.com/spraws/LastFmWebApp"><FontAwesomeIcon className="gitIco" icon={faGithub} /></a>
          <a href="https://next.jonty.info"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className="linkIco"/></a>
          </>
        ) 
      },
      {
        title: "Forensic Analysis & Report",
        desc: (
          <>
            Part of my Digital Forensics course, report can be found <a className="ul" href="https://uniworcac-my.sharepoint.com/:w:/g/personal/sprj1_23_uni_worc_ac_uk/EWVwzg2RXItIrDBCCw5WeawBUB3RfEBYRW6Vf6b_ywd3QA?e=JfPXpy">here</a>
            
          </>
        )
      },
      {
        title: "Win-Hash-Grab",
        desc: (
          <>
            <>
              Python script to extract Windows password hashes and upload them to an EC2 bucket{" "}
              <a href="https://github.com/spraws/windows-hash-grab" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="gitIco" icon={faGithub} />
              </a>
              
            </>
          </>
        )
      },
      {
        title: "Python Password Manager",
        desc: (
          <>
            <>
              CLI Password manager written in Python{" "}
              <a href="https://github.com/spraws/pyPass" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="gitIco" icon={faGithub} />
              </a>
            </>
          </>
        )
      }
    ]
  }
];
export default Projects;