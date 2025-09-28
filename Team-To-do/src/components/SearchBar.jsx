export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Buscar tarea o autor..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full border rounded p-2 mb-4"
    />
  );
}
