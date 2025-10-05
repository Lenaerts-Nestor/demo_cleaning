import React from "react";

interface ValueItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ValuesProps {
  items: ValueItem[];
}

export default function Values({ items }: ValuesProps) {
  return (
    <div className="space-y-12 sm:space-y-16">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-start gap-4 sm:gap-6">
          <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center shadow-sm">
            {item.icon}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 text-lg sm:text-xl">
              {item.title}
            </h4>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
