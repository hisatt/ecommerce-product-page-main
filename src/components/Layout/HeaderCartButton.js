import { useState, useContext, useEffect } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../../assets/images/icon-cart.svg";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    const cartContext = useContext(CartContext);

    const { items } = cartContext;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

  return (
    <button className={classes.cart} onClick={props.onClick}>
      <img src={CartIcon} alt="" />
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
