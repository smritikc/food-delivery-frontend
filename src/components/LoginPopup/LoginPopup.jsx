import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
export const LoginPopup = ({setShowLogin}) => {
const [currState,setCurrState]=useState('Login')

  return (
    <div className='login-popup'>
        <form action="
        " className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img src={assets.cross_icon} onClick={()=>setShowLogin(false)} alt="" />
            </div>
            <div className="login-popup-input">
                {currState==="Login"?<></>: 
                <input type="text" placeholder='your name' required />
                
                }
                <input type="text" placeholder='your email' required />
                <input type="text" placeholder='password' required />
            </div>
            <button>{currState==='Sign up'?'Create account':"Login"}</button>
            <div className='login-popup-condition'>
                <input type="checkbox" required />
                <p>agree to terms and conditions</p>
            </div>
            {currState==='Login'? <p>create a new account?<span onClick={()=>setCurrState('Sign up')}>
                click here
                </span></p>:
                <p>Already have an account <span onClick={()=>setCurrState('Login')}>login here</span></p>
                }
           
        </form>
    </div>
  )
}
