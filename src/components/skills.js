import React from 'react'
import  './css/skills.css'
import {data} from './data'
export default function Skills() {
    return (
        <section className='skills' id="skills">
            <div className="codingskills">
            <h1>Skills and Technologies</h1>
            <div className="programming">
                {data.skill.map((item,index)=>(
                    <div key={index}>
                    <img src={item.image} alt=""/>
                    <legend>{item.name}</legend>
                     </div>
                ))}
            </div>
            </div>
        </section>
    )
}
