import { useEffect } from 'react'
import { useNavigate } from 'react-router'

function SuccessModal({ isOpen, onClose, title = 'Success!', message, redirectTo = '/signin', redirectDelay = 3000 }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (isOpen && redirectTo) {
      const timer = setTimeout(() => {
        navigate(redirectTo)
        onClose()
      }, redirectDelay)

      return () => clearTimeout(timer)
    }
  }, [isOpen, redirectTo, redirectDelay, navigate, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full transform transition-all">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="p-8 text-center">
            {/* Success Icon */}
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
              <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {title}
            </h3>

            {/* Message */}
            <p className="text-gray-600 mb-6">
              {message}
            </p>

            {/* Action Button */}
            <button
              onClick={() => {
                if (redirectTo) {
                  navigate(redirectTo)
                }
                onClose()
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Continue
            </button>

            {/* Auto-redirect message */}
            {redirectTo && (
              <p className="mt-4 text-sm text-gray-500">
                Redirecting in {redirectDelay / 1000} seconds...
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessModal

