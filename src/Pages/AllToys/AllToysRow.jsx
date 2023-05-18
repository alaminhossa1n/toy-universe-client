
const AllToysRow = ({ toy, i }) => {
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
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View Details
                </button>
            </th>
        </tr>


    );
};

export default AllToysRow;