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
            <li onClick={()=>setNavbar(false)}><a href="#">home</a></li>
            <li onClick={()=>setNavbar(false)}><a href="#about">about me</a></li>
            <li onClick={()=>setNavbar(false)}><a href="#skills">skills</a></li>
            <li onClick={()=>setNavbar(false)}><a href="#contact">contact me</a></li>
        </nav>
        </div>:<img src={Menu} alt="menu" className='menu' onClick={()=>{setNavbar(true)}}/>}  
        </>
    )
}
export default Nav