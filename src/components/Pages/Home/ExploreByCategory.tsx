"use client";

import { useState } from "react";
import {
  FaPaintBrush,
  FaChartBar,
  FaBullhorn,
  FaCamera,
  FaDesktop,
  FaBriefcase,
  FaUsers,
} from "react-icons/fa";
import { MdOutlineCode } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import CategoryCard from "./CategoryCard";

const categories = [
  { id: 1, title: "Design",         jobs: 235, icon: FaPaintBrush  },
  { id: 2, title: "Sales",          jobs: 756, icon: FaChartBar    },
  { id: 3, title: "Marketing",      jobs: 140, icon: FaBullhorn    },
  { id: 4, title: "Finance",        jobs: 325, icon: FaCamera      },
  { id: 5, title: "Technology",     jobs: 436, icon: FaDesktop     },
  { id: 6, title: "Engineering",    jobs: 542, icon: MdOutlineCode },
  { id: 7, title: "Business",       jobs: 211, icon: FaBriefcase   },
  { id: 8, title: "Human Resource", jobs: 346, icon: FaUsers       },
];


const ExploreByCategory = () => {
  const [activeId, setActiveId] = useState(3);

  return (
    <section className="xl:container mx-auto">

      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Explore by{" "}
          <span className="text-blue-500">category</span>
        </h2>
        <a
          href="#"
          className="flex items-center gap-1 text-blue-600 font-semibold text-sm hover:underline"
        >
          Show all jobs
          <FiArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Row 1 */}
      <div className="grid grid-cols-4 gap-5 mb-5">
        {categories.slice(0, 4).map((cat) => (
          <CategoryCard
            key={cat.id}
            {...cat}
            active={activeId === cat.id}
            onClick={setActiveId}
          />
        ))}
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-4 gap-5">
        {categories.slice(4).map((cat) => (
          <CategoryCard
            key={cat.id}
            {...cat}
            active={activeId === cat.id}
            onClick={setActiveId}
          />
        ))}
      </div>

    </section>
  );
};

export default ExploreByCategory;