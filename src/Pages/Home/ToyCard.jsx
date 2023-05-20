import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";

const ToyCard = ({ toy }) => {
    const { user } = useContext(AuthContext)
    const { name, pictureUrl, price, rating, _id } = toy


    const handleDetails = () => {
        if (!user) {
            toast.error('You Have to Login First')
        }
    }
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-[#C4DFDF]" data-aos="fade-up">
            <img src={pictureUrl} alt={name} className="w-full h-60 object-cover hover:scale-125 transition-all duration-500 cursor-pointer" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-green-600">{name}</div>
                <p className="text-gray-700 text-base">Price: {price}</p>
                <p className="text-gray-700 text-base">Rating: {rating}</p>
            </div>
            <div className="px-6 py-4">
                <Link to={`/toy-details/${_id}`}><button onClick={handleDetails} className="bg-[#37306B] hover:bg-[#2b2555] text-white font-bold py-2 px-4 rounded">
                    View Details
                </button></Link>
            </div>
        </div>
    );
};

export default ToyCard;