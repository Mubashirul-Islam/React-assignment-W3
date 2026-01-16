import useFetch from "../hooks/use_fetch";
import { useState } from "react";
import { Link } from "react-router";

function TaskList() {

  const limit = 20;
  const [offset, setOffset] = useState(0);
  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_start=${offset}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl underline mb-4 mt-4">Tasks List</h1>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 px-20 mb-10">
        {data.map((task) => (
          <div
            key={task.id}
            className="flex flex-col justify-between gap-4 border border-gray-400 dark:bg-gray-900 hover:bg-gray-300 hover:dark:bg-gray-800 bg-gray-200 px-4 py-4 rounded-lg"
          >
            <div>
              <p className="text-sm flex justify-end">#{task.id}</p>
              <h2 className="text-2xl">{task.title}</h2>
              <p className="text-sm">Created By User {task.userId}</p>
            </div>
            <div className="flex sm:flex-col md:flex-row items-center justify-between gap-4 sm:items-stretch">
              
                <button className="bg-blue-500 text-white px-2 py-1 rounded font-bold">
                  <Link to={`/tasks/${task.id}`}>
                  View Details
                  </Link>
                </button>
              <button
                className={
                  task.completed
                    ? "bg-green-500 text-white  px-2 py-1 rounded font-bold"
                    : "bg-orange-500 text-white  px-2 py-1 rounded font-bold"
                }
              >
                {task.completed ? "Completed" : "Incomplete"}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex sm:flex-col md:flex-row sm:gap-10 md:gap-20 justify-center min-w-screen px-20 mb-20 text-center">
        <button className="rounded px-4 py-1 bg-orange-500 dark:bg-blue-500 text-white font-bold disabled:dark:bg-blue-700 disabled:bg-orange-700"
        onClick={() => setOffset(prev => prev - limit)}
        disabled={offset === 0}
        >{"< Previous"}</button>
        Showing {offset + 1}-{offset + limit} of 200 tasks
        <button className="rounded px-4 py-1 bg-orange-500 dark:bg-blue-500 text-white font-bold disabled:dark:bg-blue-700 disabled:bg-orange-700"
        disabled={offset + limit >= 200}
        onClick={() => setOffset(prev => prev + limit)}
        >{"Next >"}</button>
      </div>
    </div>
  );
}

export default TaskList;
