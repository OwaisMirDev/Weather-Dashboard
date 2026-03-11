export function Container({ children }) {
    return <div className=" mx-auto max-w-5xl grid grid-cols-3 gap-2 w-[90%] my-8">
        {children}
    </div>
}