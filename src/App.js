import Intro from './components/intro.js'
import Skills from './components/skills.js'
import Footer from './components/footer.js'
import Contact from './components/contact.js'
import About from './components/about.js'
import './App.css'
function App() {
  return(
  <div className="App">
  <header className="App-header">
  </header>
  <Intro/>
  <About/>
  <Skills/>
  <Contact/>
  <Footer/>
  </div>
  );
}
export default App;
