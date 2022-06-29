import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

function Favorites() {
  const { favorites, onAddToFavorite, onAdToCart } =
    React.useContext(AppContext);
  return (
    <div>
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40 ">
          <h1 className="d-flex align-center">
            <Link to="sneakers-shop/">
              <img
                className="mr-20 cu-p"
                src="img/back.svg"
                width={35}
                height={35}
                alt="back"
              />
            </Link>
            Мои закладки
          </h1>
        </div>
        <div className="d-flex flex-wrap">
          {favorites.map((item, index) => (
            <Card
              key={index}
              onPlus={(obj) => onAdToCart(obj)}
              favorited={true}
              onFavorite={(obj) => onAddToFavorite(obj)}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
