import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";
import useTitle from "../../hooks/TitleHooks";

const AllToys = () => {
    useTitle('Toy - All Toys')
    const [toys, SetToys] = useState([])
    const [warning, setWarning] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/toys?limit=20')
            .then(res => res.json())
            .then(data => SetToys(data))
    }, [])
    // ...............search.............
    const handleSearch = (e) => {
        const searchValue = e.target.value;
        fetch(`http://localhost:5000/toys?search=${searchValue}`)
            .then(res => res.json())
            .then(data => {
                SetToys(data);
                if (data.length === 0) {
                    setWarning('Should match with Uppercase and Lowercase (Like: Iron Man)')
                }
                if (data.length != 0) {
                    setWarning(null)
                }
            })
    }
    // ...............search.............
    return (
        <div>
            <div className="text-center py-10">
                <form action="" onChange={handleSearch}>
                    <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs mb-5" />
                    {
                        warning && <p className="text-red-600">{warning}</p>
                    }
                </form>
            </div>
            <table className="table w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th></th>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map((toy, i) => <AllToysRow
                            key={toy._id}
                            toy={toy}
                            i={i + 1}
                        >

                        </AllToysRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;