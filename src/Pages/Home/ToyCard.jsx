
const ToyCard = ({ toy }) => {
    const { name, pictureUrl, price, rating } = toy
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
            <img src={pictureUrl} alt={name} className="w-full h-60 object-cover hover:scale-125 transition-all duration-500 cursor-pointer" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-green-600">{name}</div>
                <p className="text-gray-700 text-base">Price: {price}</p>
                <p className="text-gray-700 text-base">Rating: {rating}</p>
            </div>
            <div className="px-6 py-4">
                <button className="bg-[#37306B] hover:bg-[#2b2555] text-white font-bold py-2 px-4 rounded">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ToyCard;