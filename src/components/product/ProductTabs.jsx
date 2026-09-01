export const TABS = [
  { id: "description", label: "Descriptions" },
  { id: "additional", label: "Additional Information" },
  { id: "feedback", label: "Customer Feedback" },
];

export default function ProductTabs({ activeTab, onChange }) {
  return (
    <div className="border-b border-gray-200 overflow-x-auto overflow-y-hidden"> 
      <div className="flex gap-8 min-w-max">
        {TABS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChange(tab.id)}
              className={`relative pb-4 pt-2 text-sm md:text-base whitespace-nowrap transition-colors ${
                isActive
                  ? "text-gray-900 font-semibold"
                  : "text-gray-500 font-medium hover:text-gray-700"
              }`}
            >
              {tab.label}
              <span
                className={`absolute left-0 right-0 -bottom-px h-0.5 bg-[#00B712] rounded-full transition-transform duration-300 origin-left ${
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
