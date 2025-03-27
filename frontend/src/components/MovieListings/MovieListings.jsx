import React, { useEffect, useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieListings.css';
import { movies as localMovies } from '../../movies';
import MovieListingCell from './MovieListingCell';
import { db } from '../../utils/firebase';
import { addDoc, getDocs, collection } from 'firebase/firestore';

const MovieListings = () => {

  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  // This is to prevent the function from being executed twice.
  // Error occurs with the function being executed twice.
  const hasInitialized = useRef(false);

  useEffect(() => {
    const initializeMovies = async () => {
      if (hasInitialized.current) return;
      hasInitialized.current = true;

      const querySnapshot = await getDocs(collection(db, "movies"));

      // Firebase Storage is no longer free to use. The images are stored locally.
      if (querySnapshot.empty) {
        console.log("No movies found in the database. Initializing movies collection...");
        for (let i = 0; i < movies.length; i++) {
          addDoc(collection(db, "movies"), movies[i]);
        }
      }
      else {
        console.log("Movies collection already initialized.");
      }

      // Images are referenced from the localMovies array from the movies.js file in the src folder.
      // The image is matched with the movie id. If the id matches, the image is displayed.
      setMovies(querySnapshot.docs.map(doc => {
        const data = doc.data()
        const match = localMovies.find(movie => movie.id === data.id);
        return {
          ...data,
          image: match ? match.image : null
        }
      }));
      
    }
  
    initializeMovies();
  }, []);
 
  return(
    <div className="p-6">
       <button onClick={ () => navigate(-1)} className="bg-blue-500 hover:bg-blue-600 text-white mb-4 text-sm font-medium px-3 py-1.5 rounded-md shadow-sm transition">Logout</button>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie, index) => (
          <MovieListingCell key={index} data={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieListings;