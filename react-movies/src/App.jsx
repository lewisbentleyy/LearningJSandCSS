import React, { useEffect, useState } from "react";
import {} from "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=d6422688";

function App() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    };
    useEffect(() => {
        searchMovies("Spiderman");
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                    onKeyDown={(e) => e.key === "Enter" && searchMovies(search)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(search)}
                />
            </div>

            {movies?.length ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    );
}

export default App;
