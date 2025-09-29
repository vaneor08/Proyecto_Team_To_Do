📌 Team To-Do ✅

Aplicación colaborativa de gestión de tareas desarrollada con React 19 + Vite + TailwindCSS y simulación de backend con JSON Server. Permite a un equipo crear, editar, eliminar, buscar y filtrar tareas en tiempo real.

🚀 Características principales

✅ Autenticación simulada: inicio/cierre de sesión con usuarios predefinidos.

📝 Gestión de tareas: crear, editar, completar, desmarcar y eliminar tareas.

🔎 Búsqueda dinámica con debounce: filtra tareas por autor o texto en tiempo real.

🔄 Estados de carga y error: indicador de “cargando…” y manejo de errores en UI.

🔔 Notificaciones con Toastify: retroalimentación visual al crear, editar o borrar.

🔒 Rutas protegidas: acceso a /tasks solo si hay sesión iniciada.

🎨 Diseño responsivo con Tailwind CSS.

🗂️ Arquitectura de componentes modular y reutilizable.

📡 Consumo de API con Axios hacia JSON Server.

📂 Estructura del Proyecto src/ │── components/ │ ├── Login.jsx │ ├── TaskForm.jsx │ ├── TaskList.jsx │ ├── TaskItem.jsx │ ├── SearchBar.jsx │ └── ProtectedRoute.jsx │ │── hooks/ │ ├── useDebounce.js │ └── useLocalStorage.js │ │── App.jsx │── main.jsx │── index.css │ db.json # Base de datos simulada para JSON Server

⚙️ Instalación y configuración

Clonar repositorio

git clone https://github.com/tuusuario/Team-To-Do.git cd Team-To-Do

Instalar dependencias

npm install

Levantar servidor JSON Server

npx json-server --watch db.json --port 4000

Ejecutar proyecto

npm run dev

🔑 Usuarios Simulados

Para acceder, usa alguno de estos usuarios en el login:

Usuario Contraseña Nataly123 nataly123 Alison123 alison123 Andres123 andres123 🛠️ Tecnologías utilizadas

React 19

Vite

TailwindCSS

Axios

React Router DOM

React Toastify

JSON Server

ESLint + Prettier

📌 Flujo de uso

Iniciar sesión con un usuario válido.

Crear una nueva tarea (se guarda en JSON Server).

Editar o marcar como completada una tarea.

Buscar tareas por texto o autor en tiempo real.

Eliminar una tarea.

Cerrar sesión.

👥 Autores

Nataly

Alison

Andrés

Cada integrante desarrolló y documentó un componente específico, además de colaborar en la integración y pruebas finales.

📽️ Demo Final

La presentación incluye:

Explicación del enunciado.

Arquitectura del proyecto.

Flujo completo de autenticación y tareas.

Demo en vivo con creación, edición, búsqueda y eliminación de tareas.
