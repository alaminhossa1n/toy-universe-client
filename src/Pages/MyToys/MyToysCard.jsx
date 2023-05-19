import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const MyToysCard = ({ toy, i }) => {
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
                <div className="space-y-5">
                    <Link to={`/my-toys/${_id}`}><p className="h-8 w-8 text-yellow-600 p-2 text-2xl"><FaEdit /></p></Link>
                    <p className="h-8 w-8 text-red-600 p-2 text-2xl"><FaTrashAlt /></p>
                </div>
            </th>
        </tr>
    );
};

export default MyToysCard;