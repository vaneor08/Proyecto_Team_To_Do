export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Buscar tarea o autor..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-2 border-2 rounded bg-white"
    />
  );
}
