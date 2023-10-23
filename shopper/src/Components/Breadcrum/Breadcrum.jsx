import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

function Breadcrum(props) {
    const {product} = props;
    return ( 
        <div className='breadcrum mt-5 mx-5'>
            HOME <img src={arrow_icon} alt=''/> SHOP <img src={arrow_icon} alt=''/>{product.category} <img src={arrow_icon} alt=''/> {product.name}
        </div>
     );
}

export default Breadcrum;