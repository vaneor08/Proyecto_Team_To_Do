import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./components/Login";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";
import ProtectedRoute from "./components/ProtectedRoute";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const debouncedSearch = useDebounce(search, 150);

  // 📌 Cargar tareas desde JSON Server
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:4000/tasks");
        setTasks(res.data);
      } catch (err) {
        setError("Hubo un error al cargar las tareas ❌");
        toast.error("Error al cargar tareas ❌");
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  // 📌 Crear tarea
  const addTask = async (task) => {
    try {
      const res = await axios.post("http://localhost:4000/tasks", task);
      setTasks([...tasks, res.data]);
      toast.success("Tarea creada ✅");
    } catch (err) {
      toast.error("Error al crear tarea ❌");
    }
  };

  // 📌 Alternar completado
  const toggleTask = async (id) => {
    const task = tasks.find((t) => t.id === id);
    try {
      const res = await axios.put(`http://localhost:4000/tasks/${id}`, {
        ...task,
        completed: !task.completed,
      });
      setTasks(tasks.map((t) => (t.id === id ? res.data : t)));
      toast.info("Estado actualizado 🔄");
    } catch (err) {
      toast.error("Error al actualizar tarea ❌");
    }
  };

  // 📌 Eliminar tarea
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/tasks/${id}`);
      setTasks(tasks.filter((t) => t.id !== id));
      toast.success("Tarea eliminada 🗑️");
    } catch (err) {
      toast.error("Error al eliminar tarea ❌");
    }
  };

  // 📌 Editar tarea
  const editTask = async (id, newText) => {
    const task = tasks.find((t) => t.id === id);
    try {
      const res = await axios.put(`http://localhost:4000/tasks/${id}`, {
        ...task,
        text: newText,
      });
      setTasks(tasks.map((t) => (t.id === id ? res.data : t)));
      toast.success("Tarea editada ✏️");
    } catch (err) {
      toast.error("Error al editar tarea ❌");
    }
  };

  const logout = () => setUser(null);

  const filteredTasks = tasks.filter(
    (t) =>
      t.text.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      t.author.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <Router>
      <Routes>
        {/* Ruta pública: Login */}
        <Route path="/login" element={<Login setUser={setUser} />} />

        {/* Ruta protegida: Lista de tareas */}
        <Route
          path="/tasks"
          element={
            <ProtectedRoute user={user}>
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

                  {/* 📌 Loading y error */}
                  {loading && <p className="text-gray-600">Cargando tareas...</p>}
                  {error && <p className="text-red-500">{error}</p>}

                  <div className="w-full max-w-2xl space-y-4">
                    <TaskForm addTask={addTask} author={user} />
                    <SearchBar search={search} setSearch={setSearch} />
                    <TaskList
                      tasks={filteredTasks}
                      toggleTask={toggleTask}
                      deleteTask={deleteTask}
                      editTask={editTask}
                    />
                  </div>
                </div>
              </div>
              <ToastContainer position="top-right" autoClose={3000} />
            </ProtectedRoute>
          }
        />

        {/* Redirección por defecto */}
        <Route path="*" element={<Login setUser={setUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
