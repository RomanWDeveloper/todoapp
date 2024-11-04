import { TaskForm } from "@/views/Main/TaskForm";
import { TASK } from "@/configs/links/task";


export const task =         {
    path: TASK.path ,

    children: [
      {
        path: TASK.CREATE.path,
        element: <TaskForm/>
      }
    ]
  }