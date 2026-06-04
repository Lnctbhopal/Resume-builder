import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slice/authSlice";
import { useNavigate } from "react-router-dom";

function Navbar({ downloadPDF }) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector(
    (state) => state.auth
  );

  function handleLogout() {
    dispatch(logout());
    localStorage.removeItem("auth");
    navigate("/login");
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-xl shadow-sm">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo Section */}
        <div className="flex items-center gap-4 cursor-pointer select-none">

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-200">

            <span className="text-white text-lg font-extrabold tracking-widest">
              CV
            </span>

          </div>

          <div>

            <h1 className="text-2xl lg:text-3xl font-black tracking-tight text-slate-800 leading-none">
              CV Builder
            </h1>

            <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-400 mt-1">
              Professional Resume Checker & Builder
            </p>

          </div>

        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
{/* 
          <button
            type="button"
            onClick={downloadPDF}
            className="px-5 py-2.5 rounded-2xl bg-blue-600 text-white text-sm font-semibold shadow-lg hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Download PDF
          </button> */}

          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="px-5 py-2.5 rounded-2xl bg-slate-900 text-white text-sm font-semibold shadow-lg hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Logout
            </button>
          )}

        </div>

      </div>
    </nav>
  );
}

export default Navbar;