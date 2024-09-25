import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import { ShowChild } from "../components/Outlet";
import SingleProducts from "../pages/SingleProducts";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Outlet />} >
        <Route index element={<ProductList />} />
        <Route path=":id" element={<SingleProducts />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
