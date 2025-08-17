import { useTheme } from '../../hooks/useTheme'

interface Props {
  searchTerm: string,
  setSearchTerm: (searchTerm:string) => void
}

export const Header = ({ searchTerm, setSearchTerm } : Props) => {
const { theme, toggleTheme } = useTheme()

  return (
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
  );
};
