import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import Recipes from "./Recipes.jsx"
const AllRoutes = () => {
    return (
      <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/Recipes" element = {<Recipes />}/>
       </Routes>
    )
  }
  
  export default AllRoutes