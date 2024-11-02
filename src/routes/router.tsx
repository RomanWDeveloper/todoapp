import { App } from "@/views/App";
import { Home } from "@/views/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,

      children: [
        {
          path: "/",
          index: true,
          element: <Home/>,
        },
      ],
    },
]);

export default router;