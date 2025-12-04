import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router'
import { verifyEmail } from '../../services/auth'
import SuccessModal from '../../components/modals/SuccessModal'

function VerifyEmail() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [isVerifying, setIsVerifying] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState(null)
  const token = searchParams.get('token')

  useEffect(() => {
    const verifyEmailToken = async () => {
      if (!token) {
        setError('Verification token is missing')
        setIsVerifying(false)
        return
      }

      try {
        await verifyEmail(token)
        setIsSuccess(true)
        setIsVerifying(false)
      } catch (err) {
        setError(
          err?.detail || 
          err?.message || 
          err?.token?.[0] || 
          'Failed to verify email. The token may be invalid or expired.'
        )
        setIsVerifying(false)
      }
    }

    verifyEmailToken()
  }, [token])

  const handleRetry = () => {
    setIsVerifying(true)
    setError(null)
    setIsSuccess(false)
    
    if (token) {
      verifyEmail(token)
        .then(() => {
          setIsSuccess(true)
          setIsVerifying(false)
        })
        .catch((err) => {
          setError(
            err?.detail || 
            err?.message || 
            err?.token?.[0] || 
            'Failed to verify email. The token may be invalid or expired.'
          )
          setIsVerifying(false)
        })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Loading State */}
          {isVerifying && (
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-4">
                <svg className="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Verifying Your Email</h2>
              <p className="text-gray-600">Please wait while we verify your email address...</p>
            </div>
          )}

          {/* Error State */}
          {error && !isVerifying && !isSuccess && (
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
                <svg className="h-10 w-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Verification Failed</h2>
              <p className="text-gray-600 mb-6">{error}</p>
              
              <div className="space-y-3">
                <button
                  onClick={handleRetry}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Try Again
                </button>
                <button
                  onClick={() => navigate('/signin')}
                  className="w-full bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Go to Sign In
                </button>
              </div>
            </div>
          )}

          {/* Success State (will be shown in modal) */}
          {isSuccess && (
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Email Verified!</h2>
              <p className="text-gray-600">Your email has been successfully verified.</p>
            </div>
          )}
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={isSuccess}
        onClose={() => setIsSuccess(false)}
        title="Email Successfully Verified!"
        message="Your email address has been verified. You can now sign in to your account."
        redirectTo="/signin"
        redirectDelay={3000}
      />
    </div>
  )
}

export default VerifyEmail

