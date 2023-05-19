import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const loadedData = useLoaderData();

    return (
        <div>
            <h2>ID: {loadedData._id}</h2>
        </div>
    );
};

export default ToyDetails;