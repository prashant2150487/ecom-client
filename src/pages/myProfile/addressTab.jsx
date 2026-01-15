export const AddressTab = ({ profile }) => {
    console.log(profile,"pp");
    return (
        <div className="text-black">
            {profile.addresses.map((address) => (
                <div key={address.id}>
                    <h2>{address.address_line_1}</h2>
                    {/* <p>{address.address}</p> */}
                </div>
            ))}
        </div>
    );
};