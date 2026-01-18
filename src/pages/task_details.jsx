import ErrorData from "../components/error_data";
import TaskStatusButton from "../components/task_status_button";
import useFetch from "../hooks/use_fetch";
import { useParams } from "react-router";

function TaskDetails() {
  const { taskId } = useParams();

  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${taskId}`,
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorData />;

  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="bg-orange-500 dark:bg-blue-500 mx-20 my-4 py-2 rounded-lg">
        <h1 className="text-4xl text-center text-white font-bold w-xl">
          Task Details
        </h1>
      </div>
      <div
        key={data.id}
        className="flex flex-col justify-between gap-40 border border-gray-400 dark:bg-gray-900 bg-gray-200 px-8 py-8 rounded-lg
         w-xl text-xl"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl flex justify-end">#{data.id}</h1>
          <h2 className="text-4xl">{data.title}</h2>
          <p className="text-xl">Created By User {data.userId}</p>
        </div>
        <TaskStatusButton status={data.completed} />
      </div>
    </div>
  );
}

export default TaskDetails;
