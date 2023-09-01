import Intro from './components/intro.js'
import Skills from './components/skills.js'
import Footer from './components/footer.js'
import Contact from './components/contact.js'
import Nav from './components/nav.js'
import About from './components/about.js'
import  Coding  from './components/coding.js'
import Education from './components/education.js'
import Projects from './components/projects.js'
import {data } from './components/data.js'
import dark from "./components/css/dark.jpg"
import light from "./components/css/light.png"
import { useEffect, useState } from 'react'
import './App.css'
function App() {

  const root=`*{
    background:white;
    color:black;
  }
  .cancel{
    background:transparent !important;
    color:white;
  }
  nav,li,a{
    background:transparent !important;

  }
  section{
    background:white !important;
  }
   .edu p ,.edu h4 ,.edu h5{
    background:transparent !important;
  }
  .rating h3 {
    background:transparent;
    color:white;
  }
  span{
    background:transparent;
    color:black;
  }
  .item h2{
    background:transparent;
    border-bottom-color:black !important;
  }
  .item .link, .item .body{
    background:transparent;
  }
  .content ,.tag ,.project-about{
    background:transparent !important;
  }
  .col1 .div h3 ,.col1 .div div ,.col1 .div a , .col1 .div b{
    background:transparent !important;
    color:white;   
  }
  .tag div {
    background-color:transparent;
  }
  .codingskills legend{
    background-color:transparent;
  }
  .programming div img{
    background-color:transparent;
  }
  .footer a{
    background:transparent;
    color:black;
  }
  `
  const [darkMode,setDarkMode]=useState(false)
  // useEffect(()=>{
  //   console.log(darkMode)
  //   console.log((localStorage.getItem("mode")))
  // }
  // ,[])
  return(
  <div className="App">
  <header className="App-header">
  </header>
  {darkMode}
  <Nav/>
  {data.config.showIntroSection&&<Intro/>}
  {data.config.showAboutSection&&<About/>}
  {data.config.showEducationSection&&<Education/>}
  {data.config.showCodingSection&&<Coding/>}
  {data.config.showProjectsSection&&<Projects/>}
  {data.config.showSkillsSection &&<Skills/>}
  {data.config.showContactSection&&<Contact/>}
  {data.config.showFooterSection&&<Footer/>}
  {!darkMode?
  <div className='mode-dark'>
    <img src={dark} onClick={()=>{setDarkMode(true)}}></img>
  </div>:
  <div className='mode-light'>
    <img src={light} onClick={()=>{setDarkMode(false)}}></img>
  </div>}
  {!darkMode && 
  <style> {root}
  </style>
  }
  </div>
  );
}
export default App;
