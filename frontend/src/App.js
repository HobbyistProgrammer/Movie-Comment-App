import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginSignup from './components/LoginForm/LoginSignup';
import MovieListings from './components/MovieListings/MovieListings';
import RegisterForm from './components/RegisterForm/RegisterForm';
import MovieDetails from './components/MovieDetails/MovieDetails';
import ProtectedRoute from './components/ProtectedRoute';

import { AuthProvider } from './context/AuthContext';

import './App.css';
function App() {

  // const navigate = useNavigate();

  return (
    <div>
      { /*
        <Router>
          <Routes>
            <Route exact path="/" element={<LoginSignup />} />
            <Route path="/movies" element={<MovieListings />} />
            <Route path="/register" element={<RegisterForm/>} />
            <Route path="/movie/:slug" element={<MovieDetails />} />
          </Routes>
        </Router>
        */
      }
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginSignup />} />
            <Route path="/register" element={<RegisterForm />} />

            { /* Protected Routes*/ }
            <Route path="/movies" element={<ProtectedRoute />}>
              <Route path="" element={<MovieListings />} />
              <Route path=":slug" element={<MovieDetails />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;