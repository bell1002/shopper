import React from 'react';
import './Footer.css';

import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

function Footer() {
    return ( 
        <div className='footer d-flex justify-content-center flex-column align-items-center gap-5'>
            <div className='footer-logo d-flex align-items-center gap-2'>
                <img src={footer_logo} alt=''/>
                <p className='fs-1 fw-medium'>SHOPPER</p>
            </div>
            <ul className='footer-links d-flex align-items-center list-unstyled gap-5 text-black fs-3'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>

            </ul>
            <div className='footer-social-icon d-flex justify-content-center gap-2'>
                <div className='footer-icons-container mx-3'>
                    <img src={instagram_icon} alt=''/>
                </div>
                <div className='footer-icons-container mx-3'>
                    <img src={pintester_icon} alt=''/>
                </div>
                <div className='footer-icons-container mx-3'>
                    <img src={whatsapp_icon} alt=''/>
                </div>
            </div>
            <div className='footer-copyright'>
                <hr/>
                <p>Copyright @ 2023 - All Right Reserved.</p>
            </div>
        </div>
     );
}

export default Footer;