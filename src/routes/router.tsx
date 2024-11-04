import { App } from "@/layouts/App";
import { createBrowserRouter } from "react-router-dom";
import { main } from "./main";
import { auth } from "./auth";

import { SETTINGS } from "@/configs/links/settings";
import { TASK } from "@/configs/links/task";
import { USERS } from "@/configs/links/users";
import { Auth } from "@/layouts/Auth";
import { Home } from "@/views/Main/Home";
import { Invites } from "@/views/Main/Users/Invites";
import { Settings } from "@/views/Main/Settings";
import { TaskForm } from "@/views/Main/TaskForm";
import { Login } from "@/views/Auth/Login";
import { Users } from "@/views/Main/Users";
import { Main } from "@/layouts/Main";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,

      children: [
        main,
        auth,
      ],
    },
]);

export default router;