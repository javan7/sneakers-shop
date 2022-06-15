import React from "react";

function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="img/heard-unliked.svg" alt="unliked" />
      </div>
      <img height={112} width={133} src="img/sneakers/1.jpg" alt="" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>15 999 руб.</b>
        </div>
        <button className="button">
          <img src="/img/plus.svg" alt="plus" width={11} height={11} />
        </button>
      </div>
    </div>
  );
}

export default Card;
