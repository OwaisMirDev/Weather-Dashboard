import { Header } from "./components/Header"
import { SearchBar } from "./components/SearchBar"


function App() {


  return <div className="bg-weather-night min-h-screen text-white p-4 md:p-8 flex justify-center">
    <div className="border-2 border-yellow-500 max-w-5xl w-full flex flex-col gap-6">
      <Header />
      <SearchBar />
    </div>
  </div>
}

export default App
