

import { useState } from 'react';
import axios from 'axios';
import {api_url} from './appurl.js'

function Register() {
  const [name,setname]=useState()
  const [email,setem]=useState()
  const [pin,setpin]=useState()
  const [age,setage]=useState()
   const [output,setoutput]=useState()

   var detail = {"Name":name,"email":email,"password":pin,"age":age};

 function handle() {
 
    axios.post(api_url+"/register",detail).then((res)=>{
      setname("");
      setem("");
      setpin("");
      setage("");
      setoutput("Register successfully");

     console.log(res);
    }).catch((erro)=>{
       console.log(erro);
    })
 }
  return (
    <>      
      
   <div class="contact-page section">
    <div class="container">
      <div class="row">
         <h3>{output}</h3>
        <h3>Please Register !!! </h3>
        </div>
        <div class="col-lg-12">
          <form id="contact-form">
            <div class="row">
              <div class="col-lg-12">
                <fieldset>
                  <label for="name">Full Name</label>
                  <input type="text"  value={name}  onChange={ e=> setname(e.target.value) }/>
                  
                </fieldset>
               
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <label for="email">Email Address</label>
                  <input type="text"  value={email}  onChange={ e=> setem(e.target.value) } required=""/>
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <label for="subject">Password</label>
                  <input type="password"  value={pin}  onChange={ e=> setpin(e.target.value) } autocomplete="on" />
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <label for="message">Age</label>
                  <input type="number"  value={age}  onChange={ e=> setage(e.target.value) }/>
                </fieldset>
              </div>

                <div class="col-lg-12">
              
               
       <center>  <button type="button" onClick={handle} class="btn btn-primary">Submit</button></center> 
               
              </div>
            
            </div>
          </form>
        </div>
     
      </div>
    </div>
  
      

    </>  
   
  );
}

export default Register;
