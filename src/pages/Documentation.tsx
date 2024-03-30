import { useEffect, useState } from "react";
import AcceptanceLetter from "../docs/AcceptanceLetter.pdf";
import EmergencyContact from "../docs/EmergencyContact.pdf";
import MedicalForm from "../docs/MedicalForm.pdf";
import { IconLink, IconDownload, IconServer2 } from "@tabler/icons-react";
import PDFIcon from "../assets/images/icon/pdf-icon.svg";

interface File {
  path: string;
  name: string;
}

const files: File[] = [
  { path: AcceptanceLetter, name: "Acceptance Letter" },
  { path: EmergencyContact, name: "Emergency Contact" },
  { path: MedicalForm, name: "Medical Form" },
];

const Documentation: React.FC = () => {
  const [fileSizes, setFileSizes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    files.forEach((file) => {
      fetch(file.path)
        .then((response) => {
          const size = response.headers.get("Content-Length");
          if (size) {
            setFileSizes((prevSizes) => ({
              ...prevSizes,
              [file.path]: (parseInt(size) / (1024 * 1024)).toFixed(2) + " MB",
            }));
          }
        })
        .catch(console.error);
    });
  }, []);

  return (
    <div className="flex flex-col items-center pb-16">
      <h1 className="block text-3xl font-semibold sm:text-title-xxl mb-6">
        Documentation
      </h1>

      {files.map((file) => (
        <div
          key={file.path}
          className="bg-[#d4d4d4] my-4 w-1/2 rounded-md p-6 flex justify-between items-center"
        >
          {/* <IconFileTypePdf size={50} /> */}
          <div className="flex items-center gap-6">
            <img src={PDFIcon} alt="PDF Icon" className="h-16 w-16" />
            <div className="space-y-4">
              <a
                href={file.path}
                className="flex items-center gap-1 text-xl font-bold text-main mb-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconLink />
                {file.name}
              </a>
              <p className="flex gap-2 text-xs">
                <IconServer2 className="h-4 w-4" />{" "}
                {fileSizes[file.path] || "Loading..."}
              </p>
            </div>
          </div>
          <a
            href={file.path}
            className="w-full sm:w-54 bg-success py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-2xl border border-success hover:bg-transparent hover:text-success text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            download
          >
            Download <IconDownload />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Documentation;
