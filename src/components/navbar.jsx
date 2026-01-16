import { Link } from "react-router";
import ThemeToggle from "./theme_toggle";

function Navbar() {
  return (
    <nav>
      <ul className="flex justify-between items-center py-4 px-5 md:px-20 bg-gray-200 dark:bg-gray-800 transition">
        <li className=" text-2xl">
          <Link to="/">
            <span className="text-blue-500 font-bold">Task</span>
            <span className="text-orange-500 font-bold">Manager</span>
          </Link>
        </li>
        <li>
          <ul className="flex space-x-4">
            <Link to="/tasks">
              <button className="rounded-4xl  px-4 py-1 bg-orange-500 dark:bg-blue-500 text-white font-bold">
                Tasks
              </button>
            </Link>
            <ThemeToggle />
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
