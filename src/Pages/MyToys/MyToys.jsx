import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysCard from "./MyToysCard";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
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
                    toys.map((toy, i) => <MyToysCard
                        key={toy._id}
                        i={i + 1}
                        toy={toy}
                    ></MyToysCard>)
                }
            </tbody>
        </table>
    );
};

export default MyToys;