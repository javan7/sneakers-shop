import React from "react";
import styles from "./Card.module.scss";

function Card({
  id,
  title,
  price,
  imageUrl,
  onFavorite,
  onPlus,
  favorited = false,
}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, price, imageUrl });
    setIsAdded(!isAdded);
  };
  const onClickFavorite = () => {
    onFavorite({ id, title, price, imageUrl });
    setIsFavorite(!isFavorite);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          src={isFavorite ? "img/heard-liked.svg" : "img/heard-unliked.svg"}
          alt="unliked"
          width={32}
          height={32}
          onClick={onClickFavorite}
        />
      </div>
      <img height={112} width={133} src={imageUrl} alt="" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <div className={styles.plus}>
          <img
            src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
            alt="plus"
            width={32}
            height={32}
            onClick={onClickPlus}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
