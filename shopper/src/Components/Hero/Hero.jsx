import React from "react";
import './Hero.css';

import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png'

function Hero(){
    return(
        <div className="hero d-flex">
        <div className="hero-left d-flex justify-content-center ">
            <h2 className="text-black fw-medium fs-3">New Arrivals Only</h2>
            <div>
                <div className="hero-hand-icon d-flex align-items-center">
                    <p>new</p>
                    <img src={hand_icon} alt=""/>
                </div>
                <p>collections</p>
                <p> for everyone</p>
            </div>
            <div className="hero-lastest-btn d-flex justify-content-center align-items-center border rounded-pill">
                <div className="mx-2">Lastest Collection</div>
                <img src={arrow_icon} alt=""/>
            </div>
        </div>
            <div className="hero-right d-flex justify-content-center align-items-center">
                <img src={hero_image} alt=""/>
            </div>
        </div>
    )
}

export default Hero;