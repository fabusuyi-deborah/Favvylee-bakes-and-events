"use client";

import { menuData } from "./data/MenuData";
import { useEffect, useState } from "react";

export default function MenuTabs() {
  const [activeId, setActiveId] = useState(menuData[0].id);

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
  };

  return (
    <div className="sticky top-0 bg-[#FFFAF5] z-10 py-4 px-6 md:px-12 shadow-sm">
      <ul className="flex gap-3 md:gap-6 overflow-x-auto hide-scrollbar justify-center scroll-snap-x-mandatory">
        {menuData.map((category) => (
          <li key={category.id} className="scroll-snap-align-start">
            <button
              onClick={() => handleClick(category.id)}
              aria-current={activeId === category.id ? "page" : undefined}
              className={`
                whitespace-nowrap rounded-full border px-3 py-1 md:px-4 md:py-2 transition font-medium
                ${
                  activeId === category.id
                    ? "bg-[#4A1C1C] text-white border-[#4A1C1C] font-semibold"
                    : "border-[#D4A5A5] text-[#4A1C1C] hover:bg-[#D4A5A5]/10"
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
