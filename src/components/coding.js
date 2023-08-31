import React from 'react'
import "./css/coding.css"
import { useState ,useEffect } from 'react'
export  default function Coding (){
    const [easy,setEasy]=useState(0);
    const [medium,setMedium]=useState(0);
    const [hard,setHard]=useState(0);
    const [total,setTotal]=useState(0);
    useEffect(()=>{
        fetch("https://leetcodeprofileapi.vercel.app/api/aggourav5015/").then((res)=>res.json())
        .then((data)=>{
            setEasy(data.details.profile.submitStats.acSubmissionNum[1].count)
            setMedium(data.details.profile.submitStats.acSubmissionNum[2].count)
            setHard(data.details.profile.submitStats.acSubmissionNum[3].count)
        })
    }
    ,[])
    useEffect(()=>{
        setTotal(easy+medium+hard)
    }
    ,[easy,medium,hard])
  return (
    <section className='coding' id='coding'>
        <h1 className='heading'>Coding Profile</h1>
        <div className='wrapper'>
        <div className='outer'>
            <div className='inner'>
                <span>{total}</span>
                <span className='text'>Problems</span>

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="120px" height="120px">
         <defs>
             <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient> 
         </defs>
         <circle cx="60" cy="60" r="50" stroke-linecap="round" />
 </svg>
        </div>
        <div className='types'>
            <h3 className='easy'>Easy: <span>{easy}</span>
            <div></div>
            </h3>
            <h3 className='medium'> Medium: <span>{medium}</span>
            <div></div>
            </h3>
            <h3 className='hard'> Hard: <span>{hard}</span>
            <div></div>
            </h3>
        </div>
        </div>
    </section>
  )
}
    