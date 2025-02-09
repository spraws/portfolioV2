import './App.css'
import AboutContent from './assets/about/AboutContent';
import Nav from './assets/nav/nav';
import Header from './assets/header/Header'
import Footer from './assets/footer/footer'

function App() {
  
  return(
    <div className="App">
      <Nav />
      <Header />
      <AboutContent />
      <Footer />
    </div>
  );
}



export default App
