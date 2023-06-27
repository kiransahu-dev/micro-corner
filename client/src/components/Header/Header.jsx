import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";


import "./Header.scss";

const Header = () => {

    // for sticky navbar
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const { cartCount } = useContext(Context);
    const navigate = useNavigate();

    const handleScroll = () => {
        const offset = window.scrollY;
        offset > 200 ? setScrolled(true) : setScrolled(false)
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, []);


    return (
        <>
            <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/category/3")}>About</li>
                        <li onClick={() => navigate("/category/1")}>Categories</li>
                    </ul>
                    <div className="center" onClick={() => navigate("/")}>MICRO-CORNER</div>
                    <div className="right">
                        <TbSearch onClick={() => setShowSearch(true)} />
                        <AiOutlineHeart style={{ color: 'red' }} />
                        <span className="cart-icon" onClick={() => setShowCart(true)}>
                            <CgShoppingCart />
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
    );
};

export default Header;
