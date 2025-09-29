import { useState } from "react";

export default function TaskForm({ addTask, author }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask({ author, text, completed: false });
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 mb-4"
    >
      <input
        type="text"
        placeholder="Escribe una tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border-2 rounded bg-white"
      />
      <button className="bg-green-500 text-white px-4 rounded hover:bg-green-600">
        ➕
      </button>
    </form>
  );
}
