import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
 
  return (
  <div className="product">
    <div className="product__info">
      <p>MacBook Air</p>
      <p className="product__price">
        <small>$</small>
        <strong>969.00</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
       
    </div>
    <img src="https://images-na.ssl-images-amazon.com/images/G/01/appcore/laptop/nov2020npi/AMZ_FamilyStripe_MacBook_Pro_13_inch_M1._CB416900047_.png" alt=""/>
    <button>Add To Basket</button>
</div>
  );
}


export default Product;