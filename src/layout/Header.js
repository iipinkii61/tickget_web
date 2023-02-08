import { useState } from "react";
import logo from "../assets/images/Tick&Get.png";
import LoginModal from "../components/LoginModal";
import ToggleAuth from "../components/ToggleAuth";
import useAuth from "../hooks/useAuth";

export default function Header() {
  const { authenticatedUser } = useAuth();
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <div className="bg-black">
        <nav className="p-1 flex justify-between space-x-11 bg-black mx-4 ">
          <a href="/">
            <img src={logo} alt="logo" className="h-12 " />
          </a>
          {authenticatedUser ? (
            <button
              className="m-2 py-1 px-6 bg-bluer text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              onClick={() => setDropdown(!dropdown)}
            >
              {authenticatedUser.firstName} {authenticatedUser.lastName}
            </button>
          ) : (
            <button
              className="m-2 py-1 px-6 bg-purpling text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Login
            </button>
          )}
        </nav>
      </div>
      <LoginModal />
      {authenticatedUser && dropdown ? <ToggleAuth /> : <></>}
    </>
  );
}
