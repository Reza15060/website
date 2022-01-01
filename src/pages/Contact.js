import React from 'react'
import Header from '../components/Header'

function Contact() {
    return (
        <div>
            <Header/>
           <div className="conatiner contact mt-5">
               <div className="row pt-5">
                   <div className="col-md-6 p-6">
                   <img src="./contactus.svg" alt="" />
                   </div>
                   <div className="col-md-6">
            <div className='contact-form m-2 p-5 n-box2'>
                  <h3 className='font-bold'>Contact US</h3>

                  <hr />
                  <input type="text" className='form-control' placeholder='Name'/>
                  <input type="text" className='form-control' placeholder='Email'/>
                  <input type="number" className='form-control' placeholder='Mobile No.'/>

                  <textarea className="form-control" rows={3} defaultValue={""} />

                  <button className='primary-button button mt-3'>SUMBIT</button>
              </div>

                   </div>
               </div>
           </div>
        </div>
    )
}

export default Contact
