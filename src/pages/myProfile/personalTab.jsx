import { Input } from "../../components/uiElement/input";

export const PersonalTab = () => {
    return (
        <div className="text-black">
            <div className="flex flex-col gap-4 w-full">
                <div className="flex gap-4 w-full">
                    <Input placeholder="First Name" label="First Name" type="text" size="sm" fullWidth />
                    <Input placeholder="Last Name" label="Last Name" type="text" size="sm" fullWidth/>
                </div>
                <div className="flex gap-4">
                    <Input placeholder="Email" label="Email" type="email" size="sm" fullWidth/>
                    <Input placeholder="Phone Number" label="Phone Number" type="number" size="sm" fullWidth/>
                </div>
            </div>
        </div>
    );
};