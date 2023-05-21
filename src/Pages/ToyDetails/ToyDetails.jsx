import { useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useTitle from "../../hooks/TitleHooks";

const ToyDetails = () => {
    useTitle('Toy - Details')
    const loadedData = useLoaderData();
    const { description, quantity, rating, price, sellerName, sellerEmail, name, pictureUrl } = loadedData;
    return (
        <div className="p-12">
            <div className="md:flex justify-center gap-10 items-center">
                <div className="md:w-1/2"  data-aos="fade-right">
                    <img className="mx-auto rounded" src={pictureUrl} alt="" />
                </div>
                <div className="md:w-1/2 shadow-lg rounded p-5" data-aos="fade-left">
                    <h2 className="text-6xl font-semibold">{name}</h2>
                    <div className='flex gap-1 items-center mt-2'>
                        <Rating
                            style={{ maxWidth: 100 }}
                            readOnly
                            orientation="horizontal"
                            value={rating}
                        />
                    </div>
                    <p className="text-3xl font-bold">$ {price}</p>
                    <p className="text-lg font-semibold"><span className="text-red-600">In Stock:</span> <span className="text-green-600">{quantity}</span></p>
                    <p className="mt-4">{description}</p>
                    <div className="mt-10">
                        <p className="font-bold">Seller Details:</p>
                        <p>Name: {sellerName}</p>
                        <p>Email: {sellerEmail}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;