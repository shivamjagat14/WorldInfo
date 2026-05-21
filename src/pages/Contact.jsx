import React from 'react'
import '../App.css'
export const Contact = () => {

 const handlesumite =( formData)=>{
   const formInpuData=Object.fromEntries(formData.entries());
 }

  return (
    <section className='contact-section'>
      <h2 className="title">Contact us</h2>
      <div className="contact-wrapper container">
        <form action={handlesumite} >
          <div className="inputtext">
            <input type="text" required name="usename" autoComplete='false' id="" placeholder='Enter your Name ' />
          </div>
          <div className="inputemail">
            <input type="email" name="email" className='form-control' autoComplete='false' placeholder='Enter your Email ' required />
          </div>
          <div className="textarea">
            <textarea rows="10" name="textarea" className="form-control" required autoComplete='false' placeholder='Enter your Massage' ></textarea>
          </div>
          <div className="button">
            <button type='submit'>Send</button>
          </div>
        </form>
      </div>
    </section>
  )
}
