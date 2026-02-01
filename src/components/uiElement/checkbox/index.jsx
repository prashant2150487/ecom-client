import { Check } from "lucide-react";

const Checkbox = ({
  label,
  name,
  checked = false,
  onChange,
  disabled = false,
}) => {
  return (
    <label
      className={`flex items-center gap-3 select-none ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <div className="relative">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="sr-only"
        />

        <div
          className={`
            w-5 h-5 rounded border-2 flex items-center justify-center
            transition-all duration-200
            ${
              checked
                ? "bg-blue-600 border-blue-600"
                : "bg-white border-gray-300 hover:border-blue-400"
            }
            ${disabled ? "opacity-50" : ""}
          `}
        >
          {checked && (
            <Check
              className="w-3.5 h-3.5 text-white"
              strokeWidth={3}
            />
          )}
        </div>
      </div>

      {label && (
        <span className={`text-gray-700 ${disabled ? "opacity-50" : ""}`}>
          {label}
        </span>
      )}
    </label>
  );
};

export default Checkbox;
