import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./card";
import { getProducts } from "./helper/coreapicalls";

export default function contact() {

    return (
        <Base title="Curio cart" description="If you have any kind of problem or query, feel free to contact us on any of the following platforms:">
 <div class="card text-center c">
 <div id="textbox"  class="text-muted contactbox" style={{ margin: "0.5rem 1rem", color:"black", fontSize:"1rem"}}>
  <p class="alignleft">Contact: +91 7999693641</p>
  <p class="alignright"> <a href="tel:5554280940" class="btn btn-primary btn-sm">Call us</a> </p>
</div>
</div>     
<div class="card text-center c">
 <div id="textbox"  class="text-muted contactbox" style={{ margin: "0.5rem 1rem", color:"black", fontSize:"1rem"}}>
  <p class="alignleft">Gmail: curiocart@gmail.com</p>
  <p class="alignright"><a href="mailto:anjc24@gmail.com" class="btn btn-primary btn-sm">Send mail</a> </p>
</div>
</div>    
<div class="card text-center c">
 <div id="textbox"  class="text-muted contactbox" style={{ margin: "0.5rem 1rem", color:"black", fontSize:"1rem"}}>
  <p class="alignleft">Instagram: @curio_cart</p>
  <p class="alignright"> <a href="https://www.instagram.com/player_anjc/" class="btn btn-primary btn-sm">Visit Profile</a>
</p>
</div>
</div>       
<div class="card text-center c">
 <div id="textbox"  class="text-muted contactbox" style={{ margin: "0.5rem 1rem", color:"black", fontSize:"1rem"}}>
  <p class="alignleft">Linkedin: Curio Cart</p>
  <p class="alignright">   <a href="https://www.linkedin.com/in/anjali-chauhan-bb07701a7/" class="btn btn-primary btn-sm">Visit Profile</a>

</p>
</div>
</div> <div class="card text-center c">
 <div id="textbox"  class="text-muted contactbox" style={{ margin: "0.5rem 1rem", color:"black", fontSize:"1rem"}}>
  <p class="alignleft">Facebook: Curio Cart</p>
  <p class="alignright">   <a href="https://www.facebook.com/profile.php?id=100011955374860" class="btn btn-primary btn-sm">Visit Profile</a>

</p>
</div>
</div> 




                                    
        </Base>
      );
    }
    