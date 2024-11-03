import { SETTINGS } from "@/configs/links/settings";
import { TASK } from "@/configs/links/task";
import { USERS } from "@/configs/links/users";
import { App } from "@/layouts/App";
import { Auth } from "@/layouts/Auth";
import { Home } from "@/views/App/Home";
import { Invites } from "@/views/App/Users/Invites";
import { Settings } from "@/views/App/Settings";
import { TaskForm } from "@/views/App/TaskForm";
import { Login } from "@/views/Auth/Login";
import { createBrowserRouter } from "react-router-dom";
import { Users } from "@/views/App/Users";

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
        {
          path: SETTINGS.path,
          element: <Settings/>,
        },

        {
          path: TASK.path ,

          children: [
            {
              path: TASK.CREATE.path,
              element: <TaskForm/>
            }
          ]
        }, 
        {
          path: USERS.path,
          element: <Users/>,

          children: [
            {
              index: true,
              path: USERS.INVITES.path,
              element: <Invites/>
            },
            {
              path: USERS.FRIENDS.path,
              element: <Invites/>
            }

          ]
        }
      ],
    },

    {
      path: "/auth/",
      element: <Auth/>,

      children: [
        {
          index: true,
          path: "/auth/",
          element: <Login/>,
        },
      ],

    }
]);

export default router;