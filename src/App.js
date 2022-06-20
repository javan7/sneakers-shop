import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import axios from "axios";
import React from "react";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://62aba022a62365888bdf249b.mockapi.io/items")
      .then((res) => setItems(res.data));
    axios
      .get("https://62aba022a62365888bdf249b.mockapi.io/cart")
      .then((res) => setCartItems(res.data));
    axios
      .get("https://62aba022a62365888bdf249b.mockapi.io/favorite")
      .then((res) => setFavorites(res.data));
  }, []);

  const onAdToCart = async (obj) => {
    const { data } = await axios.post(
      "https://62aba022a62365888bdf249b.mockapi.io/cart",
      obj
    );
    setCartItems((prev) => [...prev, data]);
  };

  const onRemoveCartItem = (id) => {
    axios.delete(`https://62aba022a62365888bdf249b.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    console.log(id);
  };

  const onChangeSearchInput = (event) => setSearchValue(event.target.value);

  const onAddToFavorite = async (obj) => {
    if (favorites.find((favObj) => favObj.id === obj.id)) {
      axios.delete(
        `https://62aba022a62365888bdf249b.mockapi.io/favorite/${obj.id}`
      );
    } else {
      const { data } = await axios.post(
        "https://62aba022a62365888bdf249b.mockapi.io/favorite",
        obj
      );
      setFavorites((prev) => [...prev, data]);
    }
  };
  return (
    <BrowserRouter>
      <div className="wrapper clear">
        {cartOpened && (
          <Drawer
            items={cartItems}
            onCloseCart={() => setCartOpened(false)}
            onRemove={onRemoveCartItem}
          />
        )}
        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAdToCart={onAdToCart}
              />
            }
          ></Route>
          <Route
            path="favorites"
            element={
              <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
