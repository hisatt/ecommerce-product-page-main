import { useState, useContext } from "react";

import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

import classes from "./Cart.module.css";

const Cart = (props) => {

  const cartContext = useContext(CartContext);
  
  const totalAmount = cartContext.totalAmount;

  
  const hasItem = cartContext.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  }

  const cartItems = (
    <ul>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          totalAmount={totalAmount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <div className={classes.cart}>
      <h2>Cart</h2>
        <div className={classes.line}></div>
      {cartItems}
    </div>
  );
};

export default Cart;
