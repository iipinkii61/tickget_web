import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BookingPage from "../pages/BookingPage";
import HomePage from "../pages/HomePage";
import ListPage from "../pages/ListPage";
import OrderSummaryPage from "../pages/OrderSummaryPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedRoute from "../components/ProtectedRoute";
import AuthLayout from "../layout/AuthLayout";
import RedirectIfAuthenticate from "../components/RedirectIfAuthenticate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/booking",
    element: <BookingPage />,
  },
  {
    element: (
      <ProtectedRoute>
        <AuthLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/sum",
        element: <OrderSummaryPage />,
      },
      {
        path: "/lists",
        element: <ListPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
