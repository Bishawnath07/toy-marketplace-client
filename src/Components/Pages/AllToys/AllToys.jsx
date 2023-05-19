import { useEffect, useState } from "react";
import AllToyRow from "./AllToyRow";


const AllToys = () => {
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/myToys').then(res => res.json()).then(data => setToys(data))
    }, [])

    return (
        <div>
            <h3>all toyes</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Avaiable Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        toys.map((toy , index) =><AllToyRow
                        key={toy._id}
                        index={index}
                        toy={toy}
                        ></AllToyRow>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;