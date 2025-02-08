import "./about.css";

function AboutContent() {
    return (
        <div className="about-content">
            <div className="about-content-text">
                <h1>About Me</h1>
                <p>
                    I am a cybersecurity student at the <a href="https://www.worcester.ac.uk/">University of Worcester</a>. Through my studies, I have gained experience in web and mobile development, as well as forensic analysis and penetration testing. 
                </p>
                <p className="sect-2">
                    Forensics is my main field of interest, but I am also interested in neural networks, machine learning and offensive security.
                </p>    
            </div>
        </div>
    ) 
}

export default AboutContent;