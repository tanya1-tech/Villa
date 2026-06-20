

import { useEffect } from 'react';
import { Navigate } from 'react-router-dom'

function Logout() {

  useEffect(()=>{
    
 localStorage.removeItem('Token');
     localStorage.removeItem('Name');
      localStorage.removeItem('PIN');
       localStorage.removeItem('email');
        localStorage.removeItem('user_id');
         localStorage.removeItem('Role');
  })
 
   


  return (
    <>      
     
      <Navigate to="/login" />

    </>  
   
  );
}

export default Logout;
