import React, { useMemo } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { MOVIES } from '../../movies.data';
import { useDebounce } from '../../hooks/useDebounce';

export const MovieList = ({searchTerm}) => {

const debounceSearch = useDebounce(searchTerm, 500) 

const movies = useMemo(() => {
return MOVIES.filter(movie => movie.name.toLowerCase().trim().includes(debounceSearch.toLocaleLowerCase().trim()))
}, [debounceSearch]) 

  return (
    <main className="flex gap-6">
        {movies.length ? (
            movies.map(movie => (
            <MovieCard key={movie.name} {...movie}/>
            ))
        ) : (
            <p className="text-gray-700 dark:text-gray-400">Movies not found</p>
        )}
    </main>
  );
};
