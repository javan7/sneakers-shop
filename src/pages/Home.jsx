import React from "react";
import Card from "../components/Card";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAdToCart,
  isLoading,
}) {
  const renderItems = () => {
    const filtered = items.filter((search) =>
      search.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isLoading ? [...Array(12)] : filtered).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAdToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };
  return (
    <>
      <h1>
        {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
      </h1>
      <div className="search-block d-flex align-center">
        <img src="/img/search.svg" alt="search" width={14} height={14} />
        <input
          placeholder="Поиск..."
          value={searchValue}
          onChange={onChangeSearchInput}
        />
        {searchValue && (
          <img
            src="img/btn-remove.svg"
            alt="remove"
            width={20}
            height={20}
            onClick={() => setSearchValue("")}
          />
        )}
      </div>

      <div className="d-flex flex-wrap">{renderItems()}</div>
    </>
  );
}

export default Home;
