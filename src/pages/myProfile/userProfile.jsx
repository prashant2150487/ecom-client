import Button from "../../components/uiElement/button";
import { Input } from "../../components/uiElement/input";
import Switch from "../../components/uiElement/switch";

export const UserProfile = () => {
    return (
        <div>
            <div className="flex flex-col gap-2">
                <Input label="Facebook url" placeholder="Enter Facebook url" />
                <Input label="Twitter_url url" placeholder="Enter Facebook url" />
                <Input label="Instagram_url url" placeholder="Enter Facebook url" />
                <Input label="Linkedin_url" placeholder="Enter Facebook url" />
                <Input label="Youtube_url url" placeholder="Enter Facebook url" />
                <Input label="Website_url url" placeholder="Enter Facebook url" />
                <Switch label="Newsletter Subscription" />
                <Switch label="Sms Notifications"/>
                <Switch label="Email_notifications"/>
                <Switch label="Profile visibility"/>
                <Switch label="Show Email"/>
                <Switch label="Show Phone Number"/>
<Button>asdas</Button>


            </div>
        </div>
    );
};