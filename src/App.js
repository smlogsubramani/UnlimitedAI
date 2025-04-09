import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Service"
import Usecase from "./pages/Usecase"

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
      path: "/service",
      element: <Service/>
    },
    {
      path: "/Usecase",
      element: <Usecase/>
    },
  ]);

const Router = () => (
    <div>
        <RouterProvider router={router} />
    </div>
);

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
