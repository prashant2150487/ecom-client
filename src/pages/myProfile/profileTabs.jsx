import { Bell, MapPin, User } from "lucide-react";

export const ProfileTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="border-b border-slate-200 px-8 flex gap-8">
      <button
      onClick={() => setActiveTab("personal")}
        className={`py-4 px-2 font-semibold text-sm border-b-2 transition ${
          activeTab === "personal"
            ? "border-blue-500 text-blue-600"
            : "border-transparent text-slate-600 hover:text-slate-900"
        }`}
      >
        <User size={16} className="inline mr-2" /> Personal
      </button>
      <button
        onClick={() => setActiveTab("addresses")}
        className={`py-4 px-2 font-semibold text-sm border-b-2 transition ${
          activeTab === "addresses"
            ? "border-blue-500 text-blue-600"
            : "border-transparent text-slate-600 hover:text-slate-900"
        }`}
      >
        <Bell size={16} className="inline mr-2" /> Address
      </button>
      <button
        onClick={() => setActiveTab("orders")}
        className={`py-4 px-2 font-semibold text-sm border-b-2 transition ${
          activeTab === "orders"
            ? "border-blue-500 text-blue-600"
            : "border-transparent text-slate-600 hover:text-slate-900"
        }`}
      >
        <MapPin size={16} className="inline mr-2" /> Orders
      </button>
    </div>
  );
};
