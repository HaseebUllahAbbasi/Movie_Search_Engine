import React, { useState } from "react";
import MovieCard from './movieCard';

export default function SearchMovies()
{
    
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    
    const searchMovies = async (e) => {
        e.preventDefault();
                
        const url = `https://api.themoviedb.org/3/search/movie?api_key=66ab391092a1de38b5f8e93d9fd8019f&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }
    

    return (
        <div className="container">
            <form className="form" onSubmit={searchMovies} >
            <label className="label" htmlFor="query">Movie Name</label>
            <input  className="input" type="text" name="query"
                placeholder="i.e. Jurassic Park"
                value={query} onChange={(e) => setQuery(e.target.value)}
               id="search_bar"
               />
            <button className="button" type="submit">Search</button>
        </form>
        <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                   <MovieCard movie={movie}  key={movie.id} />
                ))}
            </div> 
        </div>
        
    )
}