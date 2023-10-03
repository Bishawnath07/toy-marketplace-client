import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import MyToyRow from "./MyToyRow";
import Swal from "sweetalert2";
import useSetTitle from "../../Hook/useSetTitle/useSetTitle";


const MyToys = () => {
    useSetTitle('My Toys')

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    console.log(toys)


    useEffect(() => {
        
        fetch(`https://b7a11-toy-marketplace-server-side-bishawnath07.vercel.app/myToys/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {

                setToys(data);
            });
    }, [user]);



    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://b7a11-toy-marketplace-server-side-bishawnath07.vercel.app/myAllToys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(toy => toy._id !== id);
                            setToys(remaining);
                        }
                    })

            }
        })
    }
       
    




    return (
        <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl text-center my-8">You have added {toys.length} pieces toys</h3>
            
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>#</th>

                            <th className="text-[8px]  md:text-[14px] ">Toy Photo</th>
                            <th className="text-[8px]  md:text-[14px] ">Toy Name</th>
                            <th className="text-[8px]  md:text-[14px] ">Seller Name</th>
                            <th className="text-[8px]  md:text-[14px] ">Sub-category</th>
                            <th className="text-[8px]  md:text-[14px] ">Price</th>
                            <th className="text-[8px]  md:text-[14px] ">Available Quantity</th>
                            <th className="text-[8px]  md:text-[14px] ">Delete or Update</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            toys.map((toy , index) => <MyToyRow
                            key={toy._id}
                            index={index}
                            toy={toy}
                            handleDelete={handleDelete}
                           
                            ></MyToyRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;