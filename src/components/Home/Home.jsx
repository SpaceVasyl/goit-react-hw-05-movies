import React, { useEffect, useState } from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";

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
      setData(parsedMovies);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>{console.log(data)}
      <h1>Home Page</h1>
      {data ? (
        data.map(item => (
          <NavLink key={item.id}>{item.title}</NavLink>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};