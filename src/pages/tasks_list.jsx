function TaskList() {
    return (
        <div className="flex flex-col items-center min-h-screen mt-4">
            <h1 className="text-4xl underline mb-4">Tasks List</h1>
            <div className="grid grid-cols-4 gap-8 px-6">
                <div className="border border-gray-400 bg-gray-200 px-4 py-4 rounded-lg">
                    <p className="text-sm flex justify-end">#1</p>
                    <h2 className="text-2xl">Title for Task 1</h2>
                    <p className="mb-4 text-sm">Created By User 1</p>
                    <div className="flex items-center justify-between gap-4">
                        <button className="bg-blue-500 text-white px-2 py-1 rounded font-bold">View Details</button>
                        <button className="bg-green-500 text-white  px-2 py-1 rounded font-bold">Completed</button></div>
                </div>

                <div className="border border-gray-400 bg-gray-200 px-4 py-4 rounded-lg">
                    <p className="text-sm flex justify-end">#1</p>
                    <h2 className="text-2xl">Title for Task 1</h2>
                    <p className="mb-4 text-sm">Created By User 1</p>
                    <div className="flex items-center justify-between gap-4">
                        <button className="bg-blue-500 text-white px-2 py-1 rounded font-bold">View Details</button>
                        <button className="bg-orange-500 text-white  px-2 py-1 rounded font-bold">Incomplete</button></div>
                </div>

                <div className="border border-gray-400 bg-gray-200 px-4 py-4 rounded-lg">
                    <p className="text-sm flex justify-end">#1</p>
                    <h2 className="text-2xl">Title for Task 1</h2>
                    <p className="mb-4 text-sm">Created By User 1</p>
                    <div className="flex items-center justify-between gap-4">
                        <button className="bg-blue-500 text-white px-2 py-1 rounded font-bold">View Details</button>
                        <button className="bg-green-500 text-white  px-2 py-1 rounded font-bold">Completed</button></div>
                </div>

                <div className="border border-gray-400 bg-gray-200 px-4 py-4 rounded-lg">
                    <p className="text-sm flex justify-end">#1</p>
                    <h2 className="text-2xl">Title for Task 1</h2>
                    <p className="mb-4 text-sm">Created By User 1</p>
                    <div className="flex items-center justify-between gap-4">
                        <button className="bg-blue-500 text-white px-2 py-1 rounded font-bold">View Details</button>
                        <button className="bg-orange-500 text-white  px-2 py-1 rounded font-bold">Incomplete</button></div>
                </div>

                <div className="border border-gray-400 bg-gray-200 px-4 py-4 rounded-lg">
                    <p className="text-sm flex justify-end">#1</p>
                    <h2 className="text-2xl">Title for Task 1</h2>
                    <p className="mb-4 text-sm">Created By User 1</p>
                    <div className="flex items-center justify-between gap-4">
                        <button className="bg-blue-500 text-white px-2 py-1 rounded font-bold">View Details</button>
                        <button className="bg-green-500 text-white  px-2 py-1 rounded font-bold">Completed</button></div>
                </div>

                <div className="border border-gray-400 bg-gray-200 px-4 py-4 rounded-lg">
                    <p className="text-sm flex justify-end">#1</p>
                    <h2 className="text-2xl">Title for Task 1</h2>
                    <p className="mb-4 text-sm">Created By User 1</p>
                    <div className="flex items-center justify-between gap-4">
                        <button className="bg-blue-500 text-white px-2 py-1 rounded font-bold">View Details</button>
                        <button className="bg-orange-500 text-white  px-2 py-1 rounded font-bold">Incomplete</button></div>
                </div>
            </div>
        </div>
    );
}

export default TaskList;