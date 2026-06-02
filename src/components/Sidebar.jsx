import { useState } from "react";

export default function Sidebar({ setActive }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-72 h-screen bg-white/90 backdrop-blur-xl border-r border-slate-200 shadow-xl px-5 py-6 sticky top-0">

      {/* Header */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between cursor-pointer mb-6 pb-4 border-b border-slate-200"
      >
        <div>
          <h2 className="text-xl font-bold text-slate-800 tracking-tight">
            Resume Sections
          </h2>

          <p className="text-xs text-slate-400 mt-1 tracking-wide uppercase">
            CV Builder Panel
          </p>
        </div>

        <div className="w-8 h-8 flex items-center justify-center rounded-xl bg-slate-100 text-slate-500 hover:bg-slate-200 transition-all duration-300">
          <span className="text-xs font-bold">
            {open ? "▲" : "▼"}
          </span>
        </div>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <ul className="space-y-3 text-sm">

          <li
            onClick={() => setActive("personal")}
            className="group flex items-center gap-3 cursor-pointer px-4 py-3 rounded-2xl text-slate-600 font-medium bg-slate-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 hover:shadow-md transition-all duration-300"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-all duration-300"></div>

            Personal Info
          </li>

          <li
            onClick={() => setActive("education")}
            className="group flex items-center gap-3 cursor-pointer px-4 py-3 rounded-2xl text-slate-600 font-medium bg-slate-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 hover:shadow-md transition-all duration-300"
          >
            <div className="w-2 h-2 rounded-full bg-violet-500 group-hover:scale-125 transition-all duration-300"></div>

            Education
          </li>

          <li
            onClick={() => setActive("experience")}
            className="group flex items-center gap-3 cursor-pointer px-4 py-3 rounded-2xl text-slate-600 font-medium bg-slate-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 hover:shadow-md transition-all duration-300"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-125 transition-all duration-300"></div>

            Experience
          </li>

          <li
            onClick={() => setActive("skills")}
            className="group flex items-center gap-3 cursor-pointer px-4 py-3 rounded-2xl text-slate-600 font-medium bg-slate-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 hover:shadow-md transition-all duration-300"
          >
            <div className="w-2 h-2 rounded-full bg-orange-500 group-hover:scale-125 transition-all duration-300"></div>

            Skills
          </li>

          <li
            onClick={() => setActive("projects")}
            className="group flex items-center gap-3 cursor-pointer px-4 py-3 rounded-2xl text-slate-600 font-medium bg-slate-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 hover:shadow-md transition-all duration-300"
          >
            <div className="w-2 h-2 rounded-full bg-pink-500 group-hover:scale-125 transition-all duration-300"></div>

            Projects
          </li>

        </ul>
      )}

    </div>
  );
}