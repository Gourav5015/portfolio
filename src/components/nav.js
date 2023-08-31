import React,{useState} from 'react'
import './css/nav.css' 
import Menu from './css/menu.png'
const Nav = () => {
    const [Navbar, setNavbar] = useState(false)
    return (
        <>
                {(Navbar)?<div className='navbar'>
            <div className="cancel" onClick={()=>setNavbar(false)}>X</div>
        <nav>
            <li onClick={()=>setNavbar(false)}><a href="/">Home</a></li>
            <li onClick={()=>setNavbar(false)}><a href="/#about">About me</a></li>
            <li onClick={()=>setNavbar(false)}><a href="/#education">Education</a></li>
            <li onClick={()=>setNavbar(false)}><a href="/#coding">Coding</a></li>
            <li onClick={()=>setNavbar(false)}><a href="/#skills">Skills</a></li>
            <li onClick={()=>setNavbar(false)}><a href="/#contact">Contact me</a></li>
        </nav>
        </div>:<img src={Menu} alt="menu" className='menu' onClick={()=>{setNavbar(true)}}/>}  
        </>
    )
}
export default Nav