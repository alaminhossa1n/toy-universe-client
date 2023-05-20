
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
    const loadedData = useLoaderData();
    const { price, quantity, description, _id } = loadedData

    const handleSubmit = (e) => {
        e.preventDefault();
        const price = e.target.elements.price.value;
        const quantity = e.target.elements.quantity.value;
        const description = e.target.elements.description.value;

        const updatedData = { price, quantity, description }

        fetch(`http://localhost:5000/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Updated',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })

        // Clear form fields after submission
        e.target.reset();
    };


    return (
        <div className="py-32 bg-[#C4DFDF]">
            <form className="max-w-md mx-auto p-10 shadow-md bg-[#F5F0BB] rounded" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-medium text-center mb-6">Update Toy</h2>
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
        </div>
    );
};

export default UpdateToy;