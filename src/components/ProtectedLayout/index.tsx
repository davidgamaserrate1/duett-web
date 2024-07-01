import { useAuth } from "../../context/Hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ProtectedLayout({ children }: { children: JSX.Element }) {
    
    const navigate = useNavigate();
    const { token, loading } = useAuth();

    useEffect(() => {
        if (!loading && !token) {
            navigate('/login');
        }
    }, [token, loading, navigate]);

    if (loading) {
        return null
    }

    return children;
}
