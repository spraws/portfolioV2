import AboutContent from "../../assets/about/AboutContent";
import Nav from "../../assets/nav/nav";
import "./projects.css";
import ProjectTree from "../../assets/projectTree/projectTree";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


function Projects(){
  return(
    <div className="App">
      <Nav />
      <AboutContent title="Projects"></AboutContent>
      <div className="projects-container">
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
        title: "Dissertation",
        desc: "Final year project, a research project assessing the impact of cyberwarfare in Ukraine"
      },
      {
        title: "PortfolioV2",
        desc: "Self explanatory, you're on it right now. Built with React"
      },
      {
        title: "Gentoo-based Operating System",
        desc: "Part of my Operating Systems course, a custom Gentoo-based operating system, designed to security test virtual machines and docker containers"
      },
      {
        title: "RFID Attendance System",
        desc: "Part of my Systems Design course, a RFID based attendance system, written in Python and GO"
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
          <a href="https://listen.spra.ws"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className="linkIco"/></a>
          </>
        ) 
      },
      {
        title: "Forensic Analysis & Report",
        desc: (
          <>
            Part of my Digital Forensics course, report can be found <a className="ul" href="https://uniworcac-my.sharepoint.com/:w:/g/personal/sprj1_23_uni_worc_ac_uk/EWVwzg2RXItIrDBCCw5WeawBX4kJtS6fKexWY5Fw3NtRWw?e=u5YCHI">here</a>
            
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
              CLI Password manager written in Python, allowed me to play around with security concepts{" "}
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