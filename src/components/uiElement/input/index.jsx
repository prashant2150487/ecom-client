import { useState } from "react";

export const Input = ({
    placeholder = "",
    error = "",
    label = "",
    success,
    variant = "default",
    fullWidth = false,
    type = "text",
    className,
    size = "md",
    required = false,
    ...props
}) => {
    const [password, showPassword] = useState(false);

    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-5 py-3 text-lg'
    }
    // Variant classes
    const variantClasses = {
        default: 'bg-white border border-gray-300',
        filled: 'bg-gray-100 border-b-2 border-gray-300',
        outlined: 'bg-transparent border-2 border-gray-300'
    };
    // State classes
    const stateClasses = error
        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
        : success
            ? 'border-green-500 focus:border-green-500 focus:ring-green-500'
            : 'focus:border-blue-500 focus:ring-blue-500';
    const inputClasses = `
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : ""}
        rounded-lg outline-none transition-all duration-200
        focus:ring-1 
        text-gray-700
        ${className}
    `.trim().replace(/\s+/g, ' ')
    const inputType = type === 'password' && showPassword ? 'text' : type;
    return (
        <div>
            <label className="font-medium text-gray-700 mb-1.5 text-sm">
                {label}
                {required && <span className="text-red-400">*</span>}
            </label>
            <div className="relative">
                <input
                    placeholder={placeholder}
                    className={inputClasses}
                    type={inputType}
                    {...props}

                />
            </div>
            {error && (
                <p>
                    {error}
                </p>
            )}

        </div>
    )
}