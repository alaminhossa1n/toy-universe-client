import { Link } from "react-router-dom";

const AllToysRow = ({ toy, i }) => {
    const { quantity, subCategory, name, sellerName, price, _id } = toy
    return (

        <tr>
            <th>{i}</th>
            <th>{sellerName}</th>
            <th>{name}</th>
            <th>{subCategory}</th>
            <th>{price}</th>
            <th>{quantity}</th>
            <th>
                <Link to={`/toy-details/${_id}`}><button className="bg-[#37306B] hover:bg-[#2b2555] text-white font-bold py-2 px-4 rounded">
                    View Details
                </button></Link>
            </th>
        </tr>


    );
};

export default AllToysRow;