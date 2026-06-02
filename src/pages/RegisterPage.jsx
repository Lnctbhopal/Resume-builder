import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../slice/authSlice";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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

    
    dispatch(register(formData));

   
    localStorage.setItem(
      "user",
      JSON.stringify(formData)
    );



  
    navigate("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">

        <div className="text-center mb-8">

          <h2 className="text-3xl font-bold text-gray-800">
            Create Account
          </h2>

          <p className="text-gray-500 mt-2">
            Register to continue
          </p>

        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Email */}
          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Password */}
          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
          >
            Register
          </button>

        </form>

        {/* Bottom Text */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}

          <Link
            to="/login"
            className="text-blue-500 font-medium hover:underline"
          >
            Login
          </Link>

        </p>

      </div>
    </div>
  );
}

export default Register;