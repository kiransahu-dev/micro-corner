import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";

const Newsletter = () => {
    return <div className="newsletter-section">
        <div className="newsletter-content">
            <span className="small-text">Newsletter</span>
            <span className="big-text">
                Sign up for latest updates and offers
            </span>
            {/* email & subscribe */}
            <div className="form">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
            </div>
            <span className="text">
                Will be used in accordance with our Privacy Policy
            </span>
            {/* social icon */}
            <span className="social-icons">
                <div className="icon">
                    <FaLinkedinIn size={14} color="#00FFFF" />
                </div>
                <div className="icon">
                    <FaInstagram size={14} color="#e4405f" />
                </div>
                <div className="icon">
                    <FaFacebookF size={14} color="#008ad3" />
                </div>
                <div className="icon">
                    <FaTwitter size={14} color="#00acee" />
                </div>
            </span>
        </div>
    </div>;
};

export default Newsletter;
