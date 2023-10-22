import React from "react";
import  './CSS/LoginSignup.css';
function LoginSignup(){
    return(
        <div className="loginsignup">

            <div className="loginsignup-container">
                <h1 className=" mt-4">Sign Up</h1>
                <div className="loginsignup-fields d-flex flex-column mt-4 mb-4">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Email Address"/>
                    <input type="password" placeholder="Password"/>
                </div>
                <button className=" bg-danger ">Countinue</button>
                <p className="logindignup-login mt-3"> Already have an account? <span className="text-danger">Login here</span></p>
                <div className="loginsignup-agree d-flex justify-content-start ">
                    <input type="checkbox" name="" id="" className="mb-3 "/>
                    <p className="mx-2">By continuing, i agree to the terms of use & privacy policy</p>
                </div>
            </div>

        </div>
    )
}

export default LoginSignup;