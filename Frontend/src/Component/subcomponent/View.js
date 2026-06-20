

import { useNavigate } from 'react-router-dom'
import {api_url} from './appurl.js'

import { useEffect ,useState} from 'react';
import axios from 'axios';

function View() {

    const [dat , setdata ]=useState([])

    useEffect(()=>{
        axios.get(api_url+"/fetch").then((res)=>{
               setdata(res.data);
               console.log(res.data)
        }).catch((err)=>{
           console.log(err);
        })

    },[])

    var handle = (uid)=>{

    let  obj = {"data":{"email":uid}} 
    
    axios.delete(api_url+"/remove",obj).then((res)=>{
            alert("User deleted ")
    }).catch((err)=>{
            alert("User Not deleted ")
    })

    }
  
  return (
    <>   
    <table className="table table-bordered"> 
        <tr>
            <th> Name</th>
             <th> Email</th>
              <th> Password</th>
               <th> Age</th>
                <th> Action </th>
               
                 </tr>
            
             {

        dat.map((a)=>(
            <tr>
               <td> {a.Name} </td>
                 <td> {a.email}</td>
                   <td> {a.password}</td>
                    <td> {a.age}</td>
                     <td> <button style={{"color":"red"}} onClick={()=>{handle(a.email)}}>Delete</button></td>
                    

            </tr>
               
        ))
     }
           
            
    
     </table>  
    </>  
   
  );
}

export default View;
