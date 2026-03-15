import { Search } from "lucide-react"

export function SearchBar() {
    return <div className=" max-w-md w-full relative">
        <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
        </button>
        <input type="text" placeholder="Search any city..." className="w-full pl-12 pr-4 py-4 rounded-full text-lg shadow-lg glass-input" />
    </div>
}