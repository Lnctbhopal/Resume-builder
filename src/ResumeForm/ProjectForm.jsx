import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "../slice/resumeSlice";

const ProjectForm = () => {

    const dispatch = useDispatch();

    const project = useSelector(
        (state) => state.resume.projects
    );

    const [open, setOpen] = useState(false);

    useEffect(() => {

        localStorage.setItem(
            "project",
            JSON.stringify(project)
        );

    }, [project]);

    return (
        <div className="relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/80 backdrop-blur-2xl shadow-[0_25px_80px_rgba(15,23,42,0.08)]">

            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-blue-200/30 rounded-full blur-3xl"></div>

            <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-indigo-200/30 rounded-full blur-3xl"></div>

            {/* Header */}
            <div className="relative px-6 py-5 border-b border-slate-200 bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-50">

                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-800">
                    Projects
                </h2>

                <p className="text-sm text-slate-500 mt-2">
                    Add your professional and personal project details
                </p>

            </div>

            {/* Toggle Button */}
            <div className="relative px-6 pt-5">

                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white text-sm font-semibold shadow-xl shadow-blue-200 hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-300"
                >
                    {open ? "Close" : "Open"}
                </button>

            </div>

            {/* Form */}
            {open && (
                <div className="relative p-6 md:p-8 space-y-5">

                    <input
                        type="text"
                        name="Name"
                        placeholder="Project Name"
                        onBlur={(e) =>
                            dispatch(addProject({ name: e.target.value }))
                        }
                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/80 text-slate-700 text-sm placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 shadow-sm transition-all duration-300"
                    />

                    <textarea
                        name="Description"
                        placeholder="Project Description"
                        rows="4"
                        onBlur={(e) =>
                            dispatch(addProject({
                                description: e.target.value,
                            }))
                        }
                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/80 text-slate-700 text-sm placeholder:text-slate-400 resize-none outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 shadow-sm transition-all duration-300"
                    ></textarea>

                    <input
                        type="text"
                        name="Link"
                        placeholder="Project Link"
                        onBlur={(e) =>
                            dispatch(addProject({ link: e.target.value }))
                        }
                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/80 text-slate-700 text-sm placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 shadow-sm transition-all duration-300"
                    />

                    <input
                        type="text"
                        name="Technologies"
                        placeholder="Technologies Used"
                        onBlur={(e) =>
                            dispatch(addProject({
                                technologies: e.target.value,
                            }))
                        }
                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/80 text-slate-700 text-sm placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 shadow-sm transition-all duration-300"
                    />

                    <button
                        type="button"
                        className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold shadow-xl shadow-emerald-200 hover:shadow-2xl hover:scale-[1.01] active:scale-[0.98] transition-all duration-300"
                    >
                        Add Project
                    </button>

                </div>
            )}

        </div>
    );
};

export default ProjectForm;