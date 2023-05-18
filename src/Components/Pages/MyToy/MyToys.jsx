import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import MyToyRow from "./MyToyRow";

const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [control, setControl] = useState(false);
    console.log(user)

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {

                setToys(data);
            });
    }, [user, control]);



    return (
        <div>
            <h3 className="text-4xl text-center my-8">Here are all toys: {toys.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys?.map((toy, index) => <MyToyRow
                            key={toy.id}
                            index = {index}
                            toy= {toy}
                            ></MyToyRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;