import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth/helper";
import { cartEmpty, loadCart } from "./helper/cardHelper";
import { Link, withRouter } from "react-router-dom";
import StripeCheckoutButton from "react-stripe-checkout";
import { API } from "../backend";


import { createOrder } from "./helper/orderHelper";

require('dotenv').config();

const StripeCheckout = ({
  products,
  setReload = f => f,
  reload = undefined
}) => {
  const [data, setData] = useState({
    loading: false,
    success: false,
    error: "",
    address: ""
  });

  const token = isAuthenticated() && isAuthenticated().token;
  const userId = isAuthenticated() && isAuthenticated().user._id;

  const getFinalAmount = () => {
    let amount = 0;
    products.map(p => {
      amount = amount + p.price;
    });
    return amount;
  };
  const getOrderTotal = () => {
    
    return getFinalAmount()+50;
  };

  const makePayment = token => {
    const body = {
      token,
      products
    };
    const headers = {
      "Content-Type": "application/json"
    };
    return fetch(`${API}/stripepayment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    })
      .then(response => {
        console.log(response);
        //call further methods
        const {status} = response
        console.log("STATUS", status);
        const orderData = {
          products: products,
          amount: response.transaction.amount
        }
        createOrder(userId, token, orderData)
        cartEmpty(()=>{
          console.log("crash");
          
        })

        setReload(!reload)
        
      })
      .catch(error => console.log(error));
  };
const stripeKey=process.env.STRIPE_F
  const showStripeButton = () => {
    return isAuthenticated() ? (
      <StripeCheckoutButton 
        stripeKey = {stripeKey}
        token={makePayment}
        amount={getFinalAmount() * 100}
        name="Buy Now"
        shippingAddress
        billingAddress
        currency='inr'
      >
        <button className="btn btn-primary btn-sm mb-3 paybtn">Pay with stripe</button>
      </StripeCheckoutButton>
    ) : (
      <div>
      <p style={{fontSize : "1rem"}}>To proceed futher you have to SignIn !</p>
      <Link to="/signin">
        <button className="btn btn-warning">Signin</button>
      </Link></div>
    );
  };

  return (
    
    <div>
    <div class="jumbotron" style={{ margin: "0.5rem 2rem"}} >
    <div style={{backgroundColor :"#3282b8", padding:"10px" }}><h5 class="jhead">Order Summary</h5></div>
    <br/>
   

<p style={{ height: "3.5rem"}}>
    <div id="textbox"  class="text-muted camt" style={{ margin: "0.5rem 1rem", color:"black", fontSize:"0.9rem"}}>
  <p class="alignleft camt">Total amount: </p>
  <p class="alignright camt">₹ {getFinalAmount()}</p>
</div>
<div id="textbox" class="text-muted camt" style={{ margin: "0.5rem 1rem", color:"black", fontSize:"0.9rem"}}>
  <p class="alignleft camt">Delivery Charges: </p>
  <p class="alignright camt">₹ 50</p>
</div>
</p>
<p style={{ height: "3rem"}}>
<hr class="my-3"/>
<div class="camt" id="textbox" style={{ margin: "0.5rem 1rem", color:"black", fontSize:"0.9rem"}}>
  <p class="alignleft camt">Order Total: </p>
  <p class="alignright camt">₹ {getOrderTotal()}</p>
</div>
</p>
  
  <Link to="/orders" className = "btn btn-primary btn-sm mb-3 paybtn">Pay on Delivery</Link>
 
  <p class="lead">
      {showStripeButton()}
    
  </p>
  <p class="text-muted ccz ">To pay via Net banking, Paytm, PhonePay, GooglePay or any other means contact us directly <Link  to="/contact">here</Link> .</p>
  
</div>
      
      
    </div>
  );
};

export default StripeCheckout;
