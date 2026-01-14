"use client";

import { menuData } from "../data/MenuData";
import { useEffect, useState } from "react";

export default function MenuTabs() {
  const [activeId, setActiveId] = useState(menuData[0].id);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let active = menuData[0].id;
        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            active = entry.target.id;
          }
        });
        setActiveId(active);
      },
      {
        rootMargin: "0px 0px -50%",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      }
    );

    menuData.forEach((category) => {
      const element = document.getElementById(category.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsDropdownOpen(false);
  };

  const activeCategory = menuData.find((cat) => cat.id === activeId);

  return (
    <div className="sticky top-0 bg-white z-10 py-4 px-6 md:px-12 shadow-sm font-space-grotesk">
      {/* Mobile Dropdown */}
      <div className="md:hidden relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full flex items-center justify-between bg-primary text-white rounded-full px-4 py-2 font-medium"
        >
          <span>{activeCategory?.title || "Select Category"}</span>
          <svg
            className={`w-5 h-5 transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isDropdownOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsDropdownOpen(false)}
            />
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-20">
              {menuData.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleClick(category.id)}
                  className={`w-full text-left px-4 py-3 transition ${
                    activeId === category.id
                      ? "bg-primary text-white font-semibold"
                      : "text-secondary hover:bg-secondary/20"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Desktop Tabs */}
      <ul className="hidden md:flex gap-6 overflow-x-auto hide-scrollbar justify-center">
        {menuData.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => handleClick(category.id)}
              aria-current={activeId === category.id ? "page" : undefined}
              className={`
                whitespace-nowrap rounded-full border px-4 py-2 transition font-medium
                ${
                  activeId === category.id
                    ? "bg-primary text-white border-primary font-semibold"
                    : "border-primary text-secondary hover:bg-[#D4A5A5]/10"
                }
              `}
            >
              {category.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}