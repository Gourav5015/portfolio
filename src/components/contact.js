import React from 'react'
import {useState} from "react";
import './css/contact.css'
import {data} from './data'
import phone from './css/phone.png'
import email from './css/email.png'
export default function Contact() {
    function change(e){
        setEmailid(e.target.valie);
    }
    const [emailid, setEmailid] = useState('');
    const[message, setMessage]=useState('');
    const pn ="tel: +91"+ data.footer.phone;
    return (
        <section className='contact' id="contact"> 
        <h1>Contact Me</h1>
        <div className="row">
            <div className="col1">
                <iframe src={data.contact.location}  frameBorder="0"title={data.contact.pincode} >myLocation</iframe>
                <div className='div'>
                    <h3>Address</h3>
                    <div>{data.contact.addressl1}</div>
                    <div>{data.contact.addressl2}</div>
                    <div>{data.contact.addressl3} -<b>{data.contact.pincode}</b></div>
                <div>
                <img src={email} alt="email" className='email' /><a href={data.footer.mail}>{data.footer.mail}</a>
                </div>
                <div>
                <img src={phone} alt="phone" className='phone' /><a href={pn} >{data.footer.phone}</a>
                </div>
                </div>
            </div>
            <div className="col2">
                <h1>{data.contact.heading1}</h1>
                <p>{data.contact.heading2}</p>
                <div>
                <form action="#">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Your Email' value={emailid} onChange={(e)=>{change(e)}} />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Messagge'value={message} onChange={(e)=>{setMessage(e.target.value);}}></textarea>
                    <button value="submit">Submit</button>
                </form>
                </div>
            </div>
            </div>            
        </section>
    )
}
