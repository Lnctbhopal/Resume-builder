import { useSelector } from "react-redux";

export default function ExperienceSection() {

    const experience = useSelector((state) => state.resume.experience);

    return (
        <div className="relative overflow-hidden bg-white/80 backdrop-blur-2xl border border-slate-200 rounded-[32px] shadow-[0_20px_70px_rgba(15,23,42,0.08)] p-6 md:p-8 mt-6">

            {/* Background Glow */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-200/30 rounded-full blur-3xl"></div>

            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-indigo-200/30 rounded-full blur-3xl"></div>

            {/* Header */}
            <div className="relative border-b border-slate-200 pb-4 mb-6">

                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-800">
                    Experience
                </h2>

                <p className="text-sm text-slate-500 mt-2">
                    Professional work experience and career history
                </p>

            </div>

            {/* Experience List */}
            <div className="relative space-y-5">

                {experience.map((exp, index) => {
                    return (
                        <div
                            key={index}
                            className="group bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                        >

                            {/* Top Section */}
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

                                <div>

                                    {/* Company */}
                                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"></span>
                                        {exp.company}
                                    </h3>

                                    {/* Role */}
                                    <p className="mt-2 text-sm font-semibold text-indigo-600">
                                        {exp.role}
                                    </p>

                                    {/* Location */}
                                    <p className="mt-1 text-xs text-slate-500">
                                        {exp.location}
                                    </p>

                                </div>

                                {/* Dates */}
                                <div className="px-4 py-2 rounded-2xl bg-slate-100 text-xs font-semibold text-slate-600 border border-slate-200 whitespace-nowrap">
                                    {exp.startDate} - {exp.endDate}
                                </div>

                            </div>

                            {/* Tech Stack */}
                            {exp.techStack && (
                                <div className="flex flex-wrap gap-2 mt-5">

                                    <span className="px-3 py-1.5 text-xs font-semibold bg-blue-50 text-blue-600 rounded-full border border-blue-100 shadow-sm">
                                        {exp.techStack}
                                    </span>

                                </div>
                            )}

                            {/* Description */}
                            <p className="mt-5 text-sm leading-relaxed text-slate-600">
                                {exp.description}
                            </p>

                        </div>
                    );
                })}

            </div>

        </div>
    );
}