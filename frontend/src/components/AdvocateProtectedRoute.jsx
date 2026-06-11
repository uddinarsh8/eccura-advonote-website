import { Navigate } from "react-router-dom";

function AdvocateProtectedRoute({ children }) {

    const token =
        localStorage.getItem(
            "advocateToken"
        );

    if (!token) {

        return (
            <Navigate
                to="/advocate/login"
                replace
            />
        );

    }

    return children;

}

export default AdvocateProtectedRoute;