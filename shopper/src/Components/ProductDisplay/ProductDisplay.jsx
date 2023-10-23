import React, { useContext } from 'react';
import start_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png';

import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';
function ProductDisplay(props) {

    const {product} = props;

    const {addToCart} = useContext(ShopContext);
    return ( 
        <div className='productdisplay d-flex mx-5 my-5'>
            <div className='productdisplay-left d-flex  gap-2'>
                <div className='productdisplay-img-list '>
                    <img src={product.image} alt=''/>
                    <img src={product.image} alt=''/>
                    <img src={product.image} alt=''/>
                    <img src={product.image} alt=''/>
                </div>
                <div className='productdisplay-img'>
                    <img className="productdisplay-main-img" src={product.image} alt=''/>
                </div>
            </div>
            <div className="productdisplay-right mx-5">
                <h1>{product.name}</h1>
                <div className='productdisplay-right-start'>
                    <img src={start_icon} alt=''/>
                    <img src={start_icon} alt=''/>
                    <img src={start_icon} alt=''/>
                    <img src={start_icon} alt=''/>
                    <img src={star_dull_icon} alt=''/>
                    <p>(122)</p>
                </div>
                <div className='productdisplay-right-prices d-flex mb-5 mt-3'>
                     <div className='productdisplay-right-price-old text-decoration-line-through fs-4'>${product.old_price}</div>
                     <div className='productdisplay-right-price-new fs-3 mx-4 text-danger fw-bold '>${product.new_price}</div>
                </div>
                <div className='fs-3 mb-4'>
                    a lightweight, usially knitted, pullover shirt, close-fitting and with a round neckline and short sleeves worn as an undershirt or outer garment.
                </div>
                <div>
                    <h2 className='mb-4'>Select Size</h2>
                    
                    <div className=' size d-flex '>
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                        <p>XL</p>
                        <p>XXL</p>
                    </div>
                </div>
                
                <button onClick={()=>{addToCart(product.id)}} style={{fontSize: '20px', padding: '10px 20px'}} className='bg-danger rounded-pill border-none  my-3 mb-5 text-light'>ADD TO CART</button>
                <div className='fs-4'><span className='fw-bold'>Category: <span className='fw-light'>Women,T-Shirt, Crop Top</span></span></div>
                <div className='fs-4'><span className='fw-bold'>Tags: <span className='fw-light'>Modern ,Lastest</span></span></div>

            </div>
        </div>
     );
}

export default ProductDisplay;