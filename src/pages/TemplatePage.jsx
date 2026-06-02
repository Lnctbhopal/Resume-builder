import { useNavigate } from "react-router-dom";

export default function ResumeTemplates() {

  const navigate = useNavigate();

 const templates = [
  {
    id: 1,
    name: "Modern Resume",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",
  },
  {
    id: 2,
    name: "Professional Resume",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800",
  },
  {
    id: 3,
    name: "Creative Resume",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800",
  },
  {
    id: 4,
    name: "Minimal Resume",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800",
  },
  {
    id: 5,
    name: "Executive Resume",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800",
  },
  {
    id: 6,
    name: "Tech Resume",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
  },
  {
    id: 7,
    name: "Corporate Resume",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=800",
  },
  {
    id: 8,
    name: "Clean ATS Resume",
    image: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?q=80&w=800",
  },
  {
    id: 9,
    name: "Elegant Resume",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800",
  },
  {
    id: 10,
    name: "Startup Resume",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800",
  },
];
  const handleTemplate = (template) => {

    localStorage.setItem(
      "selectedTemplate",
      JSON.stringify(template)
    );

    navigate("/builder");
  };

  return (
    <section
      id="templates"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 py-12"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10 text-center">

          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-800">
            Resume Templates
          </h2>

          <p className="text-slate-500 mt-3 text-lg">
            Choose a modern and professional template
          </p>

        </div>

        {/* Templates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {templates.map((template) => (

            <div
              key={template.id}
              className="group bg-white/80 backdrop-blur-xl border border-white/40 rounded-[30px] overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.08)] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-all duration-500"
                />

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold text-slate-800">
                  {template.name}
                </h3>

                <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                  Professional ATS-friendly resume template with modern layout.
                </p>

                {/* Button */}
                <button
                  onClick={() => handleTemplate(template)}
                  className="mt-6 w-full py-3 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  Use Template
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}