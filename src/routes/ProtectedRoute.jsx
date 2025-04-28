import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthProvider";

export default function ProtectedRoute() {

    const Auth = useAuth();

    return Auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

