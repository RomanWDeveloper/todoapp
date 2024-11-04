import { Home } from "@/views/Main/Home";
import { Main } from "@/layouts/Main";
import { settings } from "./settings";
import { task } from "./task";
import { users } from "./users";

const routes = [settings, task, users]

export const main = {
    path: '/',
    element: <Main/>,

    children: [
        {
          path: "/",
          index: true,
          element: <Home/>,
        },

        ...routes
      ]
}