import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
    const loadedData = useLoaderData();
    const { price, quantity, description } = loadedData

    const handleSubmit = (e) => {
        e.preventDefault();

        const price = e.target.elements.price.value;
        const quantity = e.target.elements.quantity.value;
        const description = e.target.elements.description.value;

        // Perform form submission logic here
        // e.g., send data to backend, perform validation, etc.

        // Clear form fields after submission
        e.target.reset();
    };


    return (
        <form className="max-w-md mx-auto p-4 shadow-md mt-20" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
                    Price
                </label>
                <input
                    type="text"
                    id="price"
                    defaultValue={price}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter price"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">
                    Available Quantity
                </label>
                <input
                    type="text"
                    id="quantity"
                    defaultValue={quantity}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter available quantity"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                    Detail Description
                </label>
                <textarea
                    id="description"
                    defaultValue={description}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter detail description"
                ></textarea>
            </div>
            <button
                type="submit"
                className="bg-[#37306B] hover:bg-[#2b2555] text-white font-bold py-2 px-4 rounded"
            >
                Update
            </button>

        </form>
    );
};

export default UpdateToy;