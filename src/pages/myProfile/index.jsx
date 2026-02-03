import { useState, useEffect } from "react";
import {
  Mail,
  PhoneCall,
} from "lucide-react";
import { getUserProfile, updateAddress, updateUserProfile } from "../../services/auth";
import { ProfileTabs } from "./profileTabs";
import { PersonalTab } from "./personalTab";
import { AddressTab } from "./addressTab";
import { UserProfile } from "./userProfile";
import toast from "react-hot-toast";

const UserProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [activeTab, setActiveTab] = useState("personal");
  const fetchProfile = async () => {
    try {
      const response = await getUserProfile();
      if (response.success) {
        setProfile(response?.data);
      }

    } catch (error) {
      console.error("Failed to fetch profile:", error);
    }
  };
  const handleUpdate = async () => {
    if (!profile) {
      return;
    }
    const res = await updateUserProfile({
      profile
    });
    console.log(res, "res");
    if (res.success) {
      setProfile(res.data);
      fetchProfile();
    }
  };
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  const handleChangeCheckbox = (e, id) => {
    const { name, checked } = e.target
    setProfile((prev) => ({
      ...prev,
      addresses: prev.addresses.map((address) =>
        address.id === id ? { ...address, [name]: checked } : address,
      ),
    }));
  };
  const handleAddressChange = (e, id) => {
    console.log(e, id)
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      addresses: prev.addresses.map((address) =>
        address.id === id
          ? { ...address, [name]: value }
          : address
      ),
    }));
  };
  const handleAddressUpdate = async (address) => {
    console.log(address, "add")
    // console.log(id,"idz")
    try {
      const res = await updateAddress(address.id, address)
      console.log(res, "resr")
      if (res.success) {
        fetchProfile()
        toast.success("address updated successfully")
      }


    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchProfile();
  }, []);
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
          <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="p-8">
            {activeTab === "personal" && (
              <>
                <PersonalTab profile={profile} onChange={handleChange} />
                <div className="flex gap-1 mt-4">
                  <button className="text-black flex items-center gap-2 bg-red-500 px-4 py-2 rounded">
                    Cancel
                  </button>

                  <button
                    className="text-black flex items-center gap-2 bg-green-500 px-4 py-2 rounded"
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                </div>
              </>
            )}
            {activeTab === "addresses" && (
              <AddressTab profile={profile} onChangeCheckbox={handleChangeCheckbox} onChangeAddress={handleAddressChange} onUpdateAddress={handleAddressUpdate} />


            )}
            {activeTab === "userProfile" && <UserProfile />}


          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
