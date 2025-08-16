import { useMemo, useState } from 'react'
import MovieCard  from './components/MovieCard/MovieCard'
import { MOVIES } from './movies.data'
import { useDebounce } from './hooks/useDebounce'
import { useTheme } from './hooks/useTheme'

function App() {
  const [theme, toggleTheme] = useTheme()

  const [searchTerm, setSearchTerm] = useState('')
  const debounceSearch = useDebounce(searchTerm, 500) 

  const movies = useMemo(() => {
    return MOVIES.filter(movie => movie.name.toLowerCase().trim().includes(debounceSearch.toLocaleLowerCase().trim()))
  }, [debounceSearch]) 

  return (
    <>
    <div className="min-h-screen w-full bg-white text-gray-900 dark:bg-gray-900 dark:text-white px-6 py-5 transition-colors duration-300">
      <header className='mb-10 flex justify-between items-center'>
       <img className='h-20 w-auto' src="/logo.png" alt="Logo Netflix" />

      <div className='flex gap-6'>
        <input 
          type="search" 
          placeholder='search...' 
          className='border border-gray-300 dark:border-gray-600 px-2 rounded outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300' 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <button 
          className='text-sm px-3 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 w-20'
          onClick={toggleTheme}
        >
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>

      </header>
      <main className="flex gap-6">
        {movies.length ? (
          movies.map(movie => (
            <MovieCard key={movie.name} {...movie}/>
          ))
        ) : (
          <p className="text-gray-700 dark:text-gray-400">Movies not found</p>
        )}
      </main>
</div>
    </>
  )
}

export default App
