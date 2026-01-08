import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
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
  onChange,
  value,
  maxLength,
  minLength,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };
  // Variant classes
  const variantClasses = {
    default: "bg-white border border-gray-300",
    filled: "bg-gray-100 border-b-2 border-gray-300",
    outlined: "bg-transparent border-2 border-gray-300",
  };
  // State classes
  const stateClasses = error
    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
    : success
    ? "border-green-500 focus:border-green-500 focus:ring-green-500"
    : "focus:border-blue-500 focus:ring-blue-500";
  const inputClasses = `
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : ""}
        rounded-lg outline-none transition-all duration-200
        focus:ring-1 
        text-gray-700
        ${className}
    `
    .trim()
    .replace(/\s+/g, " ");
  const inputType = type === "password" && showPassword ? "text" : type;
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
          onChange={onChange}
          value={value}
          maxLength={maxLength}
          minLength={minLength}
          {...props}
        />
        {type === "password" && (
          <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2">
            {showPassword ? (
              <EyeClosed className="w-5 h-5 text-black" />
            ) : (
              <Eye className="w-5 h-5 text-black" />
            )}
          </button>
        )}
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

// import React, { useState, forwardRef } from 'react';
// import { Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';

// // Reusable Input Component
// const Input = forwardRef(({
//   label,
//   type = 'text',
//   placeholder,
//   value,
//   onChange,
//   onBlur,
//   error,
//   success,
//   helperText,
//   disabled = false,
//   required = false,
//   className = '',
//   icon: Icon,
//   maxLength,
//   minLength,
//   pattern,
//   autoComplete,
//   name,
//   id,
//   variant = 'default', // default, filled, outlined
//   size = 'md', // sm, md, lg
//   fullWidth = true,
//   showPasswordToggle = true,
//   ...props
// }, ref) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isFocused, setIsFocused] = useState(false);

//   const inputId = id || name || `input-${label?.replace(/\s+/g, '-').toLowerCase()}`;
//   const inputType = type === 'password' && showPassword ? 'text' : type;

//   // Size classes
//   const sizeClasses = {
//     sm: 'px-3 py-1.5 text-sm',
//     md: 'px-4 py-2 text-base',
//     lg: 'px-5 py-3 text-lg'
//   };

//   // Variant classes
//   const variantClasses = {
//     default: 'bg-white border border-gray-300',
//     filled: 'bg-gray-100 border-b-2 border-gray-300',
//     outlined: 'bg-transparent border-2 border-gray-300'
//   };

//   // State classes
//   const stateClasses = error
//     ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
//     : success
//     ? 'border-green-500 focus:border-green-500 focus:ring-green-500'
//     : 'focus:border-blue-500 focus:ring-blue-500';

//   const inputClasses = `
//     ${sizeClasses[size]}
//     ${variantClasses[variant]}
//     ${stateClasses}
//     ${fullWidth ? 'w-full' : ''}
//     ${disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : ''}
//     ${Icon || type === 'password' ? 'pr-10' : ''}
//     rounded-lg outline-none transition-all duration-200
//     focus:ring-2 focus:ring-opacity-50
//     ${className}
//   `.trim().replace(/\s+/g, ' ');

//   return (
//     <div className={`${fullWidth ? 'w-full' : ''} mb-4`}>
//       {label && (
//         <label
//           htmlFor={inputId}
//           className={`block text-sm font-medium mb-1.5 ${
//             error ? 'text-red-700' : success ? 'text-green-700' : 'text-gray-700'
//           }`}
//         >
//           {label}
//           {required && <span className="text-red-500 ml-1">*</span>}
//         </label>
//       )}

//       <div className="relative">
//         <input
//           ref={ref}
//           id={inputId}
//           name={name}
//           type={inputType}
//           value={value}
//           onChange={onChange}
//           onBlur={(e) => {
//             setIsFocused(false);
//             onBlur?.(e);
//           }}
//           onFocus={() => setIsFocused(true)}
//           placeholder={placeholder}
//           disabled={disabled}
//           required={required}
//           maxLength={maxLength}
//           minLength={minLength}
//           pattern={pattern}
//           autoComplete={autoComplete}
//           className={inputClasses}
//           aria-invalid={error ? 'true' : 'false'}
//           aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
//           {...props}
//         />

//         {/* Icons */}
//         <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
//           {error && (
//             <AlertCircle className="w-5 h-5 text-red-500" />
//           )}
//           {success && !error && (
//             <CheckCircle className="w-5 h-5 text-green-500" />
//           )}
//           {Icon && !error && !success && (
//             <Icon className="w-5 h-5 text-gray-400" />
//           )}
//           {type === 'password' && showPasswordToggle && (
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="text-gray-500 hover:text-gray-700 focus:outline-none"
//               tabIndex={-1}
//             >
//               {showPassword ? (
//                 <EyeOff className="w-5 h-5" />
//               ) : (
//                 <Eye className="w-5 h-5" />
//               )}
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Character count */}
//       {maxLength && isFocused && (
//         <div className="text-xs text-gray-500 mt-1 text-right">
//           {value?.length || 0}/{maxLength}
//         </div>
//       )}

//       {/* Error message */}
//       {error && (
//         <p id={`${inputId}-error`} className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
//           <AlertCircle className="w-4 h-4" />
//           {error}
//         </p>
//       )}

