import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

export default function SearchBar({ search, setSearch }) {
  const [inputValue, setInputValue] = useState(search);
  const [loading, setLoading] = useState(false);

  const debouncedValue = useDebounce(inputValue, 150);

  useEffect(() => {
    setLoading(true); // empieza la carga cuando cambia el input
    const timeout = setTimeout(() => {
      setSearch(debouncedValue);
      setLoading(false); // termina la carga cuando aplica el debounce
    }, 300);

    return () => clearTimeout(timeout);
  }, [debouncedValue, setSearch]);

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Buscar tarea o autor..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full p-2 border-2 rounded bg-white pr-10"
      />

      {/* Loader (circulito) */}
      {loading && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <svg
            className="animate-spin h-5 w-5 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        </div>
      )}
    </div>
  );
}
