// subscribe the context
import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import Loader from "../components/Loader";
import Card from "../components/Card";

const HomePage = () => {

  const { products, category } = useContext(ProductContext);

  return (
    <div className="container">
      <button className="btn btn-success my-4"> {category && category}</button>
      <div className=" d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-4 my-5 ">
        {/* if data hasnt arrived yet show loader */}
        {!products && <Loader />}

        {/* if it has show card */}

        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
