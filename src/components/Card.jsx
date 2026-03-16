import { Link } from "react-router-dom";

export const Card = ({ movie }) => {
  const { id, poster_url, title, plot } = movie;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
      {/* Image Container */}
      <div className="h-64 overflow-hidden bg-gray-200 dark:bg-gray-700">
        <img
          src={poster_url}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content Container */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
          {plot}
        </p>

        {/* Details Button */}
        <Link
          to={`/movie/${id}`}
          className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-center transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};
