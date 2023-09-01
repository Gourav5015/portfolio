import React from 'react'
import './css/about.css'
import {data} from './data.js'


export default function About() {
    const edu=data.about.education.map((item,index)=>(
        <div key={index}>
            <h4>{item.class}</h4>
            <h5>{item.board}</h5>
            <p>{item.name}</p>
            <p>{item.pass}</p>
            <p>{item.percentage}</p>
        </div>
    ))
    return (
        
        <section className='about' id="about">
            <h1>About Me</h1>
            <div className="myself">
                <div className='image'><img src={data.about.image} alt="photo" /></div>
                <p>{data.about.aboutme}
                </p>
            </div>
        </section>
    )
}
