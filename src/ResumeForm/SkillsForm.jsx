import { useDispatch, useSelector } from "react-redux";
import { setSkills } from "../slice/resumeSlice";
import { useState, useEffect } from "react";

const SkillsForm = () => {

    const dispatch = useDispatch();

    const skill = useSelector(
        (state) => state.resume.skills
    );

    const [open, setOpen] = useState(false);

    const [skills, setLocalSkills] = useState({});

    useEffect(() => {

        localStorage.setItem(
            "skills",
            JSON.stringify(skills)
        );

    }, [skills]);

    return (
        <div className="bg-white/80 backdrop-blur-2xl border border-slate-200 rounded-[32px] shadow-[0_20px_70px_rgba(15,23,42,0.08)] overflow-hidden">

            {/* Header */}
            <div className="px-6 py-5 border-b border-slate-200 bg-gradient-to-r from-blue-50 via-indigo-50 to-cyan-50">

                <div className="flex items-center justify-between gap-4">

                    <div>

                        <h2 className="text-2xl font-black tracking-tight text-slate-800">
                            Skills
                        </h2>

                        <p className="text-sm text-slate-500 mt-1">
                            Add your professional technical and soft skills
                        </p>

                    </div>

                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white text-sm font-semibold shadow-lg shadow-blue-200 hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-300"
                    >
                        {open ? "Close Form" : "Add Skills"}
                    </button>

                </div>

            </div>

            {/* Form */}
            {open && (
                <div className="p-6 space-y-5">

                    <input
                        type="text"
                        placeholder="Programming Languages (Java, Python)"
                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                        onBlur={(e) =>
                            dispatch(
                                setSkills({
                                    ...skills,
                                    Programming: e.target.value.split(","),
                                })
                            )
                        }
                    />

                    <input
                        type="text"
                        placeholder="Frontend (React, Angular)"
                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                        onBlur={(e) =>
                            dispatch(
                                setSkills({
                                    ...skills,
                                    frontend: e.target.value.split(","),
                                })
                            )
                        }
                    />

                    <input
                        type="text"
                        placeholder="Backend (Node.js, Express)"
                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                        onBlur={(e) =>
                            dispatch(
                                setSkills({
                                    ...skills,
                                    backend: e.target.value.split(","),
                                })
                            )
                        }
                    />

                    <input
                        type="text"
                        placeholder="Database (MongoDB, MySQL)"
                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                        onBlur={(e) =>
                            dispatch(
                                setSkills({
                                    ...skills,
                                    database: e.target.value.split(","),
                                })
                            )
                        }
                    />

                    <input
                        type="text"
                        placeholder="Tools (Git, Docker, VS Code)"
                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                        onBlur={(e) =>
                            dispatch(
                                setSkills({
                                    ...skills,
                                    tools: e.target.value.split(","),
                                })
                            )
                        }
                    />

                    <input
                        type="text"
                        placeholder="AI / ML (OpenAI, NLP)"
                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                        onBlur={(e) =>
                            dispatch(
                                setSkills({
                                    ...skills,
                                    AI: e.target.value.split(","),
                                })
                            )
                        }
                    />

                    {/* Save Button */}
                    <button
                        onClick={() => dispatch(setSkills(skills))}
                        className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold tracking-wide shadow-xl shadow-emerald-200 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    >
                        Save Skills
                    </button>

                </div>
            )}

        </div>
    );
};

export default SkillsForm;