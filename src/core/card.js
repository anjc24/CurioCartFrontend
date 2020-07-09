import React,{useState, useEffect} from "react";
import "../styles.css"
import { API } from "../backend";
import Base from "./Base";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemTocart, removeItemFromcart } from "./helper/cardHelper";



   
    const Card = ({
        product,
        addtocart = true,
        removeFromCart = false,
        setReload = f=> f,
        reload= undefined
      }) => {
        
        const [redirect, setRedirect] = useState(false)
        const [count, setCount] = useState(product.count)


        const cartTitle = product? product.name: "A photo from pexels"
        const cartDescription = product? product.description: "Default description"
        const cartPrice = product? product.price: "DEFAULT"
        
        const addToCart = () => {
          addItemTocart(product, ()=> setRedirect(true))
        }


        const getARedirect = (redirect) => {
          if(redirect)
          {
            return <Redirect to= "/cart" />
          }
        }

        const showAddtoCart = () => {
            return(
                addtocart && (
                <button
                    onClick={addToCart}
                    className="btn btn-outline-info mt-2 mb-2 cb"
                    style={{width:"100%"}}
                  >
                    Add to Cart
                  </button>
                  )
            )
        }

        const showRemoveFromCart = () => {
            return(
                removeFromCart && (
                    <button
                        onClick={() => {
                          removeItemFromcart(product._id)
                          setReload(!reload)
                        }}
                        className="btn btn-block btn-outline-danger mt-2 mb-2 cb"
                        style={{width:"100%"}}
                      >
                        Remove from cart
                      </button>
                )
            )
        }

        return (
          <div class="card cardc  shadow-sm  " style={{width: "12rem", margin:"20px 30px"}} >
  {getARedirect(redirect)}
            <ImageHelper product={product} />
  <div class="card-body" style={{color: "black", padding:"0px"}}>
    <h5 style={{margin:" 0px"}} class="card-title ct">{cartTitle}</h5>
    <p style={{margin:" 0px"}} className="btn btn-light rounded  btn-sm px-4 cp"  style={{ marginTop: 10+ 'px', marginBottom: 5+ 'px'}}>₹ {cartPrice}</p>
    <div style={{margin:" 0px"}} className="row">
                <div className="col-12">
                  {showAddtoCart(addtocart)}
                </div>
                <div className="col-12">
                  {showRemoveFromCart(removeFromCart)}
                </div>
              </div>
  </div>
</div>
          /* <div className="card text-white bg-dark mb-3" style={{maxWidth: 18 + 'rem', margin: 10+ 'px'}}>
         
          <div className="card-body">
          {getARedirect(redirect)}
            <ImageHelper product={product} />
            <div className="card-header">{cartTitle}</div>
            <p className="btn btn-light rounded  btn-sm px-4"  style={{ marginTop: 10+ 'px', marginBottom: 5+ 'px'}}>₹ {cartPrice}</p>
            <div className="row">
                <div className="col-12">
                  {showAddtoCart(addtocart)}
                </div>
                <div className="col-12">
                  {showRemoveFromCart(removeFromCart)}
                </div>
              </div>
            <p  style={{ fontSize: 0.6 + 'rem'}} className="card-text">{cartDescription}</p>
          </div>
        </div> */

          /* <div className="cards border border-info ">
          
            <div className="card-header lead">{cartTitle}</div>
            <div className="card-body">
            {getARedirect(redirect)}
            <ImageHelper product={product} />
              
              <p className="lead bg-success font-weight-normal text-wrap">
                {cartDescription}
              </p>
              <p className="btn btn-success rounded  btn-sm px-4">₹ {cartPrice}</p>
              <div className="row">
                <div className="col-12">
                  {showAddtoCart(addtocart)}
                </div>
                <div className="col-12">
                  {showRemoveFromCart(removeFromCart)}
                </div>
              </div>
            </div>
          </div> */
        );
      };

  export default Card;