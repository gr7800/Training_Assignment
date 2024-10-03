import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeWrapper from "../pages/HomeWrapper";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Blog from "../pages/Blog";
import {
  fetchData,
  handleCartFetch,
  handleSingleBlogFetch,
} from "../utils/helper";
import { BaseBlogUrl, BaseUrlProduct } from "../utils/constant";
import SingleBlog from "../pages/SingleBlog";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeWrapper />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetchData(`${BaseUrlProduct}?limit=4`),
      },
      {
        path: "/products",
        element: <Products />,
        loader: () => fetchData(BaseUrlProduct),
      },
      {
        path: "/cart",
        element: <Cart errorOnCurrencyChange={false}/>,
        loader: handleCartFetch,
        errorElement: <Cart errorOnCurrencyChange={true}/>,
      },
      {
        path: "/blog",
        children: [
          {
            index: true,
            element: <Blog />,
            loader: () => fetchData(BaseBlogUrl),
          },
          {
            path: ":id",
            element: <SingleBlog />,
            loader: handleSingleBlogFetch,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export const AllRoutes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
