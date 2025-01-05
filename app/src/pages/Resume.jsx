import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import cvPdf from "../assets/WebDevelopment_thaweesin_CV.pdf";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  // eslint-disable-next-line no-unused-vars
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r bg-clip-text text-transparent from-blue-500 via-purple-500 to-sky-500 animate-text">
        Resume
      </h1>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 shadow-xl dark:shadow-neon rounded-lg">
        <Document
          file={cvPdf}
          onLoadSuccess={onDocumentLoadSuccess}
          className="flex justify-center overflow-x-auto"
        >
          <Page
            pageNumber={1}
            scale={1.3}
            className="mb-4 border border-gray-300 dark:border-gray-600 rounded-lg"
          />
        </Document>
      </div>
      <div className="text-center mt-8">
        <a
          href={cvPdf}
          download="Thaweesin_WebDevelopment_CV.pdf"
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition transform hover:scale-105"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Resume;
