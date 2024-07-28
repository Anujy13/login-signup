import React, {useState} from "react";
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icom from '../Assets/password.png'
import hide_icon from '../Assets/hide.png'
import show_icon from '../Assets/show.png'

const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up");
    const [value, setValue] = useState({
        password: " ",
        showPassword: false,
    });

    const handleHide = () => {
        setValue({
            ...value,
            showPassword: !value.showPassword,
        })

    }

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login"?<div></div>:<div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="Name" />
                </div>}
                

                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Email ID"/>
                </div>

                <div className="input">
                    <img src={password_icom} alt="" />
                    <input type= {value.showPassword? "text":"password"} placeholder="Password"/>
                    {value.showPassword === false?<img src={hide_icon} onClick={handleHide} className="img-style" alt="hide"/>:<img src={show_icon} onClick={handleHide} className="img-style" alt="show"/>}
                </div>

                {action === "Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here</span></div>}
                
                <div className="submit-container">
                    <div className={action === "Login"?"submit gray":"submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
                    <div className={action === "Sign Up"?"submit gray":"submit"} onClick={() => {setAction("Login")}}>Login</div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup