import React from "react";
import "./data.css";
import { useState } from "react";

export default function Home1(){
      
   const [empname,setname]=useState("");
   return(
    <div id="register">
    <div>
        <a href="#management">   <i class="fa-solid fa-arrow-up" id="arrowup"></i></a>
        </div>
    <form onSubmit={(event)=>{
         event.preventDefault();
         alert("Confirm to Register");
         let fname =  document.getElementById("fname").value;
         let fpassword =  document.getElementById("fpassword").value;
         let femail =  document.getElementById("femail").value;
         let fid =  document.getElementById("fid").value;
         let fsalary =  document.getElementById("fsalary").value;
         
         if(fid==""){
            alert("Fill employee id")
            return false
         }
         
         var empdata=[
            fname,femail,fpassword,fid,fsalary
         ]
         document.getElementById("e_name").innerHTML=fname;
         document.getElementById("e_email").innerHTML=femail;
         document.getElementById("e_id").innerHTML=fid;
         document.getElementById("e_salary").innerHTML=fsalary;
         
          document.getElementById("database").innerHTML="REGISTERED* SUCCESSFULLY"
          
          alert("'SUCCESSFULLY REGISTERED'");
          
         }}>
    <h2>Employer Register Section</h2>
    <br></br>
    <label id="empname">EMPLOYER NAME : </label>
    <input type="text" name={empname} placeholder="emp name" id="fname" required onChange={(e)=>{setname(e.target.value)}} ></input>
    <br></br>
    <label id="email">EMAIL ID : </label>
    <input type="email" name="email" placeholder="emp email" id="femail" required></input>
    <br></br>
   <label id="password">PASSWORD : </label>
    <input type="password"  name="password" maxLength={"15"} placeholder="password" id="fpassword" required></input>
    <br></br>
    <label id="id">EMPLOYER ID : </label>
    <input type="number" name="id" placeholder="emp id" id="fid" maxLength={"6"} ></input>
    <br></br>
    <label id="salary">EMPLOYER SALARY : </label>
    <input type="number" name="salary" placeholder=" emp salary" maxLength={"20"} id="fsalary" required></input>
    <br></br>
    <button>Submit</button>
    </form> 
    <div id="emp_details">
    <h2>Employer Details Section</h2>
    <div id="emp_data">
       <p>EMP_NAME :</p> <p id="e_name" className="information"></p>
       <br></br>
       <p>EMP_EMAIL :</p>
       <p id="e_email" className="information"></p>
       <br></br>
       <p>EMP_ID :</p>
      <p id="e_id" className="information"></p>
      <br></br>
      <p>EMP_SALARY :</p>
      <p id="e_salary" className="information"></p>
      <br></br>
      <hr></hr>
      <br></br>
      <label id="database"></label>
    </div>
    </div>
    <Saythanks/>
    </div>

   )    
}
function Saythanks(){
   return(

      <div id="thanks">
      <footer>
      <h2>THANKS FOR VISITING US !</h2>
      </footer>
      </div>
   )
}