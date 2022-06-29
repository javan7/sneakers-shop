import React from "react";
import { AppContext } from "../App";

function Info({ title, image, description }) {
  const { setCartOpened } = React.useContext(AppContext);
  return (
    <div className="cart-empty d-flex align-center justify-center flex-column flex text-center">
      <img className="mb-20" width={120} src={image} alt="empty-cart" />
      <h2>{title}</h2>
      <p className="opacity-6">{description} </p>
      <button onClick={() => setCartOpened(false)} className="green-button">
        <img src="img/arrow.svg" alt="empty-arrow" />
        Вернуться назад
      </button>
    </div>
  );
}

export default Info;
