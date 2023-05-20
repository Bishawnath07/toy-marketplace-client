import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
    const update = useLoaderData()
    console.log(update);
    return (
        <div>
            <h3>update toys</h3>
        </div>
    );
};

export default UpdateToy;