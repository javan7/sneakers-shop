import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import styles from "./Header.module.scss";

function Header({ onClickCart }) {
  const { cartItems } = React.useContext(AppContext);

  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <header className={styles.header}>
      <Link to="/">
        <div className="d-flex align-center">
          <img src="/img/logo2.jpg" width={40} height={40} alt="logo" />
          <div>
            <h3 className="text-uppercase">Sneakers Shop</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <div>
        <ul className="d-flex ">
          <li className="mr-30 cu-p " onClick={onClickCart}>
            <img width={18} height={18} src="/img/cart.svg" alt="cart" />
            <span>{totalPrice} руб.</span>
          </li>
          <li>
            <Link to="favorites">
              <img
                className="cu-p"
                width={18}
                height={18}
                src="/img/favorites.svg"
                alt="favorites"
              />
            </Link>
          </li>
          <li>
            <Link to="orders">
              <img width={18} height={18} src="/img/user.svg" alt="user" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
