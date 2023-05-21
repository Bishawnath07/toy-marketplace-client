import { useEffect, useState } from "react";
import AllToyRow from "./AllToyRow";
import useSetTitle from "../../Hook/useSetTitle/useSetTitle";


const AllToys = () => {
    const [toys, setToys] = useState([])
    const [searchText, setSearchText] = useState("");
    useSetTitle('All toys')


    useEffect(() => {
        fetch('https://b7a11-toy-marketplace-server-side-bishawnath07.vercel.app/myAllToys').then(res => res.json()).then(data => setToys(data))
    }, [])

    const handleSearch = () => {
        fetch(`https://b7a11-toy-marketplace-server-side-bishawnath07.vercel.app/getToyByText/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setToys(data);
          });
      };

    return (
        <div className="max-w-6xl mx-auto">
            <h3 className="text-5xl text-center my-5 text-cyan-700 font-bold">Here are all the toys</h3>
            <div className="search-box  p-5 my-5 text-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="input input-bordered input-warning w-full max-w-xs"
            placeholder="Search Your Toy"
          />{" "}
          <button onClick={handleSearch}  className="btn  btn-success">Search</button>
        </div>
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