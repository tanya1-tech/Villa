

import { useEffect,useState } from "react";

import { useLocation } from "react-router-dom";

function Sld() {

    const location = useLocation();

    var [slide ,setslide ]=useState();

    useEffect(()=>{
 var role = localStorage.getItem('Role');
      if (role=="admin") {
        setslide( <>              
 
    </>  );
      } else {
        setslide(<>   <div class="page-heading header-text">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <span class="breadcrumb"><a href="#">Home</a>  /  Single Property</span>
          <h3>Single Property</h3>
        </div>
      </div>
    </div>
  </div></>); 
      }


    },[location])

  return (
   
    <> {slide}</>
   
  );
}

export default Sld;
