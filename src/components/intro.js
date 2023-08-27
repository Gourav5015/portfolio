import React from 'react'
import './css/intro.css'
import Nav from './nav.js'
import {data} from './data.js'
export default function Intro() {

    return (
        <>
        <div className='back'>
        <Nav/>
        <section className="intro">
        
        <div className="myintro">
            <div>
            <span className='i'>I am </span>
            <br/>
            <span className='name'>{data.intro.name}</span>
            <br/>
            <hr />
            <p>{data.intro.about}</p>
            <button><a href="#about">Know More...</a></button>
            </div>
            <div className="photo"> <img src={data.intro.image} alt='hello'/></div>
           
        </div>
        </section>
        </div>
        </>
    )
}
