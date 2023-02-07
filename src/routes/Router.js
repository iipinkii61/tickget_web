import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BookingPage from "../pages/BookingPage";
import HomePage from "../pages/HomePage";
import ListPage from "../pages/ListPage";
import OrderSummaryPage from "../pages/OrderSummaryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/booking",
    element: <BookingPage />,
  },
  {
    path: "/lists",
    element: <ListPage />,
  },
  {
    path: "/sum",
    element: <OrderSummaryPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
