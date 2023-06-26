import React, { useEffect, useState } from "react";
import axios from 'axios';

export const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
    
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=30cd85a0292ceb2093f49a4122dd177a');
      const result = response.data;
      const movies = result.results;
      const parsedMovies = movies.map(movie => ({
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        overview: movie.overview,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count
      }));
      const movieTitles = parsedMovies.map(parsedMovie => ({
        title:parsedMovie.title
      }))
      setData(movieTitles);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>{console.log(data)}
      <h1>Home Page</h1>
      {data ? (
        <div>
          <h2>Data from API:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};