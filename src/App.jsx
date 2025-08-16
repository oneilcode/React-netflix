import { useState } from 'react'
import { Header } from './components/Header/Header'
import { MovieList } from './components/MovieList/MovieList'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
    <div className="min-h-screen w-full bg-white text-gray-900 dark:bg-gray-900 dark:text-white px-6 py-5 transition-colors duration-300">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <MovieList searchTerm={searchTerm}/>
    </div>
    </>
  )
}

export default App
