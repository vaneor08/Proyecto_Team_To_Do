import { useState } from "react";
import Login from "./components/Login";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [search, setSearch] = useState("");

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const logout = () => {
    setUser(null);
  };

  const filteredTasks = tasks.filter(
    (t) =>
      t.text.toLowerCase().includes(search.toLowerCase()) ||
      t.author.toLowerCase().includes(search.toLowerCase())
  );

  if (!user) return <Login setUser={setUser} />;

  return (
    <div className="min-h-screen bg-blue-200 p-6">
      <div className="flex justify-end mb-6">
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Cerrar sesión
        </button>
      </div>

      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold mb-2">Team To-Do ✅</h1>
        <p className="mb-6">Bienvenido, {user} 👋</p>

        <div className="w-full max-w-2xl space-y-4">
          <TaskForm addTask={addTask} author={user} />
          <SearchBar search={search} setSearch={setSearch} />
          <TaskList tasks={filteredTasks} toggleTask={toggleTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
