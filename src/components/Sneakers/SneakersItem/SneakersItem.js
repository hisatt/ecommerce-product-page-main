import { Fragment, useContext } from "react";

import CartContext from '../../../store/cart-context';
import SneakersItemForm from "./SneakersItemForm";
import classes from "./SneakersItem.module.css";

const SneakersItem = (props) => {
    const cartContext = useContext(CartContext);


    const addToCartHandler = amount => {
        cartContext.addItem({
            id: 's1',
            name: 'Fall Limited Edition Sneakers',
            amount: amount,
            price: 125.00
        });
    };

  return (
    <div className={classes["description-wrapper"]}>
      <h4 className={classes.sneakers}>Sneaker Company</h4>
      <h1 className={classes.name}>Fall Limited Edition Sneakers</h1>
      <p className={classes.description}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className={classes['price-wrapper']}>
        <h2>$125.00</h2>
        <h3>50%</h3>
      </div>
      <p className={classes.discount}>$250.00</p>
      <Fragment>
        <SneakersItemForm id="s1" onAddToCart={addToCartHandler} />
      </Fragment>
    </div>
  );
};

export default SneakersItem;
