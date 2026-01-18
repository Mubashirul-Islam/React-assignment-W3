import { useState } from "react";

function SearchTasks({ onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  return (
    <input
      type="text"
      placeholder="Search tasks by title..."
      value={searchTerm}
      onChange={handleChange}
      className="right-2 bottom-2 rounded-lg absolute px-3 py-2 bg-white text-gray-800 placeholder-gray-500 focus:outline-blue-500 dark:focus:outline-orange-500"
    />
  );
}

export default SearchTasks;
