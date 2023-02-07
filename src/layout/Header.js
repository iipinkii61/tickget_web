import logo from "../assets/images/Tick&Get.png";
import { useState } from "react";
import Modal from "../components/Modal";
import LoginForm from "../components/LoginForm";

export default function Header() {
  const [login, setLogin] = useState(false);
  return (
    <>
      <div className="bg-black">
        <nav className="p-1 flex justify-between space-x-11 bg-black mx-4 ">
          <a href="/">
            <img src={logo} alt="logo" className="h-12 " />
          </a>

          <button
            className="m-2 py-1 px-6 bg-purpling text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            onClick={() => setLogin(true)}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Login
          </button>
        </nav>
      </div>
      <Modal title="Login">
        <LoginForm />
      </Modal>
      {/* <Trynew open={login} setLogin={setLogin} /> */}
    </>
  );
}
