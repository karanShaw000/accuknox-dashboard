import { NavLink } from "react-router-dom";
export default function Home() {

    return <div className="flex items-center justify-center h-screen">
        <div className="space-y-6">
            <p className="text-center">
                Navigate Through Pages
            </p>
            <div className="space-x-2">
                <NavLink to={'/'} className={({ isActive }) => isActive ? " px-4 py-2 bg-bluish text-accent border border-bluish" : " px-4 py-2 bg-secondary text-bluish border-bluish border"}>
                    Home
                </NavLink>
                <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? " px-4 py-2 bg-bluish text-accent border border-bluish" : " px-4 py-2 bg-secondary text-bluish border-bluish border"}>
                    Dashboard
                </NavLink>
                <NavLink to={'/test'} className={({ isActive }) => isActive ? " px-4 py-2 bg-bluish text-accent border border-bluish" : " px-4 py-2 bg-secondary text-bluish border-bluish border"}>
                    Test
                </NavLink>

            </div>
        </div>
    </div>
}
