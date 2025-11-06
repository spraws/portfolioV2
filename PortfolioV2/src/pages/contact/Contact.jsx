import AboutContent from '../../assets/about/AboutContent';
import Nav from '../../assets/nav/nav';
import Footer from '../../assets/footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './contact.css';

function Contact() {
    return (
        <div className="App">
            <Nav />
            <AboutContent title="Contact" className="">
                <p className="desc">
                    You can contact me at:
                </p>
                <li className="contact-item">
                    <ul className="contact-icon">
                        <a href="https://www.linkedin.com/in/jontys/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </ul>
                    <ul className="contact-icon">
                        <a href="https://github.com/jontys"><FontAwesomeIcon icon={faSquareGithub}/></a>
                    </ul>
                    <ul className="contact-icon">
                        <a href="mailto:jontysprawson@proton.me"><FontAwesomeIcon icon={faEnvelope} /></a>
                    </ul>
                </li>
            </AboutContent>
            <Footer />
        </div>
    );
}

export default Contact;