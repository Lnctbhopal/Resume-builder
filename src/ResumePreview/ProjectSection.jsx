import { useSelector } from "react-redux";

const ProjectSection = () => {

    const project = useSelector((state) => state.resume.projects);

    console.log("Project data in ProjectSection:", project);

    return (
        <div className="mt-6 bg-white/80 backdrop-blur-2xl border border-slate-200 rounded-[32px] shadow-[0_20px_70px_rgba(15,23,42,0.08)] overflow-hidden">

            {/* Header */}
            <div className="px-6 py-5 border-b border-slate-200 bg-gradient-to-r from-indigo-50 via-blue-50 to-cyan-50">

                <h2 className="text-2xl font-black tracking-tight text-slate-800">
                    Projects
                </h2>

                <p className="text-sm text-slate-500 mt-1">
                    Showcase your development and technical projects
                </p>

            </div>

            {/* Projects List */}
            <div className="p-6 space-y-5">

                {project.map((proj, index) => (

                    <div
                        key={index}
                        className="group relative bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                    >

                        {/* Glow Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-50/40 via-indigo-50/40 to-cyan-50/40"></div>

                        <div className="relative z-10">

                            {/* Top Section */}
                            <div className="flex items-start justify-between gap-4">

                                <div>

                                    {/* Project Name */}
                                    <h3 className="text-xl font-bold text-slate-800 tracking-tight">
                                        {proj.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                                        {proj.description}
                                    </p>

                                </div>

                                {/* Icon */}
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-200 shrink-0">

                                    <span className="text-white text-lg font-bold">
                                        P
                                    </span>

                                </div>

                            </div>

                            {/* Technologies */}
                            {proj.technologies && (

                                <div className="mt-5">

                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">
                                        Technologies
                                    </p>

                                    <div className="flex flex-wrap gap-2">

                                        <span className="px-4 py-2 rounded-2xl bg-blue-50 text-blue-700 border border-blue-100 text-sm font-medium">
                                            {proj.technologies}
                                        </span>

                                    </div>

                                </div>

                            )}

                            {/* Link */}
                            {proj.link && (

                                <a
                                    href={proj.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-700 text-white text-sm font-semibold shadow-lg hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-300"
                                >
                                    View Project
                                    <span className="text-base">
                                        →
                                    </span>
                                </a>

                            )}

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default ProjectSection;