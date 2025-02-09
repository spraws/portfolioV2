import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons"; // Import the specific icon
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <p>Built With</p>
            <div className="footer-content">
                <div className="footer-item">
                    <a href="https://react.dev"><FontAwesomeIcon icon={faReact} /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;