import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch } from 'react-router-dom';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';
import Gallery from './Gallery';
import Service from './Service';
import Skills from './Skills';


function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App"> 
        <Switch>
          <About />
        </Switch>
        <Education/>
        <Experience />
        <Skills/>
        <Gallery />
        <Service/>
        <Contact/>
      </div>
    </Router>
  );
}

export default App;
