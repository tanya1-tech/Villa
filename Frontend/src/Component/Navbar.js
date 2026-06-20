
import { Link ,useLocation} from "react-router-dom";
import { useEffect,useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';

function Navbar() {

  var [nav ,setnav ]=useState();

   const location = useLocation();

  useEffect(()=>{
   
  if(localStorage.getItem("Token")){

    setnav(  <> 

      <header class="header-area header-sticky">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="main-nav">
                
                    <a href="index.html" class="logo">
                        <h1>Villa</h1>
                    </a>
                  
                    <ul class="nav">
                      <li><a class="active"><Link to="/">Home</Link></a></li>
                      <li><a ><Link to="/aboutus">About us </Link> </a></li>
                      <li><a><Link to="/contact">Contact</Link></a></li>
                        <li><a><Link to="/edit">Edit</Link></a></li>
                      <li><a ><Link to="/logout"> Logout</Link> </a></li>
                      <li>

      
                      </li>
                       <li><a > Welcome </a></li>
                  </ul>   
                    <a class='menu-trigger'>
                        <span>Menu</span>
                    </a>
                   
                </nav>
            </div>
        </div>
    </div>
  </header>
    </>  )
    
  } else {
      setnav(  <> 
      <header class="header-area header-sticky">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="main-nav">
                    <a href="index.html" class="logo">
                        <h1>Villa</h1>
                    </a>      
                    <ul class="nav">
                      <li><a class="active"><Link to="/">Home</Link></a></li>
                      <li><a ><Link to="/aboutus">About us </Link> </a></li>
                      <li><a><Link to="/contact">Contact</Link></a></li>
                      <li><a ><Link to="/login">Login</Link></a></li>
                      

                      <li><a ><Link to="/register">Register</Link></a></li>
                      <li><a > Schedule a visit</a></li>
                  </ul>   
                    <a class='menu-trigger'>
                        <span>Menu</span>
                    </a>
                   
                </nav>
            </div>
        </div>
    </div>
  </header>
    </>  )
  }
  

  },[location])
 
  return (
  
   <> {nav} </>
  );
}

export default Navbar;
