/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiArrowRight } from "react-icons/fi";

const CategoryCard = ({ id, title, jobs, icon: Icon, active, onClick }:any) => (
  <button
    onClick={() => onClick(id)}
    className={`
      text-left rounded-xl border p-6 w-full transition-all duration-200
      ${active
        ? "bg-indigo-600 border-indigo-600 shadow-lg"
        : "bg-white border-gray-200 hover:border-indigo-300 hover:shadow-md"}
    `}
  >
    <div
      className={`
        w-10 h-10 flex items-center justify-center rounded-lg mb-5
        ${active ? "bg-indigo-500" : "bg-indigo-50"}
      `}
    >
      <Icon className={`w-5 h-5 ${active ? "text-white" : "text-indigo-500"}`} />
    </div>

    <p className={`font-bold text-base mb-1 ${active ? "text-white" : "text-gray-900"}`}>
      {title}
    </p>

    <div className="flex items-center gap-1">
      <span className={`text-sm ${active ? "text-indigo-200" : "text-gray-500"}`}>
        {jobs} jobs available
      </span>
      <FiArrowRight className={`w-3.5 h-3.5 ${active ? "text-indigo-200" : "text-indigo-400"}`} />
    </div>
  </button>
);

export default CategoryCard