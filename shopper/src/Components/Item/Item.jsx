import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';



function Item(props) {
    return ( 
    <div className='item'>
        <Link to={`/product/${props.id}`}><img src={props.image} alt=''/></Link>
        <p className='mb-2 mt-2 fs-4 fw-lig'>{props.name}</p>
        <div className='item-prices d-flex'>
            <div className='item-price-new fs-4 fw-medium '>
                ${props.new_price}
            </div>
            <div className='item-price-old fs-4 fw-medium text-decoration-line-through'>
                ${props.old_price}
            </div>
        </div>
    </div> 
    );
}

export default Item;