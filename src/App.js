import Intro from './components/intro.js'
import Skills from './components/skills.js'
import Footer from './components/footer.js'
import Contact from './components/contact.js'
import Nav from './components/nav.js'
import About from './components/about.js'
import  Coding  from './components/coding.js'
import Education from './components/education.js'
import Projects from './components/projects.js'
import './App.css'
function App() {
  return(
  <div className="App">
  <header className="App-header">
  </header>
  <Nav/>
  <Intro/>
  <About/>
  <Education/>
  <Coding/>
  <Projects/>
  <Skills/>
  <Contact/>
  <Footer/>
  </div>
  );
}
export default App;
