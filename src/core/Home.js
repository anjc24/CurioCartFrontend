import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./card";
import Slider from "./slider";
import WhyUs from "./WhyUs";

import { getProducts } from "./helper/coreapicalls";
import Mainimg from "./mainimg";


export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProducts().then(data => {
      if (!data) {
        setError(true);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <Base title="Curio cart" description="">
    <div><Mainimg/></div>
    
     <h5 style={{textAlign: "center", color: "black", marginTop:"20px"}} className="wt">ALL TIME FAVOURITE</h5>
      <div className="row  rowcard text-center">
      
          {products.map((product, index) => {
            return (
              <div style={{margin: "auto"}} key={index}>
                <Card product={product} />
              </div>
            );
          })}
 
      </div>
      <WhyUs/>
      <Slider/>
      
    </Base>
  );
}
