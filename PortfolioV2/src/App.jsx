import './App.css'
import AboutContent from './assets/about/AboutContent';
import Nav from './assets/nav/nav';
import Header from './assets/header/Header'
import DropDown from './assets/DropDown/DropDown';
function App() {
  
  return(
    <div className="App">
      <Nav />
      <Header />
      <AboutContent />
      <DropDown />
    </div>
  );
}



export default App
