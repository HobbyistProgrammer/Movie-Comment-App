/*
    * ProtectedRoute.js
    * This component is used to protect routes that require authentication.
    * If the user is authenticated, it renders the child components (Outlet).
*/
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
    const { user, loading } = useAuth();

    if (loading) return <p>Loading...</p> // This will display a loading message while checking auth status

    return user ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;