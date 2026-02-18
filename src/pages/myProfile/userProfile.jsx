import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Button from "../../components/uiElement/button";
import { Input } from "../../components/uiElement/input";
import Switch from "../../components/uiElement/switch";
import { updateUserProfile } from "../../services/auth";

export const UserProfile = ({ userData }) => {
  const [profile, setProfile] = useState(userData || {});
  const [loading, setLoading] = useState(false);

  // Sync local state when parent userData prop changes (e.g. after initial fetch)
  useEffect(() => {
    if (userData) {
      setProfile(userData);
    }
  }, [userData]);

  const handleUpdate = async () => {
    try {
      setLoading(true);
      const res = await updateUserProfile({
        profile: {
          id: profile.id,
          facebook_url: profile.facebook_url,
          twitter_url: profile.twitter_url,
          instagram_url: profile.instagram_url,
          linkedin_url: profile.linkedin_url,
          youtube_url: profile.youtube_url,
          website_url: profile.website_url,
          newsletter_subscription: profile.newsletter_subscription,
          sms_notifications: profile.sms_notifications,
          email_notifications: profile.email_notifications,
          profile_visibility: profile.profile_visibility,
          show_email: profile.show_email,
          show_phone_number: profile.show_phone_number,
        },
      });
      if (res.success) {
        setProfile(res.data);
        toast.success("Profile updated successfully");
      }
    } catch (error) {
      toast.error(error?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field) => (e) => {
    setProfile((prev) => ({ ...prev, [field]: e.target.value }));
  };

  // Switch component calls onChange(newCheckedBoolean) — no e.target needed
  const handleSwitchChange = (field) => (checked) => {
    setProfile((prev) => ({ ...prev, [field]: checked }));
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        {/* Social & Website URLs */}
        <Input
          label="Facebook URL"
          placeholder="Enter your Facebook URL"
          value={profile?.facebook_url || ""}
          onChange={handleInputChange("facebook_url")}
        />
        <Input
          label="Twitter URL"
          placeholder="Enter your Twitter URL"
          value={profile?.twitter_url || ""}
          onChange={handleInputChange("twitter_url")}
        />
        <Input
          label="Instagram URL"
          placeholder="Enter your Instagram URL"
          value={profile?.instagram_url || ""}
          onChange={handleInputChange("instagram_url")}
        />
        <Input
          label="LinkedIn URL"
          placeholder="Enter your LinkedIn URL"
          value={profile?.linkedin_url || ""}
          onChange={handleInputChange("linkedin_url")}
        />
        <Input
          label="YouTube URL"
          placeholder="Enter your YouTube URL"
          value={profile?.youtube_url || ""}
          onChange={handleInputChange("youtube_url")}
        />
        <Input
          label="Website URL"
          placeholder="Enter your Website URL"
          value={profile?.website_url || ""}
          onChange={handleInputChange("website_url")}
        />

        {/* Notification & Privacy Toggles */}
        <div className="flex flex-col gap-3 mt-2">
          <Switch
            label="Newsletter Subscription"
            checked={!!profile?.newsletter_subscription}
            onChange={handleSwitchChange("newsletter_subscription")}
          />
          <Switch
            label="SMS Notifications"
            checked={!!profile?.sms_notifications}
            onChange={handleSwitchChange("sms_notifications")}
          />
          <Switch
            label="Email Notifications"
            checked={!!profile?.email_notifications}
            onChange={handleSwitchChange("email_notifications")}
          />
          <Switch
            label="Profile Visibility"
            checked={!!profile?.profile_visibility}
            onChange={handleSwitchChange("profile_visibility")}
          />
          <Switch
            label="Show Email"
            checked={!!profile?.show_email}
            onChange={handleSwitchChange("show_email")}
          />
          <Switch
            label="Show Phone Number"
            checked={!!profile?.show_phone_number}
            onChange={handleSwitchChange("show_phone_number")}
          />
        </div>

        <Button onClick={handleUpdate} loading={loading} color="blue" fullWidth>
          Update Profile
        </Button>
      </div>
    </div>
  );
};
