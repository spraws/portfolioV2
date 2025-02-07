import './App.css'
import AboutContent from './assets/about/AboutContent';
import Nav from './assets/nav/nav';
import Header from './assets/header/Header'
import "@fontsource/source-serif-pro/400.css"; // Specify weight
function App() {
  
  return(
    <div className="App">
      <Nav />
      <Header />
      <AboutContent />
    </div>
  );
}

export default App
