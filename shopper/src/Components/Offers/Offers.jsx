import React from 'react';
import './Offers.css';

import exclusive_image from '../Assets/exclusive_image.png';

function Offers() {
    return ( 
        <div className="offers">
            <div className='offers-left d-flex justify-content-center'>
                <h1 className='fs-1 fw-bold'>Exclusive</h1>
                <h1 className='fs-1 fw-bold'>Offers For You</h1>
                <p>ONLY ON BSET SELLERS PRODUCTS</p>
                <button className=' rounded-pill mt-3 text-light'>Check Now</button>
            </div>
            <div className='offers-right'>
                <img src={exclusive_image } alt=''/>
            </div>
        </div>
     );
}

export default Offers;