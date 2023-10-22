import React from 'react';
import Item from '../Item/Item';

import './Popular.css';

import data_product  from '../Assets/data';

function Popular() {
    return ( 
    <div className='popular'>
    <h1 className='fs-1 fw-bold'>Popular in women</h1>
    <hr/>
    <div className='popular-item d-flex gap-3'>
        {data_product.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
    </div>
    </div>
    
     );
}

export default Popular;