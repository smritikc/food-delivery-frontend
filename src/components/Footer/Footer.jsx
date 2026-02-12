import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
export const Footer = () => {
  return (
    <div
      className="footer"
      id="
    footer"
    >
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            doloremque labore commodi consequatur pariatur corporis error
            mollitia, ut, modi dolores atque fuga sint deleniti cum tempore
            similique consectetur beatae laboriosam!
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>
                get in touch
            </h2>
            <ul>
                <li>+1282727271</li>
                <li>conatct@example.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">
        copyright @
      </p>
    </div>
  );
};
