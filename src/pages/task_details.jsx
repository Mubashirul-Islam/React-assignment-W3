function TaskDetails() {
    return (
        <div className="flex flex-col items-center min-h-screen mt-4">
            <h1 className="text-4xl underline mb-4">Task Details</h1>
            <div className="border border-gray-400 bg-gray-200 px-14 py-14 mt-40 rounded-lg">
                <p className="text-sm flex justify-end">#1</p>
                <h4 className="text-4xl">Title for Task 1</h4>
                <p className="mb-14 text-lg">Created By User 1</p>
                <button className="bg-green-500 text-white  px-4 py-2 rounded font-bold w-full flex justify-center">Completed</button>
            </div>
        </div>
    );
}

export default TaskDetails;