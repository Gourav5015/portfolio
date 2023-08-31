import React from 'react'
import './css/education.css'
import {data} from './data.js'
export default function Education() {
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
    <section className='education' id='education'>
        <h1>Education</h1>
        <div className="edu">
        {edu}
       </div>
    </section>
  )
}
