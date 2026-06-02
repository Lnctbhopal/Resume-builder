import { useDispatch, useSelector } from "react-redux";
import { addExperience } from "../slice/resumeSlice";
import { useState, useEffect } from "react";

const ExperienceForm = () => {

    const dispatch = useDispatch();

    const experience = useSelector(
        (state) => state.resume.experience
    );

    const [open, setOpen] = useState(false);

    const handleChange = (e) => {
        dispatch(addExperience({ [e.target.name]: e.target.value }));
    };

    const handleSave = () => {

        alert("Experience information saved successfully!");

        dispatch(
            addExperience({
                company: "",
                role: "",
                startDate: "",
                endDate: "",
                location: "",
                techStack: "",
                description: ""
            })
        );
    };

    useEffect(() => {

        localStorage.setItem(
            "experience",
            JSON.stringify(experience)
        );

    }, [experience]);

    return (
        <div className="relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/80 backdrop-blur-2xl shadow-[0_25px_80px_rgba(15,23,42,0.08)]">

            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-blue-200/30 rounded-full blur-3xl"></div>

            <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-indigo-200/30 rounded-full blur-3xl"></div>

            {/* Header */}
            <div className="relative flex items-center justify-between px-6 py-5 border-b border-slate-200 bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-50">

                <div>

                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-800">
                        Experience
                    </h2>

                    <p className="text-sm text-slate-500 mt-1">
                        Add your professional work experience details
                    </p>

                </div>

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
                        name="company"
                        placeholder="Company Name"
                        onBlur={handleChange}
                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/80 text-slate-700 text-sm placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 shadow-sm transition-all duration-300"
                    />

                    <input
                        type="text"
                        name="role"
                        placeholder="Role / Position"
                        onBlur={handleChange}
                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/80 text-slate-700 text-sm placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 shadow-sm transition-all duration-300"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        <input
                            type="text"
                            name="startDate"
                            placeholder="Start Date"
                            onBlur={handleChange}
                            className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/80 text-slate-700 text-sm placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 shadow-sm transition-all duration-300"
                        />

                        <input
                            type="text"
                            name="endDate"
                            placeholder="End Date"
                            onBlur={handleChange}
                            className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/80 text-slate-700 text-sm placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 shadow-sm transition-all duration-300"
                        />

                    </div>

                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        onBlur={handleChange}
                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/80 text-slate-700 text-sm placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 shadow-sm transition-all duration-300"
                    />

                    <input
                        type="text"
                        name="techStack"
                        placeholder="Tech Stack (React, Node, MongoDB etc.)"
                        onBlur={handleChange}
                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/80 text-slate-700 text-sm placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 shadow-sm transition-all duration-300"
                    />

                    <textarea
                        name="description"
                        placeholder="Describe your work, achievements and responsibilities..."
                        rows="4"
                        onBlur={handleChange}
                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/80 text-slate-700 text-sm placeholder:text-slate-400 outline-none resize-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 shadow-sm transition-all duration-300"
                    ></textarea>

                    {/* Save Button */}
                    <button
                        onClick={handleSave}
                        className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold shadow-xl shadow-emerald-200 hover:shadow-2xl hover:scale-[1.01] active:scale-[0.98] transition-all duration-300"
                    >
                        Save Experience
                    </button>

                </div>
            )}

        </div>
    );
};

export default ExperienceForm;