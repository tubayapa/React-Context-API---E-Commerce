import { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import BasketItem from "../components/BasketItem";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { basket, addToBasket, removeFromBasket } = useContext(BasketContext);

  const totalAmount = basket.reduce((total, i) => total + i.amount, 0);

  const TotalPrice = basket
    .reduce((total, i) => total + i.price * i.amount, 0)
    .toFixed(2);

  return (
    <div className="container my-5">
      <div className="d-flex flex-column gap-5">
        {/* list if cart has a item */}
        {basket.length === 0 && (
          <p className="text-center my-5">
            <span className="mx-3"> Add to cart an item</span>
            <Link to={"/"}>Products</Link>
          </p>
        )}

        {/* dont list if cart hasnt item */}
        {basket.map((item) => (
          <BasketItem
            key={item.id}
            item={item}
            addToBasket={addToBasket}
            removeFromBasket={removeFromBasket}
          />
        ))}
      </div>
      <div className="border p-5 rounded my-5 fs-4">
        <h5>
          Selected Products:{""}{" "}
          <span className="text-warning">
            {totalAmount} {""} items
          </span>
        </h5>
        <h5>
          Total Price: {""}{" "}
          <strong className="text-success">{TotalPrice} £</strong>
        </h5>
      </div>
    </div>
  );
};

export default CheckoutPage;
