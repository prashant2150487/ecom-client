import React, { useState, useEffect } from 'react';
import { Edit2, Save, X, Mail, MapPin, Briefcase, Calendar, User } from 'lucide-react';
import { getUserProfile, updateUserProdile } from '../../services/auth';


const UserProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: '',
    first_name: '',
    last_name: '',
    email: '',
    location: '',
    title: '',
    joinDate: '',
    bio: '',
    avatar: '👨‍💼',
    role: ""
  });

  const [editData, setEditData] = useState({
    first_name: '',
    last_name: '',
    location: '',
    title: '',
    bio: ''
  });

  const handleEdit = () => {
    setEditData({
      first_name: profile.first_name,
      last_name: profile.last_name,
      location: profile.location,
      title: profile.title,
      bio: profile.bio
    });
    setIsModalOpen(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await updateUserProdile({
        first_name: editData.first_name,
        last_name: editData.last_name,
        location: editData.location,
        title: editData.title,
        bio: editData.bio
      });

      // Refresh profile after update
      await fetchProfile();
      setIsModalOpen(false);
      console.log('Profile updated successfully');
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (field, value) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleInputFieldChange = (e) => {
    const { name, value } = e.target;
    handleInputChange(name, value);
  };

  const fetchProfile = async () => {
    try {
      const response = await getUserProfile();
      console.log(response);
      // Map API response to profile structure
      const mappedProfile = {
        name: `${response.data.first_name || ''} ${response.data.last_name || ''}`.trim() || 'User',
        first_name: response.data.first_name || '',
        last_name: response.data.last_name || '',
        email: response.data.email || '',
        location: response.data.location || 'Not specified',
        title: response.data.title || 'Not specified',
        joinDate: response.data.created_at ? new Date(response.data.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Unknown',
        bio: response.data.bio || 'No bio available',
        avatar: response.data.avatar || '👨‍💼',
        role: response.data.role || 'Not specified',
      };
      setProfile(mappedProfile);
    } catch (error) {
      console.error('Failed to fetch profile:', error);
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [])



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header Card */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-t-3xl p-8 shadow-2xl">
          <div className="flex items-end gap-6">
            <div className="text-8xl">{profile.avatar}</div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-white mb-2">{profile.name}</h1>
              <h5 className="text-lg text-slate-300 flex items-center gap-2">Role: {profile.role}</h5>
              <p className="text-lg text-slate-300 flex items-center gap-2 mt-2">
                <Briefcase size={18} /> {profile.title}
              </p>
            </div>
          </div>
        </div>

        {/* Main Profile Card */}
        <div className="bg-slate-800 rounded-b-3xl shadow-2xl">
          {/* Action Buttons */}
          <div className="border-b border-slate-700 px-8 py-4 flex justify-end gap-3">
            <button
              onClick={handleEdit}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200"
              aria-label="Edit profile"
            >
              <Edit2 size={18} /> Edit Profile
            </button>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white mb-4">Contact Information</h2>

              <div className="bg-slate-700 rounded-xl p-4 flex items-center gap-4">
                <Mail className="text-blue-400 flex-shrink-0" size={20} />
                <div className="flex-1">
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-white font-semibold">{profile.email}</p>
                </div>
              </div>

              <div className="bg-slate-700 rounded-xl p-4 flex items-center gap-4">
                <MapPin className="text-blue-400 flex-shrink-0" size={20} />
                <div className="flex-1">
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="text-white font-semibold">{profile.location}</p>
                </div>
              </div>

              <div className="bg-slate-700 rounded-xl p-4 flex items-center gap-4">
                <Calendar className="text-blue-400 flex-shrink-0" size={20} />
                <div className="flex-1">
                  <p className="text-sm text-slate-400">Member Since</p>
                  <p className="text-white font-semibold">{profile.joinDate}</p>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white">About</h2>
              <div className="bg-slate-700 rounded-xl p-4">
                <p className="text-slate-200 leading-relaxed">{profile.bio}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-white">247</p>
                <p className="text-blue-100 text-sm mt-1">Projects</p>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-white">1.2K</p>
                <p className="text-purple-100 text-sm mt-1">Followers</p>
              </div>
              <div className="bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-white">89</p>
                <p className="text-pink-100 text-sm mt-1">Following</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-6 rounded-t-2xl flex items-center justify-between sticky top-0 z-10">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <User size={24} />
                Edit Profile
              </h2>
              <button
                onClick={handleCancel}
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSave} className="p-6 space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    value={editData.first_name}
                    onChange={handleInputFieldChange}
                    className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    value={editData.last_name}
                    onChange={handleInputFieldChange}
                    className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Job Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={editData.title}
                  onChange={handleInputFieldChange}
                  className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Enter job title"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={editData.location}
                  onChange={handleInputFieldChange}
                  className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Enter location"
                />
              </div>

              {/* Bio */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  About / Bio
                </label>
                <textarea
                  name="bio"
                  value={editData.bio}
                  onChange={handleInputFieldChange}
                  className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  rows={5}
                  placeholder="Tell us about yourself..."
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  <Save size={18} /> Save Changes
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  <X size={18} /> Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfilePage;