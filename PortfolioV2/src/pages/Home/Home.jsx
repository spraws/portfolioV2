import './home.css'
import AboutContent from '../../assets/about/AboutContent';
import Nav from '../../assets/nav/nav';
import Header from '../../assets/header/Header'
import Footer from '../../assets/footer/footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGolang } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";

function Home() {
    return (
        <div className="App">
            <Nav />
            <Header />
            <AboutContent title="About Me">
                <p>
                    I am a cybersecurity student at the <a href="https://www.worcester.ac.uk/">University of Worcester</a>. Through my studies, I have gained experience in web and mobile development, as well as forensic analysis and penetration testing.
                </p>
                <p className="sect-2">
                    Forensics is my main field of interest, but I am also interested in neural networks, machine learning and offensive security.
                </p>
                <p className="sect-3">
                    Currently I am learning <a href="https://go.dev/"><FontAwesomeIcon icon={faGolang} className="goLang" /></a>  and Python <a href="https://www.python.org/"><FontAwesomeIcon icon={faPython} className="python" /></a>
                    <br />

                    On the project page, you can find some of the projects I have worked on.

                </p>
            </AboutContent>
            <Footer />
        </div>
    );
}

export default Home