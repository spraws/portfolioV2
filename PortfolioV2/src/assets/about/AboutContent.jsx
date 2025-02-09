import "./about.css";

import PropTypes from 'prop-types';


function AboutContent({title, children}) {
    return ( 
        <div className="about-content">
            <div className="about-content-text">
                <h1>{title}</h1>
                {children}
            </div>
        </div>
    ) 
}
AboutContent.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default AboutContent;