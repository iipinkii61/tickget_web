import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const { authenticatedUser } = useAuth();
  if (!authenticatedUser) {
    return <Navigate to={"/"} />;
  }
  return children;
}
// ถ้าไม่ได้ login อยู่ (ยังไม่มี token) ให้ไปหน้า home
