import { Outlet } from "react-router";
import Navbar from "./navbar.jsx";

function Layout() {
    return (
        <main>
            <nav><Navbar /></nav>
            <section>
                <Outlet />
            </section>
        </main>
    );
}

export default Layout;