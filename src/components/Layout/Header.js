import { Fragment } from "react";

import classes from "./Header.module.css";
import Logo from "../../assets/images/logo.svg";
import HeaderCartButton from "./HeaderCartButton";
import AvatarIcon from "../../assets/images/image-avatar.png";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <a href="" className={classes.logo}>
          <img src={Logo} alt="" />
        </a>

        <ul className={classes.category}>
          <li>
            <a href="">Collections</a>
          </li>
          <li>
            <a href="">Men</a>
          </li>
          <li>
            <a href="">Women</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>

        <HeaderCartButton onClick={props.onShowCart} />

        <button>
          <img src={AvatarIcon} alt="" width="49px" height="49px" />
        </button>
      </header>
      <div className={classes.line}></div>
    </Fragment>
  );
};

export default Header;
