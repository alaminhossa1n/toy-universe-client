import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
    const [toys, SetToys] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/toys?limit=20')
            .then(res => res.json())
            .then(data => SetToys(data))
    }, [])

    return (
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
                        i={i+1}
                    >

                    </AllToysRow>)
                }
            </tbody>
        </table>
    );
};

export default AllToys;