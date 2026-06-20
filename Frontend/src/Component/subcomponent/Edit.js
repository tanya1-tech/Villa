

import { useState ,useEffect} from 'react';
import axios from 'axios';
import { api_url } from './appurl';


function Edit() {
  const [name,setname]=useState()
  const [email,setem]=useState()
  const [pin,setpin]=useState()
  const [age,setage]=useState()
   const [output,setoutput]=useState()

  

      useEffect(()=>{
        axios.get(api_url+"/find?email="+localStorage.getItem('email')).then((res)=>{
        var obj = res.data[0]
        setname(obj.Name);
      setem(obj.email);
      setpin(obj.password);
      setage(obj.age);

            
        }).catch((err)=>{
           console.log(err);
        })

    },[])
 var detail = {"Name":name,"email":email,"password":pin,"age":age};
 function handle(){
   
    let obj={"condition":{"email":email},"dtp": detail}
   

    axios.patch(api_url+"/update",obj).then((res)=>{
     
      setoutput("Your data updated ");

     console.log(res);
    }).catch((erro)=>{
        setoutput("Your data not updated ");
    })
 }


  return (
    <>      
      
   <div class="contact-page section">
    <div class="container">
      <div class="row">
         <h3>{output}</h3>
        <h3>Update Your detail !!! </h3>
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
              
               
       <center>  <button type="button" class="btn btn-primary" onClick={handle}>Update</button></center> 
               
              </div>
            
            </div>
          </form>
        </div>
     
      </div>
    </div>
  
      

    </>  
   
  );
}

export default Edit;
