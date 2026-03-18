export function TempToggle() {
    return <div className=" flex items-center gap-3 px-4 py-2 rounded-full cursor-pointer">
        <span className="text-sm font-semibold">°C</span>
        <div className="relative w-11 h-6 bg-white/20 rounded-full ">
            <div className="absolute border-2 left-1 top-1 bg-white w-4 h-4 rounded-full"></div>
        </div>
        <span className="text-sm font-semibold text-white/50">°F</span>
    </div>
}