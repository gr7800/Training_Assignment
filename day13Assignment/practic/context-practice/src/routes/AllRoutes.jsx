import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeWrapper from "../pages/HomeWrapper";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Blog from "../pages/Blog";
import { fetchData, handleCartFetch } from "../utils/helper";
import { BaseUrlProduct } from "../utils/constant";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeWrapper />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetchData(`${BaseUrlProduct}?limit=4`)
      },
      {
        path: "/products",
        element: <Products />,
        loader: () => fetchData(BaseUrlProduct)
      },
      {
        path: "/cart",
        element: <Cart />,
        loader: handleCartFetch
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export const AllRoutes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
