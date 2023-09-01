import React from 'react'
import './css/project.css'
import { data } from './data'
export default function Projects() {
  return (
    <section className='project' id ="project">
    <h1>Projects</h1>
    <div className='wrapper'>
        {data.projects.map((elem,id) =>
            <Project ele={elem} key={id} />)}
    </div>
    </section>
  )
}
function Project(props) {

  return (
    <div className='item ' >
            <h2>{props.ele.name}</h2>
            <div className='body'>
                <div className='project-image'>
                    <img src={props.ele.image} alt='iamge'/>
                </div>
                <div className='content'> 
                <div className='project-about'>
                    {props.ele.about}
                </div>
                <div className='tag'>
                    {props.ele.tags.map((element,id)=>{
                        return <div key={id} style={{backgroundImage:"url("+element+")"}}></div>
                    }
                    )}
                </div>
                </div>
            </div>
            <div className='link'>
            <button className='repo'  onClick={()=>{window.location.assign(props.ele.repo)}}>GitHub repo</button>
            {props.ele.view!="" &&<button className='view' onClick={()=>{window.location.assign(props.ele.view)}}>View</button>}
            {props.ele.download!="" &&<button className='download'  onClick={()=>{window.location.assign(props.ele.download)}}>Download app</button>}
            </div>
        </div>
  )
}
function Tag(props) {
    console.log(props)
  return (
    <div style={{backgroundImage:`url(${props.element})`}}></div>
  )
}
