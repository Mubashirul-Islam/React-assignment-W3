import { Link } from "react-router";

function Navbar() {
    return (
        <nav>
            <ul className="flex justify-between items-center p-4 bg-gray-400">
                <li className=" text-2xl" ><Link to="/"><span className="text-blue-500 font-bold">Task</span><span className="text-orange-500 font-bold">Manager</span></Link></li>
                <li>
                    <ul className="flex space-x-4">
                        <Link to="/tasks"><button className="border rounded-4xl  px-4 py-1 bg-orange-400 text-white font-bold">Tasks</button></Link>
                        <Link to="/tasks"><button className="border rounded-4xl  px-4 py-1 bg-blue-400 text-white font-bold">Light</button></Link>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;