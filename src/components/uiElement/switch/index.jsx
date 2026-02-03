import React, { useState } from 'react';

/**
 * Reusable Switch Component using Tailwind CSS
 * 
 * @param {Object} props
 * @param {boolean} props.checked - Whether the switch is on/off
 * @param {Function} props.onChange - Callback when switch state changes
 * @param {string} props.label - Optional label for the switch
 * @param {string} props.size - Size variant: 'sm', 'md', 'lg' (default: 'md')
 * @param {boolean} props.disabled - Whether the switch is disabled
 * @param {string} props.color - Color variant: 'blue', 'green', 'red', 'amber', 'purple' (default: 'blue')
 * @param {string} props.id - HTML id attribute for accessibility
 */
const Switch = ({
  checked = false,
  onChange,
  label,
  size = 'md',
  disabled = false,
  color = 'blue',
  id,
  className = ''
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e) => {
    const newState = e.target.checked;
    setIsChecked(newState);
    if (onChange) {
      onChange(newState);
    }
  };

  // Size configurations
  const sizeStyles = {
    sm: {
      container: 'h-5 w-9',
      slider: 'h-4 w-4',
      translate: 'translate-x-4',
      text: 'text-sm'
    },
    md: {
      container: 'h-6 w-11',
      slider: 'h-5 w-5',
      translate: 'translate-x-5',
      text: 'text-base'
    },
    lg: {
      container: 'h-7 w-14',
      slider: 'h-6 w-6',
      translate: 'translate-x-7',
      text: 'text-lg'
    }
  };

  // Color configurations
  const colorStyles = {
    blue: 'bg-blue-600 focus:ring-blue-300',
    green: 'bg-green-600 focus:ring-green-300',
    red: 'bg-red-600 focus:ring-red-300',
    amber: 'bg-amber-500 focus:ring-amber-300',
    purple: 'bg-purple-600 focus:ring-purple-300'
  };

  const currentSize = sizeStyles[size] || sizeStyles.md;
  const currentColor = colorStyles[color] || colorStyles.blue;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <label className="inline-flex items-center cursor-pointer group">
        <input
          id={id}
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
          aria-label={label}
        />
        
        {/* Switch Background */}
        <div
          className={`
            relative inline-flex
            ${currentSize.container}
            ${isChecked ? currentColor : 'bg-gray-300 dark:bg-gray-600'}
            rounded-full
            transition-all duration-300 ease-in-out
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'}
            focus-within:ring-4
            ${isChecked ? currentColor : 'focus-within:ring-gray-200 dark:focus-within:ring-gray-700'}
          `}
        >
          {/* Slider Circle */}
          <div
            className={`
              absolute top-0.5 left-0.5
              ${currentSize.slider}
              bg-white rounded-full
              shadow-md
              transition-transform duration-300 ease-in-out
              ${isChecked ? currentSize.translate : 'translate-x-0'}
              dark:shadow-lg
            `}
          />
        </div>

        {/* Label Text */}
        {label && (
          <span
            className={`
              ml-2
              ${currentSize.text}
              font-medium
              text-gray-700 dark:text-gray-200
              transition-colors duration-200
              ${disabled ? 'opacity-60' : 'group-hover:text-gray-900 dark:group-hover:text-white'}
            `}
          >
            {label}
          </span>
        )}
      </label>
    </div>
  );
};

export default Switch;