//       {/* Success message */}
//       {success && !error && (
//         <p className="mt-1.5 text-sm text-green-600 flex items-center gap-1">
//           <CheckCircle className="w-4 h-4" />
//           {success}
//         </p>
//       )}

//       {/* Helper text */}
//       {helperText && !error && !success && (
//         <p id={`${inputId}-helper`} className="mt-1.5 text-sm text-gray-500">
//           {helperText}
//         </p>
//       )}
//     </div>
//   );
// });

// Input.displayName = 'Input';

// // Demo Component
// export default function InputDemo() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     username: '',
//     phone: '',
//     bio: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));

//     // Clear error on change
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const handleBlur = (e) => {
//     const { name } = e.target;
//     setTouched(prev => ({ ...prev, [name]: true }));
//     validateField(name, formData[name]);
//   };

//   const validateField = (name, value) => {
//     let error = '';

//     switch (name) {
//       case 'email':
//         if (!value) {
//           error = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(value)) {
//           error = 'Email is invalid';
//         }
//         break;
//       case 'password':
//         if (!value) {
//           error = 'Password is required';
//         } else if (value.length < 8) {
//           error = 'Password must be at least 8 characters';
//         }
//         break;
//       case 'username':
//         if (!value) {
//           error = 'Username is required';
//         } else if (value.length < 3) {
//           error = 'Username must be at least 3 characters';
//         }
//         break;
//       case 'phone':
//         if (value && !/^\+?[\d\s-()]+$/.test(value)) {
//           error = 'Phone number is invalid';
//         }
//         break;
//     }

//     setErrors(prev => ({ ...prev, [name]: error }));
//     return !error;
//   };

//   const handleSubmit = () => {

//     // Validate all fields
//     const fields = Object.keys(formData);
//     const newErrors = {};
//     fields.forEach(field => {
//       if (!validateField(field, formData[field])) {
//         newErrors[field] = errors[field];
//       }
//     });

//     if (Object.keys(newErrors).length === 0) {
//       alert('Form submitted successfully!');
//       console.log('Form data:', formData);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
//       <div className="max-w-2xl mx-auto">
//         <div className="bg-white rounded-2xl shadow-xl p-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">
//             Reusable Input Component
//           </h1>
//           <p className="text-gray-600 mb-8">
//             Production-ready input with validation, accessibility, and all features
//           </p>

//           <div className="space-y-6">
//             {/* Email Input */}
//             <Input
//               label="Email Address"
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               placeholder="you@example.com"
//               error={touched.email && errors.email}
//               success={touched.email && formData.email && !errors.email ? 'Looks good!' : ''}
//               required
//               autoComplete="email"
//             />

//             {/* Password Input */}
//             <Input
//               label="Password"
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               placeholder="Enter your password"
//               error={touched.password && errors.password}
//               helperText="Must be at least 8 characters"
//               required
//               minLength={8}
//               autoComplete="new-password"
//             />

//             {/* Username Input with character limit */}
//             <Input
//               label="Username"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               placeholder="Choose a username"
//               error={touched.username && errors.username}
//               maxLength={20}
//               required
//               variant="outlined"
//             />

//             {/* Phone Input (Optional) */}
//             <Input
//               label="Phone Number"
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               placeholder="+1 (555) 123-4567"
//               error={touched.phone && errors.phone}
//               helperText="Optional: We'll only use this for account recovery"
//               autoComplete="tel"
//               size="lg"
//             />

//             {/* Bio Textarea styled as Input */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-1.5 text-gray-700">
//                 Bio
//               </label>
//               <textarea
//                 name="bio"
//                 value={formData.bio}
//                 onChange={handleChange}
//                 placeholder="Tell us about yourself..."
//                 maxLength={200}
//                 rows={4}
//                 className="w-full px-4 py-2 text-base bg-white border border-gray-300 rounded-lg outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 resize-none"
//               />
//               <div className="text-xs text-gray-500 mt-1 text-right">
//                 {formData.bio.length}/200
//               </div>
//             </div>

//             {/* Disabled Input Example */}
//             <Input
//               label="Account Type"
//               value="Premium"
//               disabled
//               helperText="Contact support to change your account type"
//             />

//             <button
//               onClick={handleSubmit}
//               className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
//             >
//               Submit Form
//             </button>
//           </div>

//           {/* Component Features */}
//           <div className="mt-8 pt-6 border-t border-gray-200">
//             <h3 className="font-semibold text-gray-900 mb-3">Component Features:</h3>
//             <ul className="text-sm text-gray-600 space-y-2">
//               <li>✓ Label with required indicator</li>
//               <li>✓ Error & success states with messages</li>
//               <li>✓ Helper text support</li>
//               <li>✓ Password visibility toggle</li>
//               <li>✓ Character counter for maxLength</li>
//               <li>✓ Multiple variants (default, filled, outlined)</li>
//               <li>✓ Multiple sizes (sm, md, lg)</li>
//               <li>✓ Icon support</li>
//               <li>✓ Disabled state</li>
//               <li>✓ Full accessibility (ARIA labels)</li>
//               <li>✓ Forward ref support</li>
//               <li>✓ Auto-complete support</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
