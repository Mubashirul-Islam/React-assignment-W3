function TaskCardShimmer() {
  return (
    <div className="flex flex-col justify-between gap-4 border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-900 px-4 py-4 rounded-lg animate-pulse">
      <div className="space-y-3">
        <div className="h-3 w-10 bg-gray-300 dark:bg-gray-700 rounded ml-auto"></div>
        <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>

      <div className="flex sm:flex-col md:flex-row gap-4">
        <div className="h-8 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-8 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  );
}

function TaskListShimmer() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header shimmer */}
      <div className="mx-20 my-4 py-4 rounded-lg bg-gray-300 dark:bg-gray-700 animate-pulse"></div>

      {/* Grid shimmer */}
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 px-20 mb-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <TaskCardShimmer key={i} />
        ))}
      </div>

      {/* Pagination shimmer */}
      <div className="flex justify-center gap-10 px-20 mb-20">
        <div className="h-8 w-32 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
        <div className="h-6 w-48 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
        <div className="h-8 w-32 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
      </div>
    </div>
  );
}

export default TaskListShimmer;
