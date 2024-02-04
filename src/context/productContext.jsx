import axios from "axios";
import { createContext, useEffect, useState } from "react";




export const ProductContext = createContext();



export function ProductProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState("all");

    useEffect(() => {
      
        // know which url to use for API
    const url =
      category === "all"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${category}`;

    axios.get(url).then((res) => {
      setProducts(res.data);
    });
  }, [category]);

  //! context yapisinda tuttugumuz verileri bilesenlere sagla

  //! value olarak eklenen verilere projedeki tum bilesenler erisebilir
  return (
    <ProductContext.Provider value={{ products, category, setCategory }}>
      {children}
    </ProductContext.Provider>
  );
}
