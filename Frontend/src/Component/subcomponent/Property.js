
import {cat_url} from './appurl.js'
import { useEffect ,useState} from 'react';
import axios from 'axios';


function Property() {

   const [property , setprop ]=useState([])

    useEffect(()=>{

        axios.get(cat_url+"/find").then((res)=>{
               setprop(res.data);
               
        }).catch((err)=>{
           console.log(err);
        })

    },[])

  return (
         
       <>

    <div class="properties section">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 offset-lg-4">
          <div class="section-heading text-center">
            <h6>| Properties</h6>
            <h2>We Provide The Best Property You Like</h2>
          </div>
        </div>
      </div>




      <div class="row">

   {  
   
   property.map((val)=>(
          <div class="col-lg-4 col-md-6">
          <div class="item">
            <a href="property-details.html"><img src={`assets/Upload/${val.pic}`}/></a> 
            <span class="category">Luxury Villa</span>
            <h6>{val.price}</h6>
            <h4><a href="property-details.html">18 New Street Miami, OR 97219</a></h4>
            <ul>
              <li>Bedrooms: <span>8</span></li>
              <li>Bathrooms: <span>8</span></li>
              <li>Area: <span>545m2</span></li>
              <li>Floor: <span>3</span></li>
              <li>Parking: <span>6 spots</span></li>
            </ul>
            <div class="main-button">
              <a href="property-details.html">Schedule a visit</a>
            </div>
          </div>
        </div>
     ))
     
    }
     

      </div>
    </div>
  </div>
       
       </>


    
   
  );
}

export default Property;
