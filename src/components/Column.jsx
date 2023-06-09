import { useStore } from "../store";
import "./Column.css";
import Task from "./Task";
import { useMemo } from "react";

export default function Column({ state }) {
  const tasks = useStore((store) => store.tasks);
  //this is a solution for  not re-rendering the tasks
  const filteredTasks = useMemo(
    () => tasks.filter((task) => task.state === state),
    [tasks, state]
  );
  return (
    <div className="column">
      <p>{state}</p>
      {filteredTasks.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}
    </div>
  );
}
