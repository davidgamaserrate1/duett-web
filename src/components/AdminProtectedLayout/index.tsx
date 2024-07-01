import { useAuth } from "../../context/Hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function AdminProtectedLayout({ children }: { children: JSX.Element }) {
    
    const navigate = useNavigate();
    const { token, profile, loading } = useAuth();

    useEffect(() => {
        if (!loading && (!token || profile !== "ADMIN")) {
            navigate('/home');
        }
    }, [token, loading,profile, navigate]);

    if (loading) {
        return null
    }

    return children;
}
