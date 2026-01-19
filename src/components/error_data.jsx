function ErrorData() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-red-500">
        Error Loading Data
      </h1>
      <p>There was an error fetching the data. Please try again later.</p>
    </div>
  );
}

export default ErrorData;
