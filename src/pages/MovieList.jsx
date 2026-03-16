
import { Card } from "../components";
import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

const MovieList = (ApiPath) => {
  // Sample movie data - replace with your API call 
  const { data: movies } = useFetch(ApiPath);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Popular Movies
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Explore our collection of popular movies
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
};

export default MovieList;
