import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Wallet from "./components/Wallet";
import Home from "./components/Home";
import Member from "./components/Member";
import "./App.css";

const App = () => {

  const router = createBrowserRouter([
    {path: "/", element: <Wallet />},
    {path: "/home", element: <Home />},
    {path: "/members", element: <Member />},
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App