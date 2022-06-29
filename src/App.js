import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";
import axios from "axios";
import React, { createContext } from "react";

export const AppContext = createContext({});

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState("");
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const cartResponse = await axios.get(
        "https://62aba022a62365888bdf249b.mockapi.io/cart"
      );

      const favoritesResponse = await axios.get(
        "https://62aba022a62365888bdf249b.mockapi.io/favorite"
      );

      const itemsResponse = await axios.get(
        "https://62aba022a62365888bdf249b.mockapi.io/items"
      );

      setIsLoading(false);
      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);

      console.log(favoritesResponse.data);
    }
    fetchData();
  }, []);

  const onAdToCart = async (obj) => {
    const findItem = cartItems.find(
      (item) => Number(item.parentId) === Number(obj.id)
    );
    if (findItem) {
      axios.delete(
        `https://62aba022a62365888bdf249b.mockapi.io/cart/${findItem.id}`
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.parentId) !== Number(obj.id))
      );
    } else {
      setCartItems((prev) => [...prev, obj]);
      const { data } = await axios.post(
        "https://62aba022a62365888bdf249b.mockapi.io/cart",
        obj
      );
      setCartItems((prev) =>
        prev.map((item) => {
          if (item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id,
            };
          }
          return item;
        })
      );
    }
  };

  const onRemoveCartItem = (id) => {
    axios.delete(`https://62aba022a62365888bdf249b.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => setSearchValue(event.target.value);

  const onAddToFavorite = (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://62aba022a62365888bdf249b.mockapi.io/favorite/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        axios.post("https://62aba022a62365888bdf249b.mockapi.io/favorite", obj);
        setFavorites((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert("Не удалось добавить");
    }
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };
  return (
    <BrowserRouter>
      <AppContext.Provider
        value={{
          cartItems,
          favorites,
          items,
          onAddToFavorite,
          isItemAdded,
          onAdToCart,
          setCartOpened,
          setCartItems,
        }}
      >
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
              path="sneakers-shop"
              element={
                <Home
                  items={items}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  onChangeSearchInput={onChangeSearchInput}
                  onAddToFavorite={onAddToFavorite}
                  onAdToCart={onAdToCart}
                  cartItems={cartItems}
                  isLoading={isLoading}
                />
              }
            ></Route>
            <Route
              path="sneakers-shop/favorites"
              element={<Favorites />}
            ></Route>
            <Route path="sneakers-shop/orders" element={<Orders />}></Route>
          </Routes>
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
