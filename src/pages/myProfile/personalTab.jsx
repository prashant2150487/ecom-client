import { Input } from "../../components/uiElement/input";

export const PersonalTab = ({ profile, onChange }) => {
    return (
        <div className="text-black">
            <div className="flex flex-col gap-4 w-full">
                <div className="flex gap-4 w-full">
                    <Input name="first_name" placeholder="First Name" label="First Name" type="text" size="sm" fullWidth value={profile?.first_name ?? ""} onChange={onChange}/>
                    <Input name="last_name" placeholder="Last Name" label="Last Name" type="text" size="sm" fullWidth value={profile?.last_name ?? ""} onChange={onChange}/>
                </div>
                <div className="flex gap-4">
                    <Input name="email" placeholder="Email" label="Email" type="email" size="sm" fullWidth value={profile?.email ?? ""} onChange={onChange}/>
                    <Input name="phone_number" placeholder="Phone Number" label="Phone Number" type="text" size="sm" fullWidth value={profile?.phone_number ?? ""} onChange={onChange}/>
                </div>
            </div>
        </div>
    );
};