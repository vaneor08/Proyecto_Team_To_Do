import { useState } from "react";

export default function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const users = [
    { username: "usuario1", password: "1234" },
    { username: "usuario2", password: "abcd" },
    { username: "usuario3", password: "admin" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    const found = users.find(
      (u) => u.username === username && u.password === password
    );
    if (found) {
      setUser(found.username);
    } else {
      setError("Credenciales inválidas ❌");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-200">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-xl shadow-lg space-y-4 w-80"
      >
        <h2 className="text-xl font-bold text-center">Iniciar sesión</h2>

        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Entrar
        </button>
      </form>
    </div>
  );
}
