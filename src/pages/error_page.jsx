function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-red-500">
        Error 404
      </h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

export default ErrorPage;
