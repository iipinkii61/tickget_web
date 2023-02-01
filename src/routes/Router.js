import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BookingPage from "../pages/BookingPage";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    path: "/booking",
    element: <BookingPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
