import useFetch from "../hooks/use_fetch";
import { useParams } from "react-router";

function TaskDetails() {
  const { taskId } = useParams();

  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${taskId}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl underline mt-4">Task Details</h1>
      <div
        key={data.id}
        className="flex flex-col justify-between gap-4 border border-gray-400 dark:bg-gray-900 hover:bg-gray-300 hover:dark:bg-gray-800 bg-gray-200 px-4 py-4 rounded-lg
        mx-4 my-4 animate-spin"
      >
        <div>
          <p className="text-sm flex justify-end">#{data.id}</p>
          <h2 className="text-2xl">{data.title}</h2>
          <p className="text-sm">Created By User {data.userId}</p>
        </div>
          <button
            className={
              data.completed
                ? "bg-green-500 text-white  px-2 py-1 rounded font-bold"
                : "bg-orange-500 text-white  px-2 py-1 rounded font-bold"
            }
          >
            {data.completed ? "Completed" : "Incomplete"}
          </button>
      </div>
    </div>
  );
}

export default TaskDetails;
