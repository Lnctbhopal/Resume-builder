import { useDispatch, useSelector } from "react-redux";
import { setPersonal } from "../slice/resumeSlice";
import { useState, useEffect } from "react";

const PersonalForm = () => {

    const dispatch = useDispatch();

    const personal = useSelector(
        (state) => state.resume.personal
    );

    const [open, setOpen] = useState(true);

    const handleChange = (e) => {

        const { name, value } = e.target;

        dispatch(
            setPersonal({
                [name]: value,
            })
        );
    };

    const handleSave = () => {
        alert("Personal information saved successfully!");
    };

    // Auto Save
    useEffect(() => {

        localStorage.setItem(
            "personal",
            JSON.stringify(personal)
        );

    }, [personal]);

    return (
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-[28px] shadow-[0_15px_50px_rgba(15,23,42,0.08)] overflow-hidden">

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 bg-gradient-to-r from-blue-50 to-indigo-50">

                <div>

                    <h2 className="text-2xl font-black text-slate-800">
                        Personal Information
                    </h2>

                    <p className="text-sm text-slate-500 mt-1">
                        Add your professional details
                    </p>

                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold shadow-lg hover:scale-105 transition-all duration-300"
                >
                    {open ? "Close" : "Open"}
                </button>

            </div>

            {/* Form */}
            {open && (
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">

                    <input
                        name="name"
                        placeholder="Full Name"
                        value={personal.name}
                        onChange={handleChange}
                        className="w-full px-5 py-3 rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                    />

                    <input
                        name="email"
                        placeholder="Email Address"
                        value={personal.email}
                        onChange={handleChange}
                        className="w-full px-5 py-3 rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                    />

                    <input
                        name="phone"
                        placeholder="Phone Number"
                        value={personal.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-3 rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                    />

                    <input
                        name="linkdin"
                        placeholder="LinkedIn URL"
                        value={personal.linkdin}
                        onChange={handleChange}
                        className="w-full px-5 py-3 rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                    />

                    <input
                        name="Github"
                        placeholder="GitHub URL"
                        value={personal.Github}
                        onChange={handleChange}
                        className="w-full px-5 py-3 rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                    />

                    <div className="md:col-span-2">

                        <textarea
                            name="summary"
                            placeholder="Write a short professional summary..."
                            rows="5"
                            value={personal.summary}
                            onChange={handleChange}
                            className="w-full px-5 py-3 rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                        />

                    </div>

                    {/* Save Button */}
                    <div className="md:col-span-2">

                        <button
                            onClick={handleSave}
                            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold shadow-lg hover:shadow-emerald-200 hover:scale-[1.01] transition-all duration-300"
                        >
                            Save Information
                        </button>

                    </div>

                </div>
            )}

        </div>
    );
};

export default PersonalForm;