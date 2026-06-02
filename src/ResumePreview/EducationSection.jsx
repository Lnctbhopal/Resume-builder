import { useSelector } from "react-redux";

export default function EducationSection() {
  const education = useSelector((state) => state.resume.education);

  return (
    <div className="bg-white border rounded-xl shadow-sm p-6 mt-6">
      
      <div className="flex items-center justify-between mb-4 border-b pb-2">
        <h2 className="text-lg font-semibold text-gray-800">
          Education
        </h2>
      </div>

      <div className="space-y-4">

        {education &&
          education.map((edu, index) => {
            
            // skip empty objects
            if (
              !edu.degree &&
              !edu.college &&
              !edu.year &&
              !edu.percentage &&
              !edu.highschool &&
              !edu.intermediate
            ) {
              return null;
            }

            return (
              <div
                key={index}
                className="border rounded-lg p-4 space-y-2"
              >
                {edu.degree && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Degree</span>
                    <span className="font-medium">{edu.degree}</span>
                  </div>
                )}

                {edu.college && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">College</span>
                    <span className="font-medium">{edu.college}</span>
                  </div>
                )}

                {edu.year && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Year</span>
                    <span className="font-medium">{edu.year}</span>
                  </div>
                )}

                {edu.percentage && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Percentage</span>
                    <span className="font-medium">{edu.percentage}</span>
                  </div>
                )}

                {edu.highschool && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">10th</span>
                    <span className="font-medium">{edu.highschool}</span>
                  </div>
                )}

                {edu.intermediate && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">12th</span>
                    <span className="font-medium">{edu.intermediate}</span>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}