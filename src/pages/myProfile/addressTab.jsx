import Checkbox from "../../components/uiElement/checkbox";
import { Input } from "../../components/uiElement/input";

export const AddressTab = ({ profile, onChangeCheckbox, onChangeAddress , onUpdateAddress }) => {
  return (
    <div className="text-black">
      {profile?.addresses?.map((address) => (
        <div
          key={address.id}
          className="flex flex-col gap-4 border border-slate-200 p-4 rounded-lg"
        >
          <h2 className="text-lg font-semibold">Address {address.id}</h2>
          <Input
            value={address.address_line_1}
            name="address_line_1"

            onChange={(e) => onChangeAddress(e, address.id)}
            fullWidth
            label="Address Line 1"
          />
          <Input
            value={address.city}
            onChange={(e) => onChangeAddress(e, address.id)}
            name="city"
            fullWidth
            label="City"
          />
          <Input
            value={address.state}
            onChange={(e) => onChangeAddress(e, address.id)}
            name="state"
            fullWidth
            label="State"
          />
          <Input
            value={address.country}
            onChange={(e) => onChangeAddress(e.target.value)}
            name="country"
            fullWidth
            label="Country"
          />
          <Input
            value={address.postal_code}
            onChange={(e) => onChangeAddress(e, address.id)}
            name="postal_code"
            fullWidth
            label="Postal Code"
          />
          <Input
            value={address.phone_number}
            onChange={(e) => onChangeAddress(e, address.id)}
            name="phone_number"
            fullWidth
            label="Phone Number"
          />
          <div className="flex gap-4">
            <Checkbox
              name="is_default_billing"
              checked={address.is_default_billing}
              onChange={(e) => onChangeCheckbox(e, address.id)}
              label="Is Default Billing"
              value={address.is_default_billing}
            />
            <Checkbox
              name="is_default_shipping"
              checked={address.is_default_shipping}
              onChange={(e) => onChangeCheckbox(e, address.id)}
              label="Is Default Shipping"
            />
          </div>
          <div className="flex gap-1 mt-4">
        <button className="text-black flex items-center gap-2 bg-red-500 px-4 py-2 rounded">
          Cancel
        </button>

        <button
          className="text-black flex items-center gap-2 bg-green-500 px-4 py-2 rounded"
        onClick={()=>onUpdateAddress(address)}
        >
          Update
        </button>
      </div>
        </div>
      ))}
      
    </div>
  );
};
