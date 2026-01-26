import Checkbox from "../../components/uiElement/checkbox";
import { Input } from "../../components/uiElement/input";

export const AddressTab = ({ profile , onChange}) => {
  console.log(profile, "pp");
  return (
    <div className="text-black">
      {profile.addresses.map((address) => (
        <div
          key={address.id}
          className="flex flex-col gap-4 border border-slate-200 p-4 rounded-lg"
        >
            <h2 className="text-lg font-semibold">Address {address.id}</h2>
          <Input
            value={address.address_line_1}
            onChange={(e) => console.log(e.target.value)}
            name="address_line_1"
            fullWidth
            label="Address Line 1"
          />
          <Input
            value={address.city}
            onChange={(e) => console.log(e.target.value)}
            name="city"
            fullWidth
            label="City"
          />
          <Input
            value={address.state}
            onChange={(e) => console.log(e.target.value)}
            name="state"
            fullWidth
            label="State"
          />
          <Input
            value={address.country}
            onChange={(e) => console.log(e.target.value)}
            name="country"
            fullWidth
            label="Country"
          />
          <Input
            value={address.postal_code}
            onChange={(e) => console.log(e.target.value)}
            name="postal_code"
            fullWidth
            label="Postal Code"
          />
          <Input
            value={address.phone_number}
            onChange={(e) => console.log(e.target.value)}
            name="phone_number"
            fullWidth
            label="Phone Number"
          />
          <div className="flex gap-4">
            <Checkbox
              name="is_default_billing"
              checked={address.is_default_billing}
              onChange={(e)=>onChange(e, address.id)}
              label="Is Default Billing"
            />
            <Checkbox
              name="is_default_shipping"
              checked={address.is_default_shipping}
              onChange={(e)=> onChange(e,address.id)}
              label="Is Default Shipping"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
