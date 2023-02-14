import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function RedirectIfAuthenticate({ children }) {
  const { authenticatedUser } = useAuth();
  if (authenticatedUser) {
    return <Navigate to={"/"} />;
  }
  return children;
}
// ถ้า authen ผ่าน redirect ไปหน้าอื่น แต่ถ้าไม่ก็อยู่หน้าเดิม
