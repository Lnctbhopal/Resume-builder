import { useDispatch, useSelector } from "react-redux";
import { addEducation } from "../slice/resumeSlice";
import { useState } from "react";

const EducationForm = () => {
  const dispatch = useDispatch();

  const education = useSelector((state) => state.resume.education);

  const [open, setOpen] = useState(false);

  const saveInformation = () => {
    localStorage.setItem("education", JSON.stringify(education));
    alert("Education Saved Successfully");
  };

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/80 backdrop-blur-2xl shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
      <div className="absolute -top-20 -right-20 w-52 h-52 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-indigo-200/30 rounded-full blur-3xl"></div>

      <div className="relative flex items-center justify-between px-6 py-5 border-b border-slate-200 bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-50">
        <div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-800">
            Education
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Add your academic background and achievements
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={saveInformation}
            className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-green-600 via-emerald-600 to-teal-500 text-white text-sm font-semibold shadow-xl shadow-green-200 hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-300"
          >
            Save Information
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white text-sm font-semibold shadow-xl shadow-blue-200 hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-300"
          >
            {open ? "Close" : "Open"}
          </button>
        </div>
      </div>

      {open && (
        <div className="relative p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Degree"
            onBlur={(e) => dispatch(addEducation({ degree: e.target.value }))}
            className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/80 text-slate-700 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 shadow-sm transition-all duration-300"
          />

          <input
            type="text"
            placeholder="College / University"
            onBlur={(e) => dispatch(addEducation({ college: e.target.value }))}
            className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/80 text-slate-700 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 shadow-sm transition-all duration-300"
          />

          <input
            type="text"
            placeholder="Passing Year"
            onBlur={(e) => dispatch(addEducation({ year: e.target.value }))}
            className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/80 text-slate-700 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 shadow-sm transition-all duration-300"
          />

          <input
            type="text"
            placeholder="CGPA / Percentage"
            onBlur={(e) =>
              dispatch(addEducation({ percentage: e.target.value }))
            }
            className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/80 text-slate-700 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 shadow-sm transition-all duration-300"
          />

          <input
            type="text"
            placeholder="10th Percentage"
            onBlur={(e) =>
              dispatch(addEducation({ intermediate: e.target.value }))
            }
            className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/80 text-slate-700 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 shadow-sm transition-all duration-300"
          />

          <input
            type="text"
            placeholder="12th Percentage"
            onBlur={(e) =>
              dispatch(addEducation({ highschool: e.target.value }))
            }
            className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/80 text-slate-700 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 shadow-sm transition-all duration-300"
          />
        </div>
      )}
    </div>
  );
};

export default EducationForm;