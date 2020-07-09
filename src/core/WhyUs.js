import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./card";
import { getProducts } from "./helper/coreapicalls";


const WhyUs = () =>
{
  return(
      <div class="why mb-2">
      <br/>
      <h4 class="decorated why text-muted wt"><span>Why CurioCart ?</span></h4>
      <br/>
    <div class="card mb-8 " style={{maxWidth: "60%", margin:"auto", marginTop:"1rem", backgroundColor: "#bbe1fa", border:"none"}}>
  <div class="row no-gutters">
    <div class="col-5">
      <img src="../g1.jpg" class="card-img" alt="..."/>
    </div>
    <div class="col-1"></div>

    <div class="col-5">
      <div class="card-body mw">
        <h5 class="card-title cct text-muted">Dedicated Efforts</h5>
        <p class="card-text cct text-muted"> Happy to serve you !</p>
      </div>
    </div>
  </div>
</div>
 <div class="card mb-8 " style={{maxWidth: "60%", margin:"auto", marginTop:"1rem", backgroundColor: "#bbe1fa", border:"none"}}>
  <div class="row no-gutters">
 
  <div class="col-5">
      <div class="card-body mw">
        <h5 class="card-title cct text-muted">Over 500+ Gifts</h5>
        <p class="card-text cct text-muted">To let you be spoilt for choice</p>
      </div>
    </div>
  <div class="col-1"></div>
    <div class="col-5">
      <img src="../g2.jpg" class="card-img" alt="..."/>
    </div>
    
  </div>
</div>
 <div class="card mb-8 " style={{maxWidth: "60%", margin:"auto", marginTop:"1rem", backgroundColor: "#bbe1fa", border:"none"}}>
  <div class="row no-gutters">
    <div class="col-5">
      <img src="../g3.jpg" class="card-img" alt="..."/>
    </div>
    <div class="col-1"></div>

    <div class="col-5">
      <div class="card-body mw">
        <h5 class="card-title cct text-muted">Pocket Friendly Deals</h5>
        <p class="card-text cct text-muted">While your loved ones smile, so should you</p>
      </div>
    </div>
  </div>
</div>
<br/>
<hr/>

</div>
  )
}

export default WhyUs;