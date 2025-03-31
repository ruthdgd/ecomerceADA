import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; 

const ProtectedRoute = ({ children, role }) => {
  const { user, userRole } = useAuth();

  if (!user) {
    return <Navigate to="/logIn" />;
  }


  if (role === "admin" && userRole !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;