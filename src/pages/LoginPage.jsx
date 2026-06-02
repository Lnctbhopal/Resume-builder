import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../slice/authSlice";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user")) || {};

    if (
      savedUser &&
      savedUser.email === formData.email &&
      savedUser.password === formData.password
    ) {

      dispatch(login(savedUser));

      localStorage.setItem(
        "auth",
        JSON.stringify({
          isAuthenticated: true,
          user: savedUser,
        })
      );

      navigate("/dashboard");

    } else {
      alert("Invalid Email or Password");
    }
  }

 


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 py-10 overflow-hidden relative">

      {/* Background Blur Effects */}
      <div className="absolute top-[-80px] left-[-80px] w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-100px] right-[-80px] w-[28rem] h-[28rem] bg-indigo-300/30 rounded-full blur-3xl"></div>

      {/* Login Card */}
      <div className="relative w-full max-w-md bg-white/80 backdrop-blur-2xl border border-white/40 rounded-[36px] shadow-[0_25px_80px_rgba(15,23,42,0.12)] p-8 md:p-10 overflow-hidden">

        {/* Small Top Glow */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400"></div>

        {/* Logo */}
        <div className="flex flex-col items-center mb-10">

          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center shadow-2xl shadow-blue-300">

            <span className="text-white text-3xl font-black tracking-widest">
              CV
            </span>

          </div>

          <h2 className="mt-7 text-4xl font-black tracking-tight text-slate-800">
            Welcome Back
          </h2>

          <p className="mt-3 text-sm text-slate-500 text-center leading-relaxed max-w-xs">
            Login to continue building your modern and professional resume
          </p>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email */}
          <div>

            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/80 text-slate-700 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all duration-300"
            />

          </div>

          {/* Password */}
          <div>

            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/80 text-slate-700 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all duration-300"
            />

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-semibold tracking-wide shadow-xl shadow-blue-200 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Login Account
          </button>

        </form>

        {/* Bottom Text */}
        <div className="mt-8 text-center">

          <p className="text-sm text-slate-500">
            Don’t have an account?{" "}

            <Link
              to="/register"
              className="font-semibold text-blue-600 hover:text-indigo-600 transition-all duration-300"
            >
              Create Account
            </Link>

          </p>

        </div>

      </div>
    </div>
  );
}

export default Login;