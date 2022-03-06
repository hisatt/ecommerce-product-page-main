import IconDelete from "../../assets/images/icon-delete.svg";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={classes.listCart}>
        
      <div>
        <p className={classes.productName}>{props.name}</p>
        <p>
          {props.price} x {props.amount} <b>{props.totalAmount}</b>
        </p>
      </div>
      <img src={IconDelete} alt="" onClick={props.onRemove} />
    </li>
  );
};

export default CartItem;
