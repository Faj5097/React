import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: "Some Dummy Movie",
  //     openingText: "This is the opening text of the movie",
  //     releaseDate: "2021-05-18"
  //   },
  //   {
  //     id: 2,
  //     title: "Some Dummy Movie 2",
  //     openingText: "This is the second opening text of the movie",
  //     releaseDate: "2021-05-19"
  //   }
  // ];

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(false);
      const response = await fetch("https://swapi.dev/api/fil");

      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      const data = await response.json();
      const moviesData = data.results.map((movieItem) => {
        return {
          id: movieItem.episode_id,
          title: movieItem.title,
          releaseDate: movieItem.opening_crawl,
          openingText: movieItem.release_date
        };
      });
      setMovies(moviesData);
    } catch (error) {
      setError(true);
    }

    setIsLoading(false);
  }, []);

  let movieContent = <MoviesList movies={movies} />;

  if (isLoading) {
    movieContent = <p>{"Movies are loading"}</p>;
  }

  if (movieContent.length === 0) {
    movieContent = <p>{"No movies found"}</p>;
  }

  if (error) {
    movieContent = <p>{"Someting went wrong"}</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>{movieContent}</section>
    </React.Fragment>
  );
}

export default App;
