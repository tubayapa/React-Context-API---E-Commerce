import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import CheckoutPage from "./Pages/CheckoutPage";



const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/checkout" element={<CheckoutPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
