

import { useState } from 'react';
import axios from 'axios';
import {api_url} from './appurl.js'
import { useNavigate } from 'react-router-dom'

function Login() {

     var navigate = useNavigate();

    const [pin,setpin]=useState()
  const [email,setem]=useState()
   const [output,setoutput]=useState()

  var krish = {"email":email,"password":pin};

  function handle() {
 
    axios.post(api_url+"/login",krish).then((res)=>{
    
       let x = res.data.details;
       localStorage.setItem("Token",res.data.Token);
    localStorage.setItem("Name",x.Name);
     localStorage.setItem("email",x.email); 
     localStorage.setItem("user_id",x.user_id);
     localStorage.setItem("PIN",x.password); 
     localStorage.setItem("Role",x.role);
      setpin("")
      setem("");
      navigate("/property");
    }).catch((erro)=>{
      setoutput("Invalid password or email");
       console.log(erro);
    })
 }
  return (
    <>      
      
   <div class="contact-page section">
    <div class="container">
      <div class="row">
       <h3>Please Login !!</h3>
        <h2> {output}</h2>
        </div>
        <div class="col-lg-12">
          <form id="contact-form" action="" method="post">
            <div class="row">
              <div class="col-lg-12">
                <fieldset>
                  <label for="name">Email</label>
                  <input type="email"  value={email}  onChange={ e=> setem(e.target.value) }  id="name" placeholder="Your Email..." autocomplete="on" required/>
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <label for="email">Password </label>
                  <input type="Number"  id="email" value={pin}  onChange={ e=> setpin(e.target.value) } pattern="[^ @]*@[^ @]*" placeholder="Your Password..." required=""/>
                   <center>  <button type="button" onClick={handle} class="btn btn-primary">Login</button></center> 
                </fieldset>
              </div>            
            </div>
          </form>
        </div>
     
      </div>
    </div>
  
      

    </>  
   
  );
}

export default Login;
