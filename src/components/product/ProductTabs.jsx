export const TABS = [
  { id: "description", label: "Descriptions" },
  { id: "additional", label: "Additional Information" },
  { id: "feedback", label: "Customer Feedback" },
];

export default function ProductTabs({ activeTab, onChange }) {
  return (
    <div className="border-b border-gray-200 overflow-x-auto overflow-y-hidden hide-scrollbar"> 
      <div className="flex gap-x-8 min-w-max justify-center">
        {TABS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChange(tab.id)}
              className={`relative pb-4 pt-2 px-4 text-sm md:text-base whitespace-nowrap transition-colors cursor-pointer ${
                isActive
                  ? "text-gray-900 font-semibold"
                  : "text-gray-500 font-medium hover:text-gray-700"
              }`}
            >
              {tab.label}
              <span
                className={`absolute left-0 right-0 w-full bottom-0 h-0.5 bg-[#00B712] rounded-full transition-transform duration-300 origin-left ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
