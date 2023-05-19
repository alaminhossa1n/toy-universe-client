import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysCard from "./MyToysCard";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    // delete items

    const handleDelete = (id) => {

        fetch(`http://localhost:5000/toys/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remaining = toys.filter(n => n._id !== id);
                    setToys(remaining);
                    console.log(remaining.length);
                }

            })
    }

    return (
        <div>
            <table className="table w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th></th>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map((toy, i) => <MyToysCard
                            key={toy._id}
                            i={i + 1}
                            toy={toy}
                            handleDelete={handleDelete}
                        ></MyToysCard>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;