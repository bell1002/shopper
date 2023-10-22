import React from 'react';
import './NewsLetter.css';

function NewsLetter() {
    return (  
        <div className='newsletter d-flex justify-content-center align-items-center mx-auto  mb-5 gap-3'>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p className='fs-4 fw-normal'>Subscribe to our newsletter and stay updated</p>
            <div className='d-flex justify-content-between align-items-center bg-light border-success rounded-pill'>
                <input type='email' placeholder='Your Email here....' className='bg-light'/>
                <button>Subscribe</button>
            </div>
        </div>
    );
}

export default NewsLetter;