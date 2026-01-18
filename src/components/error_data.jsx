function ErrorData() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-4xl font-bold mb-2 text-red-500">
        Error Loading Data
      </h1>
      <p>There was an error fetching the data. Please try again later.</p>
    </div>
  );
}

export default ErrorData;
