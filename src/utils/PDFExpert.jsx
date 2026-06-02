import { useRef } from "react";
import { useSelector } from "react-redux";

export default function PDF() {
  const iframeRef = useRef(null);
  const resume = useSelector((state) => state.resume);

  const downloadPDF = () => {
    const iframe = iframeRef.current;
    const doc =
      iframe.contentDocument || iframe.contentWindow.document;

    doc.open();
    doc.write(`
      <html>
        <head>
          <title>Resume</title>
          <style>
            body{
              font-family: Arial, sans-serif;
              padding:20px;
              color:#000;
            }
            h1{
              margin-bottom:5px;
            }
            h2{
              margin-top:20px;
              border-bottom:1px solid #ccc;
            }
          </style>
        </head>
        <body>
          <h1>${resume.personal.name || "Your Name"}</h1>

          <p>
            ${resume.personal.email || ""}
            |
            ${resume.personal.phone || ""}
          </p>

          <p>${resume.personal.address || ""}</p>

          <h2>Summary</h2>
          <p>${resume.personal.summary || ""}</p>

          <h2>Education</h2>
          <p>
            ${resume.education?.degree || ""}
            -
            ${resume.education?.college || ""}
          </p>

          <h2>Skills</h2>
          <p>
            ${
              Object.values(resume.skills || {})
                .filter(Boolean)
                .join(", ")
            }
          </p>

          <h2>Projects</h2>
          <p>${resume.projects?.name || ""}</p>
          <p>${resume.projects?.description || ""}</p>

          <h2>Experience</h2>
          <p>
            ${resume.experience?.role || ""}
            -
            ${resume.experience?.company || ""}
          </p>
        </body>
      </html>
    `);
    doc.close();

    iframe.contentWindow.focus();
    iframe.contentWindow.print();
  };

  return (
    <>
      <button
        onClick={downloadPDF}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Download PDF
      </button>

      <iframe
        ref={iframeRef}
        title="pdf-frame"
        style={{ display: "none" }}
      />
    </>
  );
}