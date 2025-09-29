import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { login } = useAuth(); // 👈 usamos el contexto en lugar de setUser

  const users = [
    { username: "Nataly123", password: "nataly123" },
    { username: "Alison123", password: "alison123" },
    { username: "Andres123", password: "andres123" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    const found = users.find(
      (u) => u.username === username && u.password === password
    );

    if (found) {
      login(found.username); // 👈 ahora usamos login()
      navigate("/tasks");    // 👈 redirige a /tasks
    } else {
      setError("Credenciales inválidas ❌");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-200">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-xl space-y-5 w-96"
      >
        <h2 className="text-2xl font-bold text-center">Iniciar sesión</h2>

        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-lg"
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600">
          Entrar
        </button>
      </form>
    </div>
  );
}
