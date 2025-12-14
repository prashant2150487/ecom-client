import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { logout, setIsLoginModalOpen } from "../../store/auth/authSlice";


export const UserProfile = ({ isAuthenticated }) => {
    const dispatch = useDispatch();

    const handleSignOut = () => {
        dispatch(dispatch(logout()))
        dispatch(setIsLoginModalOpen(false))
    }

    return (
        <div className="relative group">
            <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {
                    isAuthenticated ? (
                        <Link
                            to="/my-profile"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                            My Profile
                        </Link>
                    ) : null
                }
                {
                    isAuthenticated ? (
                        <Link
                            to="/orders"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            My Orders
                        </Link>
                    ) : null
                }
                {
                    isAuthenticated ? (
                        <button
                            onClick={handleSignOut}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer font-bold"
                        >
                            Sign out
                        </button>
                    ) : null
                }

                {!isAuthenticated ? (
                    <div
                        onClick={() => dispatch(setIsLoginModalOpen(true))}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-t border-gray-200 cursor-pointer w-full"
                    >
                        Sign In
                    </div>
                ) : null}



            </div>
        </div>
    );
};