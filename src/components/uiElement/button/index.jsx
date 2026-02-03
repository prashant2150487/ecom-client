import React from 'react';

/**
 * Reusable Button Component using Tailwind CSS
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button content (text, icons, etc.)
 * @param {string} props.variant - 'solid', 'outline', 'ghost', 'link' (default: 'solid')
 * @param {string} props.size - 'xs', 'sm', 'md', 'lg', 'xl' (default: 'md')
 * @param {string} props.color - 'blue', 'green', 'red', 'amber', 'purple', 'gray' (default: 'blue')
 * @param {boolean} props.disabled - Whether the button is disabled
 * @param {boolean} props.loading - Shows loading state with spinner
 * @param {boolean} props.fullWidth - Make button width 100%
 * @param {string} props.type - HTML button type: 'button', 'submit', 'reset' (default: 'button')
 * @param {Function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 */
const Button = React.forwardRef(({
  children,
  variant = 'solid',
  size = 'md',
  color = 'blue',
  disabled = false,
  loading = false,
  fullWidth = false,
  type = 'button',
  onClick,
  className = '',
  ...props
}, ref) => {
  // Size configurations
  const sizeStyles = {
    xs: {
      padding: 'px-3 py-1.5',
      text: 'text-xs',
      gap: 'gap-1.5',
      icon: 'w-3 h-3'
    },
    sm: {
      padding: 'px-3 py-2',
      text: 'text-sm',
      gap: 'gap-2',
      icon: 'w-4 h-4'
    },
    md: {
      padding: 'px-4 py-2.5',
      text: 'text-base',
      gap: 'gap-2',
      icon: 'w-5 h-5'
    },
    lg: {
      padding: 'px-6 py-3',
      text: 'text-lg',
      gap: 'gap-2.5',
      icon: 'w-6 h-6'
    },
    xl: {
      padding: 'px-8 py-4',
      text: 'text-xl',
      gap: 'gap-3',
      icon: 'w-7 h-7'
    }
  };

  // Variant + Color combinations
  const variantColorStyles = {
    solid: {
      blue: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400',
      green: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800 disabled:bg-green-400',
      red: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 disabled:bg-red-400',
      amber: 'bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700 disabled:bg-amber-300',
      purple: 'bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800 disabled:bg-purple-400',
      gray: 'bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800 disabled:bg-gray-400'
    },
    outline: {
      blue: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100 dark:hover:bg-blue-950 dark:active:bg-blue-900 disabled:border-blue-300 disabled:text-blue-300',
      green: 'border-2 border-green-600 text-green-600 hover:bg-green-50 active:bg-green-100 dark:hover:bg-green-950 dark:active:bg-green-900 disabled:border-green-300 disabled:text-green-300',
      red: 'border-2 border-red-600 text-red-600 hover:bg-red-50 active:bg-red-100 dark:hover:bg-red-950 dark:active:bg-red-900 disabled:border-red-300 disabled:text-red-300',
      amber: 'border-2 border-amber-500 text-amber-600 hover:bg-amber-50 active:bg-amber-100 dark:hover:bg-amber-950 dark:active:bg-amber-900 disabled:border-amber-300 disabled:text-amber-300',
      purple: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50 active:bg-purple-100 dark:hover:bg-purple-950 dark:active:bg-purple-900 disabled:border-purple-300 disabled:text-purple-300',
      gray: 'border-2 border-gray-600 text-gray-600 hover:bg-gray-50 active:bg-gray-100 dark:hover:bg-gray-900 dark:active:bg-gray-800 disabled:border-gray-300 disabled:text-gray-300'
    },
    ghost: {
      blue: 'text-blue-600 hover:bg-blue-50 active:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-950 dark:active:bg-blue-900 disabled:text-blue-300',
      green: 'text-green-600 hover:bg-green-50 active:bg-green-100 dark:text-green-400 dark:hover:bg-green-950 dark:active:bg-green-900 disabled:text-green-300',
      red: 'text-red-600 hover:bg-red-50 active:bg-red-100 dark:text-red-400 dark:hover:bg-red-950 dark:active:bg-red-900 disabled:text-red-300',
      amber: 'text-amber-600 hover:bg-amber-50 active:bg-amber-100 dark:text-amber-400 dark:hover:bg-amber-950 dark:active:bg-amber-900 disabled:text-amber-300',
      purple: 'text-purple-600 hover:bg-purple-50 active:bg-purple-100 dark:text-purple-400 dark:hover:bg-purple-950 dark:active:bg-purple-900 disabled:text-purple-300',
      gray: 'text-gray-600 hover:bg-gray-50 active:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900 dark:active:bg-gray-800 disabled:text-gray-300'
    },
    link: {
      blue: 'text-blue-600 underline hover:text-blue-700 active:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 disabled:text-blue-300',
      green: 'text-green-600 underline hover:text-green-700 active:text-green-800 dark:text-green-400 dark:hover:text-green-300 disabled:text-green-300',
      red: 'text-red-600 underline hover:text-red-700 active:text-red-800 dark:text-red-400 dark:hover:text-red-300 disabled:text-red-300',
      amber: 'text-amber-600 underline hover:text-amber-700 active:text-amber-800 dark:text-amber-400 dark:hover:text-amber-300 disabled:text-amber-300',
      purple: 'text-purple-600 underline hover:text-purple-700 active:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 disabled:text-purple-300',
      gray: 'text-gray-600 underline hover:text-gray-700 active:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 disabled:text-gray-300'
    }
  };

  const currentSize = sizeStyles[size] || sizeStyles.md;
  const currentStyles = variantColorStyles[variant]?.[color] || variantColorStyles.solid.blue;

  const isDisabled = disabled || loading;

  return (
    <button
      ref={ref}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center
        ${currentSize.padding}
        ${currentSize.text}
        ${currentSize.gap}
        font-semibold
        rounded-lg
        transition-all duration-200 ease-in-out
        focus:outline-none focus:ring-4
        ${variant === 'solid' ? 'focus:ring-opacity-50' : 'focus:ring-opacity-30'}
        focus:ring-offset-2 dark:focus:ring-offset-slate-900
        ${color === 'blue' && 'focus:ring-blue-300'}
        ${color === 'green' && 'focus:ring-green-300'}
        ${color === 'red' && 'focus:ring-red-300'}
        ${color === 'amber' && 'focus:ring-amber-300'}
        ${color === 'purple' && 'focus:ring-purple-300'}
        ${color === 'gray' && 'focus:ring-gray-300'}
        ${isDisabled ? 'cursor-not-allowed opacity-75' : 'cursor-pointer active:scale-95'}
        ${fullWidth && 'w-full'}
        ${currentStyles}
        ${className}
      `}
      {...props}
    >
      {loading && (
        <svg
          className={`animate-spin ${currentSize.icon}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;