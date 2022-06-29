import React from "react";
import styles from "./Drawer.module.scss";
import Info from "../Info";
import { AppContext } from "../../App";
import axios from "axios";

const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

function Drawer({ onCloseCart, onRemove, items = [] }) {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [isComplete, setIsComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  const onClickComplete = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://62aba022a62365888bdf249b.mockapi.io/orders",
        { items: cartItems }
      );
      setOrderId(data.id);
      setIsComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://62aba022a62365888bdf249b.mockapi.io/cart/" + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert("не удалось создать заказ");
    }
    setIsLoading(false);
  };
  return (
    <div className={styles.overlay} onClick={onCloseCart}>
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img
            className={styles.removeBtn}
            src="img/btn-remove.svg"
            alt="remove"
            onClick={onCloseCart}
          />
        </h2>
        {items.length > 0 ? (
          <>
            <div className={styles.items}>
              {items.map((obj, index) => {
                return (
                  <div className={styles.cartItem} key={index}>
                    <div
                      style={{ backgroundImage: `url(${obj.imageUrl})` }}
                      className={styles.cartItemImg}
                    ></div>
                    <div className="mr-20">
                      <p className="mb-5">{obj.title}</p>
                      <b>{obj.price} руб.</b>
                    </div>
                    <img
                      className={styles.removeBtn}
                      src="img/btn-remove.svg"
                      alt="remove"
                      onClick={() => onRemove(obj.id)}
                    />
                  </div>
                );
              })}
            </div>
            <div className={styles.cartTotalBlock}>
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{Math.round(totalPrice * 0.05)} руб.</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickComplete}
                className={styles.greenButton}
              >
                Оформить заказ
                <img src="img/arrow.svg" alt="arrow" width={14} height={12} />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isComplete ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            image={isComplete ? "img/buy.png" : "img/empty-cart.jpg"}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
