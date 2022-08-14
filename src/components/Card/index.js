import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";
import { AppContext } from "../../App";

function Card({
  id,
  title,
  price,
  imageUrl,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);

  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, parentId: id, price, imageUrl });
  };
  const onClickFavorite = () => {
    onFavorite({ id, title, parentId: id, price, imageUrl });
    !favorited && setIsFavorite(!isFavorite);
  };
  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={151}
          height={206}
          viewBox="0 0 151 206"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="2" y="0" rx="10" ry="10" width="133" height="112" />
          <rect x="0" y="126" rx="6" ry="6" width="150" height="34" />
          <rect x="0" y="174" rx="8" ry="8" width="80" height="32" />
          <rect x="119" y="174" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite}>
            {onFavorite && (
              <img
                src={
                  isFavorite ? "/img/heard-liked.svg" : "/img/heard-unliked.svg"
                }
                alt="unliked"
                width={32}
                height={32}
                onClick={onClickFavorite}
              />
            )}
          </div>
          <img height={112} width={133} src={imageUrl} alt="" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            <div className={styles.plus}>
              {onPlus && (
                <img
                  src={
                    isItemAdded(id)
                      ? "/img/btn-checked.svg"
                      : "/img/btn-plus.svg"
                  }
                  alt="plus"
                  width={32}
                  height={32}
                  onClick={onClickPlus}
                />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
