
import Auth from "./subcomponent/Auth";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

function header1() {

  return (
    <>   
    <Auth/>   
    
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <i class="fas fa-film mr-2"></i>
                Property 
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
              
              
                <li class="nav-item">
                   <li><a class="nav-link nav-link-3"><Link to="/view"> View Details </Link></a></li>
                </li>
                <li class="nav-item">
                    <li><a class="nav-link nav-link-3"><Link to="/property">See Property</Link></a></li>
                </li>
                <li class="nav-item">
                                        <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic">
        <span class="glyphicon glyphicon-home"></span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item><Link to="/upload">Upload Property </Link></Dropdown.Item>
        
        <Dropdown.Item ><Link to="/syp"> Your Property</Link></Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                </li>
            </ul>
            </div>
        </div>
    </nav>
 

    </>  
   
  );
}

export default header1;
