import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([])


    useEffect(() => {
        fetch(`https://toy-universe-server.vercel.app/toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <div>
            {
                toys.map(toy => <h3

                    key={toy._id}>{user?.displayName}</h3>)
            }
        </div>
    );
};

export default MyToys;