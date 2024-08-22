import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
    return <section className="flex flex-col font-mono min-h-screen bg-primary">
        <div>
            <Navbar />
        </div>
        <main className=" px-6 pt-10 pb-4 flex-1">
            <Outlet />
        </main>
    </section>
}
