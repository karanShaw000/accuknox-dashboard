import { ChevronDown, Clock4, EllipsisVertical, Menu, RefreshCcw } from "lucide-react"
import AddWigetButton from "./AddWigetButton"
import Button from "../ui/Button"

const Header = () => {
    return <div className="flex  justify-between items-center">
        <p className="text-lg lg:text-xl font-bold text-primary text-center md:text-left">CNAPP Dashboard</p>
        <div className="md:hidden ">
            <Button><Menu /></Button>
        </div>
        <div className="hidden md:flex justify-between items-center gap-2">
            <AddWigetButton category="cspm" />
            <Button><RefreshCcw /></Button>
            <Button><EllipsisVertical /></Button>
            <button className="rounded py-1 px-1 border-bluish border hover:bg-primary  shadow-md bg-secondary flex justify-between items-center gap-1">
                <div className=" flex justify-center items-center border-r-2 border-bluish pr-1">
                    <Clock4 fill="#14147c" color="#fff" />
                </div>
                <div className="text-bluish flex items-center ">
                    <p className=" font-bold">Last 2 days</p>
                    <ChevronDown />
                </div>
            </button>
        </div>
    </div>

}

export default Header
