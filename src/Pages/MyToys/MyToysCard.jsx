
const MyToysCard = ({ toy, i }) => {
    const { quantity, subCategory, name, sellerName, price } = toy
    return (
        <tr>
            <th>{i}</th>
            <th>{sellerName}</th>
            <th>{name}</th>
            <th>{subCategory}</th>
            <th>{price}</th>
            <th>{quantity}</th>
            <th>
                <button className="bg-[#2CD3E1] hover:bg-[#AEE2FF] text-white font-bold py-2 px-4 rounded">
                    View Details
                </button>
            </th>
        </tr>
    );
};

export default MyToysCard;