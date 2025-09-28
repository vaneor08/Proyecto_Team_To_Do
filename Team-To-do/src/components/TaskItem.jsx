export default function TaskItem({ task, toggleTask }) {
  return (
    <li
      className={`p-3 rounded shadow flex justify-between items-center ${
        task.completed ? "bg-green-100" : "bg-white"
      }`}
    >
      <div>
        <p className={task.completed ? "line-through text-gray-500" : ""}>
          {task.text}
        </p>
        <span className="text-xs text-gray-400">Autor: {task.author}</span>
      </div>
      <button
        onClick={() => toggleTask(task.id)}
        className="text-sm bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
      >
        {task.completed ? "Desmarcar" : "Completar"}
      </button>
    </li>
  );
}
