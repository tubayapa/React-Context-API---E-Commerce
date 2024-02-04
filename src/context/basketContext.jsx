import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket", []);

  // add to cart

  const addToBasket = (newProduct) => {
    // has item is added in cart before?

    const found = basket.find((i) => i.id === newProduct.id);

    if (found) {
      // if there is updated amount

      const updated = { ...found, amount: found.amount + 1 };

      // give new item instead of old

      const newBasket = basket.map((item) =>
        item.id === updated.id ? updated : item
      );

      // update state

      setBasket(newBasket);

      toast.info("Item amount is updated");

      //if cart hasnt item, add
    } else {
      setBasket([...basket, { ...newProduct, amount: 1 }]);
      toast.success("Item is added");
    }
  };

  //remove item from cart

  const removeFromBasket = (delete_id) => {
    const found = basket.find((i) => i.id === delete_id);

    if (found.amount > 1) {
      //  If the amount is more than 1, decrease by 1
      const updated = {
        ...found,
        amount: found.amount - 1,
      };

      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));

      setBasket(newBasket);
    } else {
      //if the amount equal 1 remove item
      const filtered = basket.filter((i) => i.id !== delete_id);
      setBasket(filtered);
    }
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
}
