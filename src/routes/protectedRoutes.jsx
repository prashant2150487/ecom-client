import { useSelector } from "react-redux";
import { Navigate } from "react-router";



export const ProtectedRoutes = ({ children }) => {

    const { isAuthenticated } = useSelector((state) => state.auth);
    if (!isAuthenticated) {
        return <Navigate to="/" />
    }
    return  <>{children}</>;
};