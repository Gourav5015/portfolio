import React from 'react'
import './css/intro.css'
import {data} from './data.js'
export default function Intro() {

    return (
        <>
        <section className="intro">
        <div className="myintro">
            <div>
            <span className='i'>{data.intro.heading} </span>
            <br/>
            <span className='name'>{data.intro.name}</span>
            <br/>
            <hr />
            <p>{data.intro.about}</p>
            <button><a href="#about">{data.intro.buttonText}</a></button>
            </div>
            <div className="photo"> <img src={data.intro.image} alt='hello'/></div>
           
        </div>
        </section>
        </>
    )
}
