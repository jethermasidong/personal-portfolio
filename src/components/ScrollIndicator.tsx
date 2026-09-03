import { useState, useEffect } from "react";

interface ScrollIndicatorProps {
  sections: string[];
}

export default function ScrollIndicator({ sections }: ScrollIndicatorProps) {
  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } 
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50 md:flex">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          title={`Go to ${id}`}
          className={`h-0.5 transition-all duration-300 ${
            activeSection === id 
              ? "bg-slate-900 w-8 scale-x-105" 
              : "bg-slate-300 w-4 hover:w-6 hover:bg-slate-400"
          }`}
        ></a>
      ))}
    </div>
  );
}