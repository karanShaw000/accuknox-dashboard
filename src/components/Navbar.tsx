import { BellRing, User } from "lucide-react"
import BreadCrumbs from "./BreadCrumbs"
import SearchBar from "./SearchBar"

const Navbar = () => {
    return (
        <header className="h-16 bg-secondary grid grid-rows-1">
            <div className=" grid grid-cols-2 items-center p-2 ">
                <div>
                    <BreadCrumbs />
                </div>
                <div className="flex justify-end items-center gap-6">
                    <SearchBar />
                    <BellRing className="text-secondary" size={25} />
                    <User className="text-secondary" size={25} />
                </div>

            </div>
        </header>
    )
}
export default Navbar
