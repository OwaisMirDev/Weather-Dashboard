export function Container({ children }) {
    return <div className="bg-night">
        <div className=" mx-auto max-w-5xl grid grid-cols-3 gap-2 w-[90%] py-8 text-white">
            {children}
        </div>
    </div>
}