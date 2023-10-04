import { useState } from 'react';
import './Contact.scss'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
export default function Contact() {
  const [data,setData]=useState({
    name:"",
     email:"",
     phone:"",
     message:"",

  })
  const UpdateData=(e)=>{
    setData((prev)=>({
      ...prev,
      [e.target.name]:e.target.value

    }))

  }
  const SubmitData=(e)=>{
  e.preventDefault()
  alert(` Name: ${data.name} , Email : ${data.email} , Phone : ${data.phone} , Message : ${data.message}`)
    setData({
      name:"",
       email:"",
       phone:"",
       message:"",
  
    })
  }
  return (
    <div className='contact' id='contact'>
      <div className="title">
        <PermContactCalendarIcon className='contact-icon' /><p >My Contact</p>
      </div>
      <h2>Let's Contact With Me</h2>
      <h4>alivasahu06@gmail.com</h4>
      <form action="#" onSubmit={SubmitData}>
        <div>
          <label htmlFor="#">Full Name</label>
          <input name='name' type="text" placeholder='Your Full Name' value={data.name} onChange={UpdateData}/>
        </div>
        <div>
          <label htmlFor="#">Email</label>
          <input name='email' type="text" placeholder='Your Email' value={data.email} onChange={UpdateData}/>
        </div>
        <div>
          <label htmlFor="#">Phone</label>
          <input name='phone' type="text" placeholder='Your Phone' value={data.phone} onChange={UpdateData}/>
        </div>
        <div>
          <label htmlFor="#">Message</label>
          <textarea name="message" id="" placeholder='Your Message' value={data.message} onChange={UpdateData}></textarea>

        </div>
        <div className='attach'>
          <p>Add Attachment</p>
          <input type="file" placeholder='Attachment' />
        </div>

        <button>Send Message</button>
      </form>
    </div>
  )
}
