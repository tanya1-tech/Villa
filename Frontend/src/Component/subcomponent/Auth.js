

import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

function Auth() {

    const Navigate = useNavigate();

    useEffect(()=>{

       var path= window.location.pathname
      var role = localStorage.getItem('Role');
      
 if(localStorage.getItem('Token')==undefined && path=="/view"){

     Navigate("/login");
 }else if(localStorage.getItem('Token')==undefined && path=="/property" ){
  
     Navigate("/property");
 }else if(role=="undefined" && path=='/view'){
 Navigate("/");
 }
    })


  return (
    <>      
     
    </>  
   
  );
}

export default Auth;
