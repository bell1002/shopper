import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

import './CartItems.css';
function CartItems() {

    const {getTotalCartAmount,all_product, cartItems, removeFormCart} = useContext(ShopContext);

    return (  
        <div className='mx-5 my-5'>
            <div className='d-flex justify-content-around'>
                <p> Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remoev</p>
            </div>
            <hr/>
            {all_product.map((e) =>{
                if(cartItems[e.id] > 0){
                    return(
                        <div>
                <div className=' cart d-flex justify-content-around mt-4 mb-4'>
                    <img className='image'  src={e.image} alt=''/>
                    <p className=' nametitle fw-medium'>{e.name}</p>
                    <p className='price text-danger fs-5'>${e.new_price}</p>
                    <button>{cartItems[e.id]}</button>
                    <p className='total'>{e.new_price*cartItems[e.id]}</p>
                    <img className='remove' src={remove_icon} onClick={()=>{removeFormCart()}} alt=''/>
                </div>
                <hr/>
            </div>
                    )
                }
                return null;
            })}
            <div className='cartitem d-flex justify-content-between mt-5'>
                <div className='carttotal'>
                    <h1>Cart Totals</h1>
                    <div>
                        <div className='cart-total-item d-flex justify-content-between'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className='cart-total-item d-flex justify-content-between'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className='cart-total-item d-flex justify-content-between mb-5'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button className=' proceed btn btn-danger '>Proceed To Checkout</button>
                </div>
                <div className='cartpromocode'>
                    <p className='fs-3'>If you have a promo code, Enter it here</p>
                    <div className='pomo'>
                        <input type='text' placeholder='promo code'/>
                        <button className='btn btn-danger'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;