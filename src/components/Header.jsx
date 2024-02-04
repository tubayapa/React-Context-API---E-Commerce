import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ProductContext } from "../context/productContext";
import { BasketContext } from "../context/basketContext";

const Header = () => {
  const { setCategory } = useContext(ProductContext);
  const { basket } = useContext(BasketContext);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")

      .then((res) => {
        setCategories(res.data);
      });
  }, []);

  // calculate items in cart

  const total = basket.reduce((total, product) => total + product.amount, 0);

  return (
    <nav className="navbar navbar-dark bg-black sticky-top fixed-top navbar-expand-md">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Context Store
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header bg-black">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Context Store
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body bg-black">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-4">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="checkout">
                  <span>Cart</span>
                  <span className="badge bg-danger ms-2">{total}</span>
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li onClick={() => setCategory("all")}>
                    <a className="dropdown-item " href="#">
                      All
                    </a>
                  </li>
                  {categories?.map((cat) => (
                    <li onClick={() => setCategory(cat)}>
                      <a className="dropdown-item " href="#">
                        {cat}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
