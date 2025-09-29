import { useState } from "react";

export default function TaskItem({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (!newText.trim()) return;
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li
      className={`p-3 rounded shadow flex justify-between items-center ${
        task.completed ? "bg-green-100" : "bg-white"
      }`}
    >
      <div className="flex flex-col text-left flex-1">
        {isEditing ? (
          <form onSubmit={handleEditSubmit} className="flex gap-2">
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="border rounded p-1 w-full"
            />
            <button className="bg-green-500 text-white px-2 rounded hover:bg-green-600">
              ✅
            </button>
          </form>
        ) : (
          <>
            <p className={task.completed ? "line-through text-gray-500" : ""}>
              {task.text}
            </p>
            <span className="text-xs text-gray-400">Autor: {task.author}</span>
          </>
        )}
      </div>

      <div className="flex gap-2 ml-4">
        <button
          onClick={() => toggleTask(task.id)}
          className="text-sm bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
        >
          {task.completed ? "Desmarcar" : "Completar"}
        </button>

        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-sm bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
        >
          ✏️ Editar
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="text-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          🗑️ Eliminar
        </button>
      </div>
    </li>
  );
}
