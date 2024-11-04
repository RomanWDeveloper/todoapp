import { Invites } from "@/views/Main/Users/Invites";
import { Users } from "@/views/Main/Users";
import { USERS } from "@/configs/links/users";

export const users = {
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