import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
    return (<div className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    This is an E-commerce Project which made of with Rect, strapi and node-js.
                    In this site You can find category wise product Mostly we sale electronic products
                    like Headphones, Smart-Watchs, EarBuds and Home-Theaters. Thank You For Visiting.
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow color="#2b3252" />
                    <div className="text">
                        Christchurch, Southempton, West Oval, london,
                        England, 100153
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt color="lime" />
                    <div className="text">Phone:+91- 7978977047</div>
                </div>
                <div className="c-item">
                    <FaEnvelope color="#c71610" />
                    <div className="text">Email: kiransahu.dev@gmail.com</div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text"><a href="#">Headphones</a></span>
                <span className="text"><a href="">Smart Watches</a></span>
                <span className="text"><a href="">Bluetooth Speakers</a></span>
                <span className="text"><a href="">Wireless Earbuds</a></span>
                <span className="text"><a href="">Home Theatre</a></span>
                <span className="text"><a href="">Projectors</a></span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <span className="text">
                    MICROCORNER 2023 CREATED BY <span className="name">KIRAN SAHU.</span> PREMIUM E-COMMERCE
                    SOLUTIONS.
                </span>
                <img src={Payment} />
            </div>
        </div>
    </div>
    );
};

export default Footer;
