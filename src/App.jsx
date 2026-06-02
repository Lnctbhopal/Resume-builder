import React from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import PDFExpert from "./utils/PDFExpert";

import TemplatePage from "./pages/TemplatePage";
import Dashboard from "./pages/Dashbord";
import BuilderPage from "./pages/BuilderPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoutes from "./routes/protectedroutes";

const App = () => {

  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <div>

      {/* ================= NAVBAR ================= */}
      {!hideNavbar && <Navbar />}

      {/* ================= ROUTES ================= */}
      <Routes>

        <Route
          path="/"
          element={<Navigate to="/dashboard" />}
        />

        <Route
          path="/builder"
          element={<BuilderPage />}
        />

        <Route
          path="/templates"
          element={<TemplatePage />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />

        <Route
          path="/pdf-expert"
          element={<PDFExpert />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />

      </Routes>

    </div>
  );
};

export default App;