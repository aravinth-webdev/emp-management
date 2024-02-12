import React from "react";
import Home1 from "./home";
import {Route,Routes } from "react-router-dom";

export default function Home(){
    return(
        <div>
        <Routes>
        <Route path="/enter" element={<Home1/>} ></Route>
        </Routes>
        </div>
    )
}
