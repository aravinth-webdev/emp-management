import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
export default function Crud(){

    return(
       <div>
        <Managment/>
        <Start/>
        </div>
    )
}

function Managment(){
    return(
        <div id="management">
        <h2>Employee Managment System</h2>
        </div>
        )
}

function Start(){
    let val= "In today’s fast-paced business world, effective employee management is crucial for success"
    // val.toUpperCase();
    return(
        <div className="visit">
        <h2>{val.toUpperCase()}</h2>
          <div id="start">     
          <nav>
          <Link to={"./enter"} id="link1" onClick={()=>{
            
          }} >Register here   <i class="fa-solid fa-arrow-down" id="arrow-down"></i></Link>
          </nav> 
        </div>
        
        </div>
    )
}
// function Emty(){
//     return(
//         <div id="emty">
//         <h1>Thanks for visiting us !</h1>
        
//         </div>
//     )
// }
