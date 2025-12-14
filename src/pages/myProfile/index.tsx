import React, { useState, FC, ChangeEvent, FormEvent } from 'react';
import { Edit2, Save, X, Mail, MapPin, Briefcase, Calendar } from 'lucide-react';

interface UserProfile {
  name: string;
  email: string;
  location: string;
  title: string;
  joinDate: string;
  bio: string;
  avatar: string;
}

interface EditData extends UserProfile {}

const UserProfilePage: FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [profile, setProfile] = useState<UserProfile>({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    location: 'San Francisco, CA',
    title: 'Product Designer',
    joinDate: 'Jan 2022',
    bio: 'Passionate about creating beautiful and functional digital experiences. Coffee enthusiast.',
    avatar: '👨‍💼'
  });

  const [editData, setEditData] = useState<EditData>(profile);

  const handleEdit = (): void => {
    setIsEditing(true);
    setEditData(profile);
  };

  const handleSave = (e: FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setProfile(editData);
    setIsEditing(false);
    console.log('Profile updated:', editData);
  };

  const handleCancel = (): void => {
    setIsEditing(false);
    setEditData(profile);
  };

  const handleInputChange = (field: keyof EditData, value: string): void => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    handleInputChange(name as keyof EditData, value);
  };

  const handleInputFieldChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    handleInputChange(name as keyof EditData, value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header Card */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-t-3xl p-8 shadow-2xl">
          <div className="flex items-end gap-6">
            <div className="text-8xl">{profile.avatar}</div>
            <div className="flex-1">
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleInputFieldChange}
                  className="text-4xl font-bold text-white bg-slate-700 rounded-lg px-4 py-2 mb-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Full name"
                />
              ) : (
                <h1 className="text-4xl font-bold text-white mb-2">{profile.name}</h1>
              )}
              {isEditing ? (
                <input
                  type="text"
                  name="title"
                  value={editData.title}
                  onChange={handleInputFieldChange}
                  className="text-lg text-slate-300 bg-slate-700 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Job title"
                />
              ) : (
                <p className="text-lg text-slate-300 flex items-center gap-2">
                  <Briefcase size={18} /> {profile.title}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Main Profile Card */}
        <div className="bg-slate-800 rounded-b-3xl shadow-2xl">
          {/* Action Buttons */}
          <div className="border-b border-slate-700 px-8 py-4 flex justify-end gap-3">
            {!isEditing ? (
              <button
                onClick={handleEdit}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200"
                aria-label="Edit profile"
              >
                <Edit2 size={18} /> Edit Profile
              </button>
            ) : (
              <>
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200"
                  aria-label="Save changes"
                >
                  <Save size={18} /> Save
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200"
                  aria-label="Cancel editing"
                >
                  <X size={18} /> Cancel
                </button>
              </>
            )}
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
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={editData.email}
                      onChange={handleInputFieldChange}
                      className="text-white bg-slate-600 rounded px-3 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-label="Email address"
                    />
                  ) : (
                    <p className="text-white font-semibold">{profile.email}</p>
                  )}
                </div>
              </div>

              <div className="bg-slate-700 rounded-xl p-4 flex items-center gap-4">
                <MapPin className="text-blue-400 flex-shrink-0" size={20} />
                <div className="flex-1">
                  <p className="text-sm text-slate-400">Location</p>
                  {isEditing ? (
                    <input
                      type="text"
                      name="location"
                      value={editData.location}
                      onChange={handleInputFieldChange}
                      className="text-white bg-slate-600 rounded px-3 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-label="Location"
                    />
                  ) : (
                    <p className="text-white font-semibold">{profile.location}</p>
                  )}
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
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={editData.bio}
                    onChange={handleTextAreaChange}
                    className="w-full bg-slate-600 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    rows={4}
                    aria-label="About biography"
                  />
                ) : (
                  <p className="text-slate-200 leading-relaxed">{profile.bio}</p>
                )}
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
    </div>
  );
};

export default UserProfilePage;