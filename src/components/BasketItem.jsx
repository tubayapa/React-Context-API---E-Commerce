const BasketItem = ({ item, addToBasket, removeFromBasket }) => {
  return (
    <div>
      <div className="d-flex flex-md-row gap-3 align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-3 ">
          <div className="rounded bg-white">
            <img
              className="object-fit-contain"
              width={60}
              height={60}
              src={item.image}
            />
          </div>
          <h6 className="text-wrap">{item.title.slice(0, 45) + "..."}</h6>
        </div>

        <div className="d-flex align-items-center gap-3  justify-content-between">
          <div>
            <h6 className="text-success text-nowrap ">{item.price}£</h6>
            <div className="text-nowrap d-flex align-items-center gap-1">
              <small>Amount:</small>
              <small className="fw-bold">{item.amount}</small>
            </div>
          </div>

          <div className="d-flex gap-2">
            <button
              onClick={() => removeFromBasket(item.id)}
              className="btn btn-danger"
            >
              -
            </button>
            <button
              onClick={() => addToBasket(item)}
              className="btn btn-success"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
