import { useSelector } from "react-redux";

const SkillsSection = () => {

    const skills = useSelector((state) => state.resume.skills);

    console.log("Skills in SkillsSection:", skills);

    return (
        <div className="mt-6 bg-white/80 backdrop-blur-2xl border border-slate-200 rounded-[32px] shadow-[0_20px_70px_rgba(15,23,42,0.08)] overflow-hidden">

            {/* Header */}
            <div className="px-6 py-5 border-b border-slate-200 bg-gradient-to-r from-blue-50 via-indigo-50 to-cyan-50">

                <h2 className="text-2xl font-black tracking-tight text-slate-800">
                    Skills
                </h2>

                <p className="text-sm text-slate-500 mt-1">
                    Technical skills and professional expertise
                </p>

            </div>

            {/* Skills Content */}
            <div className="p-6 space-y-8">

                {/* Programming */}
                <div>

                    <div className="flex items-center gap-3 mb-4">

                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-200">

                            <span className="text-white text-sm font-bold">
                                P
                            </span>

                        </div>

                        <div>

                            <h3 className="text-lg font-bold text-slate-800">
                                Programming Languages
                            </h3>

                            <p className="text-sm text-slate-500">
                                Core programming knowledge
                            </p>

                        </div>

                    </div>

                    <div className="flex flex-wrap gap-3">

                        {skills.Programming &&
                            skills.Programming.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 rounded-2xl bg-blue-50 text-blue-700 border border-blue-100 text-sm font-medium hover:scale-105 transition-all duration-300"
                                >
                                    {skill}
                                </span>
                            ))}

                    </div>

                </div>

                {/* Frontend */}
                <div>

                    <div className="flex items-center gap-3 mb-4">

                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-200">

                            <span className="text-white text-sm font-bold">
                                F
                            </span>

                        </div>

                        <div>

                            <h3 className="text-lg font-bold text-slate-800">
                                Frontend
                            </h3>

                            <p className="text-sm text-slate-500">
                                UI and frontend technologies
                            </p>

                        </div>

                    </div>

                    <div className="flex flex-wrap gap-3">

                        {skills.frontend &&
                            skills.frontend.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-100 text-sm font-medium hover:scale-105 transition-all duration-300"
                                >
                                    {skill}
                                </span>
                            ))}

                    </div>

                </div>

                {/* Backend */}
                <div>

                    <div className="flex items-center gap-3 mb-4">

                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-200">

                            <span className="text-white text-sm font-bold">
                                B
                            </span>

                        </div>

                        <div>

                            <h3 className="text-lg font-bold text-slate-800">
                                Backend
                            </h3>

                            <p className="text-sm text-slate-500">
                                Server-side technologies
                            </p>

                        </div>

                    </div>

                    <div className="flex flex-wrap gap-3">

                        {skills.backend &&
                            skills.backend.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 rounded-2xl bg-purple-50 text-purple-700 border border-purple-100 text-sm font-medium hover:scale-105 transition-all duration-300"
                                >
                                    {skill}
                                </span>
                            ))}

                    </div>

                </div>

                {/* Database */}
                <div>

                    <div className="flex items-center gap-3 mb-4">

                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center shadow-lg shadow-yellow-200">

                            <span className="text-white text-sm font-bold">
                                D
                            </span>

                        </div>

                        <div>

                            <h3 className="text-lg font-bold text-slate-800">
                                Database
                            </h3>

                            <p className="text-sm text-slate-500">
                                Database management systems
                            </p>

                        </div>

                    </div>

                    <div className="flex flex-wrap gap-3">

                        {skills.database &&
                            skills.database.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 rounded-2xl bg-yellow-50 text-yellow-700 border border-yellow-100 text-sm font-medium hover:scale-105 transition-all duration-300"
                                >
                                    {skill}
                                </span>
                            ))}

                    </div>

                </div>

            </div>

        </div>
    );
};

export default SkillsSection;