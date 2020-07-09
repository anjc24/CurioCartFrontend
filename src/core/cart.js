import React , {useState, useEffect} from "react";
import "../styles.css"
import { API } from "../backend";
import Base from "./Base";
import Card from "./card";
import { loadCart } from "./helper/cardHelper";
import StripeCheckout from "./StripeCheckout";
import ImageHelper from "./helper/ImageHelper";
import { addItemTocart, removeItemFromcart } from "./helper/cardHelper";



const Cart=() => {

 
  const showRemoveFromCart = (product) => {
    return(
       
            <button
                onClick={() => {
                  removeItemFromcart(product._id)
                  setReload(!reload)
                }}
                className="btn btn-block btn-outline-danger mt-2 mb-2 cb"
                style={{width:"80%"}}
              >
                Remove from cart
              </button>
        
    )
}







  

 
  const [products, setProducts] = useState([])
  const [reload, setReload] = useState(false)

  useEffect(()=> {
    setProducts(loadCart())
  }, [reload])
 
  const loadAllProducts = (products) => {
      return(
          <div className="cartcard" style={{margin: "0.5rem 2rem", backgroundColor:"white"}}>
              <div  style={{ backgroundColor: "orange", padding:"10px"}}><h5 class="jhead">Your Cart</h5></div>
              <br  />
              {products.map((product, index)=> (
                
                <div key={index} style={{marginLeft: "1.5rem"}}>
                
                   <ul class="list-unstyled">
                    <li class="media">
                       <ImageHelper product={product} />
                      
                          <div class="media-body" style={{textAlign: "initial", marginLeft: "10px", color:"black"}}>
                          <div className="col-12 carttext"> 
       <h5 class="cct" style={{fontSize:"20px", margin:"8px 0px ", padding:"0px"}}>{product.name}</h5>
      <h6 class="ccp" style={{fontSize:"10px", margin:"8px 0px ", padding:"0px"}}><span class="text-muted text-white">Price: </span>₹ {product.price}</h6>
      <h6 class="ccp" style={{fontSize:"10px", margin:"8px 0px ", padding:"0px"}}><span class="text-muted">Quantity: </span>1</h6>
      <p class="ccd text-muted" style={{fontSize:"10px", margin:"8px 0px ", padding:"0px"}}>{product.description} </p>
      <h6 class="ccp" style={{fontSize:"10px", margin:"8px 0px ", padding:"0px"}}>Delivered within 5-10 days.</h6>

     
                  {showRemoveFromCart(product)}
                </div>
    </div>
  </li>
  </ul>        
                <hr style={{marginRight:"1.5rem"}}/>
                </div>
                
              ))}
          </div>
      )
  }

  const loadCheckout = () => {
    return(
        <div>
            <h2>This section for checkout</h2>
        </div>
    )
}
  

  return (
    <Base title="Your Cart" description= "Buy your customized gift which makes you and your loved ones happy !">
      <div className="row text-center ">
      <div className="col-md-8">
        {products.length >0 ? ( 
          loadAllProducts(products) 
          ): (
            <h3>No products in cart</h3>
            )}
            </div>
        <div className="col-md-4"><StripeCheckout
          products={products}
          setReload= {setReload}
        />
       
        </div>
        
        
        
      </div>
    </Base>
  );
}

export default Cart