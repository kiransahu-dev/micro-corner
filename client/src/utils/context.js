import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {

    const [categories, setCategories] = useState();
    const [product, setProduct] = useState();
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubtotal, setCartSubTotal] = useState(0);
    const location = useLocation();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {

        let count = 0;
        cartItems?.map((item) => (count += item.attributes.quantity));
        setCartCount(count);

        let subTotal = 0;
        cartItems?.map(
            (item) =>
                (subTotal += item.attributes.price * item.attributes.quantity)
        );
        setCartSubTotal(subTotal);
    }, [cartItems]);

    const handleAddToCart = (product, quantity) => {
        let item = [...cartItems];
        let index = item.findIndex(p => p.id === product.id)
        if (index !== -1) {
            item[index].attributes.quantity += quantity
        } else {
            product.attributes.quantity = quantity;
            item = [...item, product];
        }
        setCartItems(item);
    }
    const handleRemoveFromCart = (product) => {
        let item = [...cartItems];
        item = item.filter(p => p.id !== product.id);
        setCartItems(item);
    }
    const handleCartProductQuantity = (type, product) => {
        let items = [...cartItems];
        let index = items?.findIndex((p) => p.id === product?.id);
        if (type === "inc") {
            items[index].attributes.quantity += 1;
        } else if (type === "dec") {
            if (items[index].attributes.quantity === 1) return;
            items[index].attributes.quantity -= 1;
        }
        setCartItems(items);
    }
    return (
        <Context.Provider value={{
            categories,
            setCategories,
            product,
            setProduct,
            cartItems,
            setCartItems,
            cartSubtotal,
            setCartSubTotal,
            cartCount,
            setCartCount,
            handleAddToCart,
            handleRemoveFromCart,
            handleCartProductQuantity,
        }}>
            {children}
        </Context.Provider>
    )
}

export default AppContext;