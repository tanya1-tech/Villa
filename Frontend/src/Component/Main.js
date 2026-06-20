
import './Main.css';
import Home from './subcomponent/home';
import Login from './subcomponent/Login';
import About from './subcomponent/about';
import Contact from './subcomponent/contact';
import Register from './subcomponent/register';
import {Routes,Route} from 'react-router-dom'
import Logout from './subcomponent/Logout';
import Property from './subcomponent/Property';
import View from './subcomponent/View';
import Edit from './subcomponent/Edit';
import Upload from './subcomponent/Upload';
import Syp from './subcomponent/Syp';


function Main() {

 
  return (
    <>   

    
    
      <Routes>

         <Route path="/" element={<Home/>}></Route>
           <Route path="/aboutus" element={<About/>}></Route>
             <Route path="/contact" element={<Contact/>}></Route>
               <Route path="/register" element={<Register/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                  <Route path="/logout" element={<Logout/>}></Route>
                   <Route path="/property" element={<Property/>}></Route>
                       <Route path="/view" element={<View/>}></Route>
                           <Route path="/edit" element={<Edit/>}></Route>
                              <Route path="/syp" element={<Syp/>}></Route>
                     <Route path="/upload" element={<Upload/>}></Route>
      </Routes>

  
     
     

           
       
    </>  
   
  );
}

export default Main;
