import React, { useState, useEffect } from "react";
import {
  Edit2,
  Save,
  X,
  Mail,
  MapPin,
  Briefcase,
  Calendar,
  User,
  PhoneCall,
} from "lucide-react";
import { getUserProfile, updateUserProdile } from "../../services/auth";
import { ProfileTabs } from "./profileTabs";
import { PersonalTab } from "./personalTab";
import { AddressTab } from "./addressTab";
import { OrdersTab } from "./ordersTab";

const UserProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [activeTab, setActiveTab] = useState("personal");

  const fetchProfile = async () => {
    try {
      const response = await getUserProfile();
      if (response.success) {
        setProfile(response.data);
      }

      // Map API response to profile structure
    } catch (error) {
      console.error("Failed to fetch profile:", error);
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  console.log(profile, "profile");
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-1">My Profile</h1>
          <p className="text-slate-500 text-sm">
            Manage your account and preferences
          </p>
        </div>

        {/* Success Message */}
        {/* {successMessage && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl animate-pulse">
            <p className="text-green-700 font-medium text-sm">
              {successMessage}
            </p>
          </div>
        )} */}

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-6 text-white">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  // src={profileImage}
                  alt="Profile"
                  className="w-20 h-20 rounded-full border-4 border-white object-cover shadow-md"
                />
                {/* {isEditing && (
                  <label className="absolute bottom-0 right-0 bg-white rounded-full p-2 cursor-pointer hover:bg-gray-100 transition shadow-md">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <Camera size={16} className="text-blue-500" />
                  </label>
                )} */}
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  {profile?.first_name} {profile?.last_name}
                </h2>
                <p className="text-blue-100 text-sm">{profile?.email}</p>
                <div className="flex gap-3 mt-2 text-sm">
                  {profile?.is_email_verified && (
                    <span className="inline-flex items-center gap-1 rounded-full border  px-3 py-1 text-sm font-medium text-white">
                      <Mail className="text-sm" size={16} />
                      verified
                    </span>
                  )}
                  {profile?.is_phone_verified && (
                    <span className="inline-flex items-center gap-1 rounded-full border  px-3 py-1 text-sm font-medium text-white">
                      <PhoneCall className="text-sm" size={16} />
                      verified
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
          

          {/* Content */}
          <div className="p-8">
            {/* Personal Tab */}
            {
              activeTab === "personal" && <PersonalTab />
            }
            {
              activeTab === "addresses" && <AddressTab profile={profile}/>
            }
            {
              activeTab === "orders" && <OrdersTab />
            }
            {/* {activeTab === "personal" && (
              <div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wide">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      value={
                        isEditing ? editData.first_name : formData.first_name
                      }
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg disabled:bg-slate-50 disabled:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wide">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      value={
                        isEditing ? editData.last_name : formData.last_name
                      }
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg disabled:bg-slate-50 disabled:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={isEditing ? editData.email : formData.email}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg disabled:bg-slate-50 disabled:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone_number"
                      value={
                        isEditing
                          ? editData.phone_number
                          : formData.phone_number
                      }
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg disabled:bg-slate-50 disabled:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>
                </div>
              </div>
            )} */}

            {/* Settings Tab */}
            {/* {activeTab === "settings" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-4">
                    Preferences
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wide">
                        Language
                      </label>
                      <select
                        name="preferred_language"
                        value={
                          isEditing
                            ? editData.preferred_language
                            : formData.preferred_language
                        }
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg disabled:bg-slate-50 disabled:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wide">
                        Currency
                      </label>
                      <select
                        name="preferred_currency"
                        value={
                          isEditing
                            ? editData.preferred_currency
                            : formData.preferred_currency
                        }
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg disabled:bg-slate-50 disabled:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="INR">INR</option>
                        <option value="GBP">GBP</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <h3 className="text-base font-semibold text-slate-900 mb-4">
                    Notifications
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="newsletter_subscription"
                        checked={
                          isEditing
                            ? editData.newsletter_subscription
                            : formData.newsletter_subscription
                        }
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-5 h-5 rounded border-slate-300 text-blue-500 focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                      />
                      <span className="text-sm text-slate-700">
                        Subscribe to newsletter
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="email_notifications"
                        checked={
                          isEditing
                            ? editData.email_notifications
                            : formData.email_notifications
                        }
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-5 h-5 rounded border-slate-300 text-blue-500 focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                      />
                      <span className="text-sm text-slate-700">
                        Email notifications
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="sms_notifications"
                        checked={
                          isEditing
                            ? editData.sms_notifications
                            : formData.sms_notifications
                        }
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-5 h-5 rounded border-slate-300 text-blue-500 focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                      />
                      <span className="text-sm text-slate-700">
                        SMS notifications
                      </span>
                    </label>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <h3 className="text-base font-semibold text-slate-900 mb-4">
                    Privacy
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="profile_visibility"
                        checked={
                          isEditing
                            ? editData.profile_visibility
                            : formData.profile_visibility
                        }
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-5 h-5 rounded border-slate-300 text-blue-500 focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                      />
                      <span className="text-sm text-slate-700">
                        Make profile visible
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="show_email"
                        checked={
                          isEditing ? editData.show_email : formData.show_email
                        }
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-5 h-5 rounded border-slate-300 text-blue-500 focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                      />
                      <span className="text-sm text-slate-700">
                        Show email publicly
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="show_phone_number"
                        checked={
                          isEditing
                            ? editData.show_phone_number
                            : formData.show_phone_number
                        }
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-5 h-5 rounded border-slate-300 text-blue-500 focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                      />
                      <span className="text-sm text-slate-700">
                        Show phone publicly
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            )} */}

            {/* Addresses Tab */}
            {/* {activeTab === "addresses" && (
              <div className="space-y-4">
                {addresses.map((addr) => (
                  <div
                    key={addr.id}
                    className="border border-slate-200 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-slate-900">
                        {addr.full_name}
                      </h4>
                      <div className="flex gap-2">
                        {addr.is_default_shipping && (
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                            Default
                          </span>
                        )}
                        <button
                          onClick={() => deleteAddress(addr.id)}
                          className="text-red-500 hover:text-red-700 text-sm font-medium"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 mb-2">
                      {addr.address_line_1}
                    </p>
                    <p className="text-sm text-slate-600 mb-3">
                      {addr.city}, {addr.state} {addr.postal_code},{" "}
                      {addr.country}
                    </p>
                    <p className="text-sm text-slate-600 mb-3">
                      Phone: {addr.phone_number}
                    </p>
                    {!addr.is_default_shipping && (
                      <button
                        onClick={() => setDefaultAddress(addr.id)}
                        className="text-blue-500 hover:text-blue-700 text-sm font-medium"
                      >
                        Set as default
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )} */}

            {/* Action Buttons */}
            {/* <div className="flex gap-3 mt-8 pt-6 border-t border-slate-200">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex-1 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition font-semibold text-sm"
                >
                  Edit Profile
                </button>
              ) : (
                <>
                  <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-semibold text-sm disabled:opacity-60"
                  >
                    <Save size={18} />
                    {isSaving ? "Saving..." : "Save"}
                  </button>
                  <button
                    onClick={handleCancel}
                    disabled={isSaving}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition font-semibold text-sm disabled:opacity-60"
                  >
                    <X size={18} />
                    Cancel
                  </button>
                </>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
