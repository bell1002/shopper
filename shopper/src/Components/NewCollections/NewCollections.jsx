import React from 'react';
import './NewCollections.css';
import new_collection from '../Assets/new_collections';
import Item from '../Item/Item';



function NewCollections() {
    return ( 
        <div className="new-collections">
           
    <h1 className=' d-flex justify-content-center fs-1 fw-bold '>New Collections</h1>
    <hr/>
    <div className='collections gap-3 mt-5'>
        {new_collection.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
    </div>
   
        </div>
     );
}

export default NewCollections;