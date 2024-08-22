import { Search } from "lucide-react"
import { FC, InputHTMLAttributes } from "react"



interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
}
const SearchBar: FC<SearchInputProps> = ({ ...props }) => {
    return (
        <>
            <div className="relative container w-3/4 md:w-1/2 md:block hidden">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-secondary" strokeWidth={3} />
                <input
                    {...props}
                    type="search"
                    placeholder="Search anything..."
                    className="w-full rounded-md bg-primary pl-8 pr-4 py-2 text-sm border-2 border-primary focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
            </div>
            <div className="text-secondary md:hidden">
                <Search size={25} />
            </div>
        </>
    )
}

export default SearchBar
