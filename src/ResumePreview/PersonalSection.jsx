import { useSelector } from "react-redux";

export default function ResumePreview() {

  const { personal } = useSelector(
    (state) => state.resume
  );

  return (
    <div className="w-full bg-white rounded-[32px] border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.08)] overflow-hidden">

      {/* Top Gradient */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500"></div>

      <div className="p-8 md:p-10">

        {/* Name */}
        <div className="text-center">

          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-800">
            {personal?.name || "Your Name"}
          </h1>

          <p className="mt-3 text-slate-500 text-sm md:text-base">
            {personal?.email || "email@example.com"}
            <span className="mx-3 text-slate-300">•</span>
            {personal?.phone || "+91 XXXXX XXXXX"}
          </p>

        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-200"></div>

        {/* Summary */}
        <div>

          <h2 className="text-lg font-bold text-slate-800 mb-3 uppercase tracking-wider">
            Professional Summary
          </h2>

          <p className="text-slate-600 leading-relaxed text-[15px]">
            {personal?.summary ||
              "Write a short professional summary about yourself..."}
          </p>

        </div>

        {/* Links */}
        <div className="mt-8 flex flex-wrap items-center gap-4">

          {personal?.linkdin && (
            <a
              href={personal.linkdin}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-blue-50 text-blue-600 text-sm font-semibold hover:bg-blue-100 transition-all duration-300"
            >
              LinkedIn Profile
            </a>
          )}

          {personal?.Github && (
            <a
              href={personal.Github}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-sm font-semibold hover:bg-slate-200 transition-all duration-300"
            >
              GitHub Profile
            </a>
          )}

        </div>

      </div>
    </div>
  );
}