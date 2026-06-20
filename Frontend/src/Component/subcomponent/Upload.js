

import { useState } from 'react';
import axios from 'axios';
import {cat_url} from './appurl.js'
import { useNavigate } from 'react-router-dom'

function Upload() {

 const [Price,setprice]=useState()
  const [file,setfile]=useState()

   const [output,setoutput]=useState()

   function filehandle(e){   
         setfile(e.target.files[0])
   }

 
  function handle() {

    var fom = new FormData();

       fom.append('price',Price);
       fom.append('email',localStorage.getItem('email'));
       fom.append('File1',file);

       const config={'content-type':'multipart/form-data'}

    axios.post(cat_url+"/property",fom,config)
 }
  return (
    <>      
      
   <div class="contact-page section">
    <div class="container">
      <div class="row">
       <h3>Upload your Property  !!</h3>
        <h2> {output}</h2>
        </div>
        <div class="col-lg-12">
          <form id="contact-form" action="" method="post">
            <div class="row">
              <div class="col-lg-12">
                <fieldset>
                  <label for="name">Price</label>
                  <input type="number"  value={Price}  onChange={ e=> setprice(e.target.value) }  id="name" placeholder="Your Price..." autocomplete="on" required/>
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <label >Upload Property </label>
                  <input type="file"     placeholder="Your Property .." onChange={filehandle} required=""/>
                   <center>  <button type="button"  class="btn btn-primary" onClick={handle} >Upload</button></center> 
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

export default Upload;
