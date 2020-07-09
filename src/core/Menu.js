import React, {Fragment} from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ffffff"};
  } else { 
    return { color: "##ececec" };
  }
};



const Menu = ({ history }) => (
  
  <div>
  <nav class="navbar navbar-expand-lg navbar-dark  bg-dark">
  <a class="navbar-brand " style={{ color:"#ececec"}} href="#" ><img src="../logo.png" width="30" height="30" class="d-inline-block align-top" style={{ marginRight: 10+ 'px'}} alt="logo" loading="lazy" />      CurioCart
</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
      <Link style={currentTab(history, "/")} className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li class="nav-item">
      <Link
          style={currentTab(history, "/cart")}
          className="nav-link"
          to="/cart"
        >
          Cart
        </Link>
        </li>
        <li class="nav-item">
        <Link
          style={currentTab(history, "/contact")}
          className="nav-link"
          to="/contact"
        >
          Contact
        </Link>
      </li>
      {/* {isAuthenticated() && isAuthenticated().user.role === 0 && (
      <li className="nav-item">
        <Link
          style={currentTab(history, "/user/dashboard")}
          className="nav-link"
          to="/user/dashboard"
        >
         U. Dashboard
        </Link>
      </li>
     )} */}
    {isAuthenticated() && isAuthenticated().user.role === 1 && (
      <li className="nav-item">
        <Link
          style={currentTab(history, "/admin/dashboard")}
          className="nav-link"
          to="/admin/dashboard"
        >
         A. Dashboard
        </Link>
      </li>
     )} 
      {!isAuthenticated() && (<Fragment>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/signup")}
          className="nav-link"
          to="/signup"
        >
          Signup
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/signin")}
          className="nav-link"
          to="/signin"
        >
          Sign In
        </Link>
      </li>
      </Fragment>) }
      
      {isAuthenticated() && (
        <li className="nav-item">
          <Link
            className="nav-link text-warning"
            onClick={() => {
              alert("You have been redirected to home page !")
              signout(() => {
                history.push("/");
              });
            }}
          >
            Signout
          </Link>
        </li>
      )}

    </ul>
  </div>
</nav>
   
  </div>
);

export default withRouter(Menu);
