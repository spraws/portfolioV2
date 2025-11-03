import "./projectTree.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
ProjectTree.propTypes = {
  year: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired
    })
  ).isRequired
};

function ProjectTree({ year, projects }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setIsExpanded((prev) => !prev);
      });
    } else {
      setIsExpanded((prev) => !prev);
    }
  };
  return (
    <div className="projectTree">
      <div className="yearContainer">
        <h1 className="year">{year}</h1>
        <button className="expandBtn" onClick={toggleExpand}>
          <FontAwesomeIcon className="chevron" icon={faChevronDown} />
        </button>
        <div className="lineContainer">
          <div className="line"></div>
        </div>
      </div>
      <div className={`projectContainer ${isExpanded ? 'expanded' : 'collapsed'}`}>
        {projects.map((project, index) => (
          <div key={index} className="project">

            <h5 className="projectTitle">{project.title}</h5>
            <p className="desc">{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectTree;