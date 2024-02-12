import React from "react";
import *as ReactDOMClient from "react-dom/client";
import Crud from "./App";
import Home from "./layout";
import { BrowserRouter } from "react-router-dom";

const root =document.getElementById("root")
let user = ReactDOMClient.createRoot(root);
user.render(
    <React.StrictMode>
    <BrowserRouter> 
    <Crud/>
    <Home/>
    </BrowserRouter>
    </React.StrictMode>
)

