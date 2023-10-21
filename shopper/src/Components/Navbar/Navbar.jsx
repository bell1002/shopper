import React, { useState } from "react";
import './Navbar.css';

import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from "react-router-dom";


function Navbar() {

    const [menu,setMenu] = useState('shop');
    return(
      
            <div className="navbar d-flex justify-content-around shadow-sm p-3 bg-body-tertiary rounded ">
                <div className="nav-logo d-flex align-items-center">
                    <img src={logo} alt=""/>
                    <p className="text-black fw-bold fs-1">Shopper</p>
                </div>
                <ul className="nav-menu d-flex align-items-center fs-4 text-black fw-normal list-unstyled ">
                    <li className="mx-3 " onClick={()=>{setMenu("shop")}}><Link to='/' className="text-decoration-none">Shop</Link>{menu === 'shop'? <hr/>:<></>}</li>
                    <li className="mx-3 " onClick={()=>{setMenu("mens")}}><Link to='/mens' className="text-decoration-none">Men</Link>{menu === 'mens'? <hr/>:<></>}</li>
                    <li className="mx-3 " onClick={()=>{setMenu("womens")}}><Link to='/womens' className="text-decoration-none">Women</Link>{menu === 'womens'? <hr/>:<></>}</li>
                    <li className="mx-3 " onClick={()=>{setMenu("kids")}}><Link to='/kids' className="text-decoration-none">Kids</Link>{menu === 'kids'? <hr/>:<></>}</li>
                </ul>
                <div className="nav-login-cart d-flex align-items-center">
                    <Link to='/login'><button className=" mx-5 border border-black rounded-pill px-5 py-2">Login</button></Link>
                    <Link to='/cart'><img src={cart_icon} alt=""/></Link>
                    <div className="nav-cart-count d-flex justify-content-center">0</div>
                </div>
            </div>
       
    )
}

export default Navbar;