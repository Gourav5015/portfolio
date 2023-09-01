import React from 'react'
import "./css/coding.css"
import { data } from './data';
import { useState ,useEffect } from 'react'
export  default function Coding (){
    const [easy,setEasy]=useState(0);
    const [medium,setMedium]=useState(0);
    const [hard,setHard]=useState(0);
    const [total,setTotal]=useState(0);
    const [rating,setRating]=useState(0);
    useEffect(()=>{
        fetch("https://leetcodeprofileapi.vercel.app/api/"+data.coding.leetcodeUsername+"/").then((res)=>res.json())
        .then((data)=>{
            setEasy(data.details.profile.submitStats.acSubmissionNum[1].count)
            setMedium(data.details.profile.submitStats.acSubmissionNum[2].count)
            setHard(data.details.profile.submitStats.acSubmissionNum[3].count)
            setRating(Math.round(data.details.contest.rating))
        })
    }
    ,[])
    useEffect(()=>{
        setTotal(easy+medium+hard)
    }
    ,[easy,medium,hard])
  return (
    <section className='coding' id='coding'>
        <a href={data.coding.leetcodeUrl}><h1 className='heading'>Leetcode Profile</h1></a>
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
            <div style={{width:(easy/total)*100 +"%"}}></div>
            </h3>
            <h3 className='medium'> Medium: <span>{medium}</span>
            <div style={{width:(medium/total)*100 +"%"}}></div>
            </h3>
            <h3 className='hard'> Hard: <span>{hard}</span>
            <div style={{width:(hard/total)*100+"%"}}></div>
            </h3>
        </div>
        </div>
        { data.coding.showContestRating &&
        <div className='rating'>
            <h3>Contest Rating:{rating}</h3>
        </div>}
    </section>
  )
}
    