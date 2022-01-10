import React from 'react'
import './css/footer.css'
import {data} from './data'
export default function Footer() {
    return (
        <section className="footer">
            <h1>Social Links</h1>
            <p>{data.footer.footerdesc}</p>
            <div className="social">
                {data.footer.social.map((item,index)=>(
                    <a href={item.link} key={index}><img src={item.icon} alt={item.platform} /></a>
                ))}
            </div>
            <p>{data.footer.copyright}</p>
            <p>for queries mail at <a href={data.footer.mail}>{data.footer.mail}</a></p>
            
        </section>
    )
}
