import React,{useState} from 'react'
import './css/nav.css' 
import Menu from './css/menu.png'
import { data } from './data'
const Nav = () => {
    const [Navbar, setNavbar] = useState(false)
    return (
        <>
                {(Navbar)?<div className='navbar'>
            <div className="cancel" onClick={()=>setNavbar(false)}>X</div>
        <nav>
        {data.config.showIntroSection&& <li onClick={()=>setNavbar(false)}><a href="/#">Home</a></li>}
        {data.config.showAboutSection&&    <li onClick={()=>setNavbar(false)}><a href="/#about">About me</a></li>}
         {data.config.showEducationSection&&   <li onClick={()=>setNavbar(false)}><a href="/#education">Education</a></li>}
         {data.config.showCodingSection&&   <li onClick={()=>setNavbar(false)}><a href="/#coding">Coding</a></li>}
         {data.config.showProjectsSection&&    <li onClick={()=>setNavbar(false)}><a href="/#project">Projects</a></li>}
         {data.config.showSkillsSection&&   <li onClick={()=>setNavbar(false)}><a href="/#skills">Skills</a></li>}
         {data.config.showContactSection&& <li onClick={()=>setNavbar(false)}><a href="/#contact">Contact me</a></li>}
        </nav>
        </div>:<img src={Menu} alt="menu" className='menu' onClick={()=>{setNavbar(true)}}/>}  
        </>
    )
}
export default Nav