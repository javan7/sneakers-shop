import React from "react";

function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img src="/img/logo.png" width={40} height={40} alt="logo" />
        <div>
          <h3 className="text-uppercase">Sneakers Shop</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <div>
        <ul className="d-flex ">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="cart" />
            <span>2000 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="user" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
