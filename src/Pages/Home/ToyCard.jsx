
const ToyCard = ({ toy }) => {
    const { name, pictureUrl, price,category } = toy
    return (
        <div className="p-6">
            <p>name: {name}</p>
            <img src={pictureUrl} alt="" />
            <p>Price: {price}</p>
            <p>Category: {category}</p>
        </div>
    );
};

export default ToyCard;