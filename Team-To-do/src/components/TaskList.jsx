import TaskItem from "./TaskItem";

export default function TaskList({ tasks, toggleTask }) {
  if (!tasks.length) {
    return <p className="text-center text-gray-500">No hay tareas 😴</p>;
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
      ))}
    </ul>
  );
}
