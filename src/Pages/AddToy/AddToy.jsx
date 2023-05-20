import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";
import useTitle from "../../hooks/TitleHooks";

const AddToy = () => {
    useTitle('Toy - Add Toy')
    const { user } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const pictureUrl = e.target.elements.pictureUrl.value;
        const name = e.target.elements.name.value;
        const sellerName = e.target.elements.sellerName.value;
        const sellerEmail = e.target.elements.sellerEmail.value;
        const subCategory = e.target.elements.subCategory.value;
        const category = e.target.elements.category.value;
        const price = e.target.elements.price.value;
        const rating = e.target.elements.rating.value;
        const quantity = e.target.elements.quantity.value;
        const description = e.target.elements.description.value;
        const addedToy = { pictureUrl, name, sellerEmail, sellerName, category, subCategory, price, rating, quantity, description }

        fetch('http://localhost:5000/add-toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Successfully Added')
                    form.reset();
                }
            })

    };

    return (
        <div className=" bg-[#C4DFDF] p-10">
            <form onSubmit={handleSubmit} className="w-1/2 mx-auto bg-[#F5F0BB] rounded">
                <div className="md:grid grid-cols-2 gap-10 p-6 rounded-md shadow-md">
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter Toy Name"
                            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="pictureUrl" className="block mb-2 text-sm font-medium text-gray-700">
                            Picture URL of the Toy
                        </label>
                        <input
                            type="url"
                            id="pictureUrl"
                            placeholder="Enter Picture URL"
                            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="sellerName" className="block mb-2 text-sm font-medium text-gray-700">
                            Seller Name
                        </label>
                        <input
                            type="text"
                            id="sellerName"
                            placeholder="Enter Seller Name"
                            defaultValue={user?.displayName}
                            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 bg-gray-100"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="sellerEmail" className="block mb-2 text-sm font-medium text-gray-700">
                            Seller Email
                        </label>
                        <input
                            type="email"
                            id="sellerEmail"
                            placeholder="Enter Seller Email"
                            defaultValue={user?.email}
                            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-700">
                            Category
                        </label>
                        <select
                            id="category"
                            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                            required
                        >
                            <option value="">Category</option>
                            <option value="Action Figures">Action Figures</option>
                            <option value="Plush Toys">Plush Toys</option>
                            <option value="Games and Puzzles">Games and Puzzles</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="subCategory" className="block mb-2 text-sm font-medium text-gray-700">
                            Sub-category
                        </label>
                        <select
                            id="subCategory"
                            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                            required
                        >
                            <option value="">Select Sub-category</option>
                            <option value="X-Men">X-Men</option>
                            <option value="Spider-Man">Spider-Man</option>
                            <option value="Guardians of the Galaxy">Guardians of the Galaxy</option>
                            <option value="Black Panther">Black Panther</option>
                            <option value="Captain America">Captain America</option>
                            <option value="Iron Man">Iron Man</option>
                            <option value="Thor">Thor</option>
                            <option value="Hulk">Hulk</option>
                            <option value="Science Toys">Guardians of the Galaxy</option>
                            <option value="Science Toys">Guardians of the Galaxy</option>
                            <option value="Avengers Plush Toys">Avengers Plush Toys</option>
                            <option value="Spider-Man Plush Toys">Spider-Man Plush Toys</option>
                            <option value="X-Men Plush Toys">X-Men Plush Toys</option>
                            <option value="Games and Puzzles">Games and Puzzles</option>
                            <option value="Marvel Board Games">Marvel Board Games</option>
                            <option value="Marvel Card Games">Marvel Card Games</option>
                            <option value="Marvel Puzzles">Marvel Puzzles</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-700">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            placeholder="Enter Price"
                            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-700">
                            Rating
                        </label>
                        <input
                            type="number"
                            id="rating"
                            placeholder="Enter Toy Rating"
                            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-700">
                            Available Quantity
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            placeholder="Enter Available Quantity"
                            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-700">
                            Detail Description
                        </label>
                        <textarea
                            id="description"
                            placeholder="Describe Toy Details"
                            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                            rows="4"
                        ></textarea>
                    </div>

                </div>
                <button type="submit" className="w-full bg-[#37306B] hover:bg-[#2b2555] text-white font-bold py-2 px-4 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddToy;