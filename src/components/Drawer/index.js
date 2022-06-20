import React from "react";
import styles from "./Drawer.module.scss";

function Drawer({ onCloseCart, onRemove, items = [] }) {
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
                  <b>21 498 руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button className={styles.greenButton}>
                Оформить заказ
                <img src="/img/arrow.svg" alt="arrow" width={14} height={12} />
              </button>
            </div>
          </>
        ) : (
          <div className="cart-empty d-flex align-center justify-center flex-column flex text-center">
            <img
              className="mb-20"
              width={120}
              height={120}
              src="/img/empty-cart.jpg"
              alt="empty-cart"
            />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">
              Добавьте хотя бы одну пару кроссовок,чтобы сделать заказ
            </p>
            <button onClick={onCloseCart} className="green-button">
              <img src="/img/arrow.svg" alt="empty-arrow" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
