import { App } from "@/layouts/App";
import { Auth } from "@/layouts/Auth";
import { Home } from "@/views/App/Home";
import { Settings } from "@/views/App/Settings";
import { Login } from "@/views/Auth/Login";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      // laoyout
      element: <App/>,

      children: [
        {
          path: "/",
          index: true,
          element: <Home/>,
        },
        {
          path: "/settings/",
          element: <Settings/>,
        },
      ],
    },

    {
      path: "/auth",
      // layout
      element: <Auth/>,

      children: [
        {
          path: "/auth/login",
          element: <Login/>,
        },
      ],

    }
]);

export default router;