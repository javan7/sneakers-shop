import React from "react";
import axios from "axios";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function Orders() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [orders, setOrders] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://62aba022a62365888bdf249b.mockapi.io/orders"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Не загрузились заказы");
      }
    })();
  }, []);

  return (
    <div>
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40 ">
          <h1 className="d-flex align-center">
            <Link to="/">
              <img
                className="mr-20 cu-p"
                src="img/back.svg"
                width={35}
                height={35}
                alt="back"
              />
            </Link>
            Мои заказы
          </h1>
        </div>
        <div className="d-flex flex-wrap">
          {(isLoading ? [...Array(12)] : orders).map((item, index) => (
            <Card key={index} loading={isLoading} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
