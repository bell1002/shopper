import React, { useContext } from "react";
import './CSS/ShopCategory.css';
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import dropdown_icon from '../Components/Assets/dropdown_icon.png';

function ShopCategory(props){
    const {all_product} = useContext(ShopContext);

    console.log(all_product);
    return(
        <div className="shop-category">
            <img src={props.banner} alt=""/>
            <div className="shopcategory-indexSort d-flex justify-content-between align-items-center mx-4 my-4">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort pt-1 pb-1 px-2 py-2 rounded-pill ">
                    Sort by <img src={dropdown_icon} alt=""/>
                </div>
            </div>
            <div className="shopcategory-products ">
                {all_product.map((item, i)=>{
                    if(props.category === item.category){
                        
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    }
                    else{
                        return null;
                    }
                })}
            </div>
        </div>
    )
}

export default ShopCategory;