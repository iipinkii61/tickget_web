import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./layout/Header";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <Header />
      <Router />
      <ToastContainer autoClose="1000" theme="light" position="top-center" />
    </>
  );
}

export default App;
