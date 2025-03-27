import React from 'react';
import { Link } from 'react-router-dom';

const MovieListingCell = ({ data }) => {
  const { title, director, year, genre, runtime, rating, image, slug } = data;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">Director: {director}</p>
        <p className="text-sm text-gray-600">Year: {year}</p>
        <p className="text-sm text-gray-600">Genre: {genre}</p>
        <p className="text-sm text-gray-600">Runtime: {runtime}</p>
        <p className="text-sm text-gray-600">Rating: {rating}</p>
        <Link to={`/movie/${slug}`} state={{ data }} className="text-blue-600 text-sm mt-2 inline-block">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MovieListingCell;
