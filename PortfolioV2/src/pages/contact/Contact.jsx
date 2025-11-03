import AboutContent from '../../assets/about/AboutContent';
import Nav from '../../assets/nav/nav';
import Footer from '../../assets/footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    return (
        <div className="App">
            <Nav />
            <AboutContent title="Contact">
                <p>
                 You can contact me at:
                </p>
                <li>
                    <ul>
                    <FontAwesomeIcon icon={faLinkedin} /> 
                    </ul>
                </li>
            </AboutContent>
            <Footer />
        </div>
    );
}

export default Contact;