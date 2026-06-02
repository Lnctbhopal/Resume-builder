import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

      {/* Sidebar */}
      <div className="w-72 bg-white/80 backdrop-blur-xl border-r border-slate-200 shadow-xl p-6">

        <div className="mb-10">

          <h1 className="text-3xl font-black text-slate-800">
            Dashboard
          </h1>

          <p className="text-slate-500 mt-2 text-sm">
            Resume Management Panel
          </p>

        </div>

        {/* Sidebar Menu */}
        <div className="space-y-4">

          <Link
            to="/templates"
            className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-all duration-300 group"
          >

            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">

              <span className="text-white font-bold text-lg">
                T
              </span>

            </div>

            <div>

              <h2 className="font-bold text-slate-800 group-hover:text-blue-600">
                Templates
              </h2>

              <p className="text-sm text-slate-500">
                Resume Designs
              </p>

            </div>

          </Link>

          <Link
            to="/builder"
            className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50 transition-all duration-300 group"
          >

            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg">

              <span className="text-white font-bold text-lg">
                B
              </span>

            </div>

            <div>

              <h2 className="font-bold text-slate-800 group-hover:text-emerald-600">
                Builder
              </h2>

              <p className="text-sm text-slate-500">
                Create Resume
              </p>

            </div>

          </Link>

          {/* PDF EXPERT */}
          <Link
            to="/pdf-expert"
            className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-purple-50 transition-all duration-300 group"
          >

            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">

              <span className="text-white font-bold text-lg">
                P
              </span>

            </div>

            <div>

              <h2 className="font-bold text-slate-800 group-hover:text-purple-600">
                PDF Expert
              </h2>

              <p className="text-sm text-slate-500">
                Download Resume PDF
              </p>

            </div>

          </Link>

        </div>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">

        <h2 className="text-5xl font-black text-slate-800">
          Welcome Back 👋
        </h2>

        <p className="mt-4 text-lg text-slate-500">
          Build, manage and download your professional resumes easily.
        </p>

      </div>

    </div>
  );
}

export default Dashboard;