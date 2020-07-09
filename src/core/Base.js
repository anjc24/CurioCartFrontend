import React from 'react'
import Menu from './Menu';
import { Link } from "react-router-dom";


  const Base = ({
      title="My Title",
      description ="My description",
      className=" text-white ",
      children
  }) => (
          <div>
             <Menu />
             <div className= "container-fluid">
               <div className = " text-white text-center">
                 {/* <h3 className= "display-4">{title}</h3>  */}
                </div>
                <div className = {className}>{children}</div>
             </div>
             <footer className = "footer bg-dark  py-3" style={{position:"sticky"}}>
                 <div className= "container-fluid bg-dark text-white text-center ">
                   
                   <div class="social">
        <a style={{margin:"10px"}} href="https://www.facebook.com/profile.php?id=100011955374860"><img  width="20px" height="20px" src="../fb.png" alt="fb" /></a>
        <a href="https://www.instagram.com/player_anjc/"><img width="20px" height="20px" src="../insta.png" alt="insta" /></a>
        <a style={{margin:"10px"}} href="https://www.linkedin.com/in/anjali-chauhan-bb07701a7/"><img width="20px" height="20px" src="../linkedin.png" alt="linkedin" /></a>



      </div>
      <p className="text-muted" style={{marginTop:"1rem", fontSize:"0.7rem"}}>© Copyright 2020, CurioCart <br/> Designed and developed by: Anjali Chauhan</p>
                 </div>
                 
                 
             </footer>
          </div>
      )
  

  export default Base;