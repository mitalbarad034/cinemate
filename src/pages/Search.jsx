import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { CardSearch } from "../components/CardSearch";

export const Search = (ApiPath) => {
  // Sample movie data - replace with your API call 
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q") || "";

  const { data: movies } = useFetch(ApiPath, searchTerm);
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

      {movies.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400 text-center">
          No movies found for "{searchTerm}"
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <CardSearch key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  );
}
