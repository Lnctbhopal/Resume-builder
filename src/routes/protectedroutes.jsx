import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = ({ children }) => {

  // Redux se user lo
  const user = useSelector((state) => state.auth.currentUser);

  // localStorage auth check
  const authData = JSON.parse(localStorage.getItem("auth"));

  // Agar user exist nahi karta ya auth false hai
  if (!user || !authData?.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // User exist karta hai to dashboard/page open hoga
  return children;
};

export default ProtectedRoutes;