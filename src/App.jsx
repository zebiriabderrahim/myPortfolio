import './App.css';

import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import Timeline from "./pages/Timeline"

import Navbar from './components/NavBar';
import Footer from './components/Footer';
import About from './pages/About';

function App() {

  return (
    <div className="App">
        <Navbar/>
        <About/>
        <Timeline/>
        <Skills/>
        <Projects/>
        <Footer/>
    </div>
  );
}

export default App;
