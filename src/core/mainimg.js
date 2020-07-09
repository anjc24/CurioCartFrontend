import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./card";
import { getProducts } from "./helper/coreapicalls";
import { Link, withRouter } from "react-router-dom";



const Mainimg = () =>
{
  return(
<div class="jumbotron jumbom jumbotron-fluid">
  <div style={{textAlign: "center"}} class="container">
  <br/>

  <h5 class="cct mb-4">CurioCart: A customized gift shop </h5>

   <p className="cct"> Get your customized gift which makes you and your loved ones happy!</p> 
   <p className="cct">No need to pay in advance, pay when once you're satisfied.</p>
   <h6 className="cct">For any queries</h6>
   <Link to="/contact" className = "btn btn-warning btn-sm ct">Contact Us</Link>
   <br/>
   <br/>
  </div>
</div>
    
  )
}

export default Mainimg;