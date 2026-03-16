import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`https://xmdbapi.com/api/v1/movies/${id}?apiKey=${import.meta.env.VITE_API_KEY}`);
        if (!response.ok) {
          throw new Error('Failed to fetch movie details');
        }
        const data = await response.json();
        setMovie(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="text-center text-red-600 dark:text-red-400">
          <p>Error: {error}</p>
        </div>
      </main>
    );
  }

  if (!movie) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>Movie not found</p>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Poster */}
            <div className="md:w-1/3">
              <div className="h-96 md:h-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img
                  src={movie.poster_url}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="md:w-2/3 p-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {movie.title}
              </h1>

              <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                {movie.release_year && (
                  <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                    {movie.release_year}
                  </span>
                )}
                {movie.runtime && (
                  <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                    {movie.runtime} min
                  </span>
                )}
                {movie.rating && (
                  <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full">
                    ⭐ {movie.rating}
                  </span>
                )}
              </div>

              {movie.genres && movie.genres.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Genres</h2>
                  <div className="flex flex-wrap gap-2">
                    {movie.genres.map((genre, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {movie.plot && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Overview</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {movie.plot}
                  </p>
                </div>
              )}

              {movie.cast && movie.cast.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Cast</h2>
                  <div className="flex flex-wrap gap-2">
                    {movie.cast.slice(0, 10).map((actor, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {actor}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {movie.director && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Director</h2>
                  <p className="text-gray-700 dark:text-gray-300">{movie.director}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
