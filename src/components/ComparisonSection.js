import React from "react";
import {
  DocumentDuplicateIcon,
  DocumentTextIcon,
  MagnifyingGlassCircleIcon,
  ChartBarIcon,
  LinkIcon,
  ClipboardDocumentCheckIcon,
  BellAlertIcon,
  ShieldCheckIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { FaThumbsUp } from "react-icons/fa";
//import { UserIcon } from '@heroicons/react/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { UserIcon } from '@heroicons/react/24/solid';



const ComparisonSection = () => {
  const comparisonData = [
    {
      aspect: "Prescription Handling",
      other: {
        text: "Stores xerox/digital copies of handwritten prescriptions without full digitization",
        icon: <DocumentDuplicateIcon className="h-6 w-6 text-red-500 inline-block mr-2" />,
      },
      gudmed: {
        text: "Fully digitizes handwritten prescriptions and converts data into a digital format",
        icon: <DocumentTextIcon className="h-6 w-6 text-green-500 inline-block mr-2" />,
      },
    },
    {
      aspect: "Data Accessibility",
      other: {
        text: "Limited to viewing scanned or xeroxed copies",
        icon: <MagnifyingGlassCircleIcon className="h-6 w-6 text-red-500 inline-block mr-2" />,
      },
      gudmed: {
        text: "Provides structured, searchable data, allowing easy access to individual prescription details",
        icon: <ChartBarIcon className="h-6 w-6 text-green-500 inline-block mr-2" />,
      },
    },
    {
      aspect: "Data Usability",
      other: {
        text: "Minimal usability for analytics or processing",
        icon: <ChartBarIcon className="h-6 w-6 text-red-500 inline-block mr-2" />,
      },
      gudmed: {
        text: "Enables analytics, easy access, and integration for various use cases, such as patient engagement and follow-ups",
        icon: <LinkIcon className="h-6 w-6 text-green-500 inline-block mr-2" />,
      },
    },
    {
      aspect: "Integration Capability",
      other: {
        text: "Limited due to storage of image files rather than structured data",
        icon: <LinkIcon className="h-6 w-6 text-red-500 inline-block mr-2" />,
      },
      gudmed: {
        text: "High integration capability with other hospital systems, pharmacies, and labs",
        icon: <ClipboardDocumentCheckIcon className="h-6 w-6 text-green-500 inline-block mr-2" />, // Corrected this
      },
    },
    {
      aspect: "Operational Efficiency",
      other: {
        text: "Provides a basic digital record but does not improve workflow significantly",
        icon: <BellAlertIcon className="h-6 w-6 text-red-500 inline-block mr-2" />,
      },
      gudmed: {
        text: "Improves operational efficiency through automated reminders, real-time pharmacy updates, and lab test offerings",
        icon: <ClipboardDocumentCheckIcon className="h-6 w-6 text-green-500 inline-block mr-2" />, // Corrected this
      },
    },
    {
      aspect: "Patient Engagement",
      other: {
        text: "Limited engagement; does not facilitate reminders or follow-up actions",
        icon: <BellAlertIcon className="h-6 w-6 text-red-500 inline-block mr-2" />,
      },
      gudmed: {
        text: "Engages patients with reminders for medication, follow-up appointments, and lab test notifications",
        icon: <ClipboardDocumentCheckIcon className="h-6 w-6 text-green-500 inline-block mr-2" />, // Corrected this
      },
    },
    {
      aspect: "Document Format",
      other: {
        text: "Retains original handwriting in an image format",
        icon: <DocumentDuplicateIcon className="h-6 w-6 text-red-500 inline-block mr-2" />,
      },
      gudmed: {
        text: "Converts prescription to a digital text format, making it easier to use and share electronically",
        icon: <DocumentTextIcon className="h-6 w-6 text-green-500 inline-block mr-2" />,
      },
    },
    {
      aspect: "Technology Benefits",
      other: {
        text: "Provides a basic digitization solution, often for record-keeping",
        icon: <ShieldCheckIcon className="h-6 w-6 text-red-500 inline-block mr-2" />,
      },
      gudmed: {
        text: "Offers real-time benefits, reducing discharge times and enhancing patient care post-treatment",
        icon: <LockClosedIcon className="h-6 w-6 text-green-500 inline-block mr-2" />,
      },
    },
    {
      aspect: "Data Security",
      other: {
        text: "Stores data as images, often without structured data safeguards",
        icon: <ShieldCheckIcon className="h-6 w-6 text-red-500 inline-block mr-2" />,
      },
      gudmed: {
        text: "Offers structured, securely managed data without third-party sharing",
        icon: <LockClosedIcon className="h-6 w-6 text-green-500 inline-block mr-2" />,
      },
    },
    // ... Other rows here (unchanged) ...
  ];

  return (
    <section className="bg-white py-12 px-1 sm:px-8 lg:px-16">
    <h1 className="text-center text-3xl sm:text-4xl lg:text-6xl font-bold font-sans text-[#2E4168] leading-snug sm:leading-normal mt-4 mb-12 flex items-center justify-center gap-2">
      Comparison between Other vs GudMed
      {/* <FaThumbsUp className="text-[#2E4168] sm:text-3xl lg:text-4xl " /> */}
    </h1> 

   



      <div className="overflow-hidden shadow-xl rounded-lg">
        <div className="overflow-x-auto w-full">
       

          <table className="table-auto min-w-full bg-white rounded-lg">
            <thead className="bg-blue-400 text-white text-sm uppercase">
              <tr>
                <th className="border border-blue-300 px-4 sm:px-6 py-3 text-left font-bold">
                  Aspect
                </th>
                <th className="border border-blue-300 px-4 sm:px-6 py-3 text-left font-bold">
                  Other Technology
                </th>
                <th className="border border-blue-300 px-4 sm:px-6 py-3 text-left font-bold text-white">
                  GudMed Technology
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-100 transition-transform duration-300`}
                >
                  <td className="border border-gray-300 px-4 sm:px-6 py-4 text-blue-900 font-semibold">
                    {item.aspect}
                  </td>
                  <td className="border border-gray-300 px-4 sm:px-6 py-4 text-gray-600">
                    {item.other.icon}
                    {item.other.text}
                  </td>
                  <td className="border border-gray-300 px-4 sm:px-6 py-4 text-green-700 font-medium">
                    {item.gudmed.icon}
                    {item.gudmed.text}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
