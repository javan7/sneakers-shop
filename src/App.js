function App() {
  return (
    <div className="wrapper clear">
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
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>

        <div className="d-flex">
          <div className="card">
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
          <div className="card">
            <img height={112} width={133} src="img/sneakers/2.jpg" alt="" />
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
          <div className="card">
            <img height={112} width={133} src="img/sneakers/3.jpg" alt="" />
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
          <div className="card">
            <img height={112} width={133} src="img/sneakers/4.jpg" alt="" />
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
        </div>
      </div>
    </div>
  );
}

export default App;
