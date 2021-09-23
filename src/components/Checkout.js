import React from 'react'
import { useStateValue } from '../context/StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
function Checkout () {
  
  const [{ basket}, dispatch] = useStateValue();

  return(
  <div className="checkout">
    <div className="checkout__left">

  
      <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/img17/prime/other/1053033_us_prime_dex_vxd-1060_DEX_LP_Banner_DT_v1.png"
          alt="" />
          
      <div>
        <h2 className="checkout__title">
          Your Shopping Basket
        </h2>
        {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
      </div>
        
      </div>
      <div className="checkout__rigt">
        <Subtotal/>
      
      </div>
    </div>

  );
}

export default Checkout;