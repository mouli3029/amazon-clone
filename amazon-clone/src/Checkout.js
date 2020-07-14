import React from 'react'
import { useStateValue } from './StateProvider';
import "./Checkout.css"
import CurrencyFormat from "react-currency-format"
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';


function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkoutleft">
            <img className="checkout__ad" src="https://www.brandsynario.com/wp-content/uploads/coke-happy-can.jpg"
                 alt =""/>
            

            {basket?.length===0 ?  (
                <div>
                    <h2>Your Shopping Cart is Empty</h2>
                    <p>You have no items.. In order to Add please click "Add to Basket"</p>

                </div>

            ): (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>


                    {/* List all checkout products */}

                    {basket.map(item =>(
                        <CheckoutProduct 
                        id = {item.id}
                        title ={item.title}
                        image = {item.image}
                        price ={item.price}
                        rating={item.rating} 
                        />
                    ))}

                </div>

            )}

            </div>
            {basket.length>0 && (
                <div className="checkoutright">
                    <Subtotal/>
                    </div>
            )}


            
        </div>
    )
}

export default Checkout
