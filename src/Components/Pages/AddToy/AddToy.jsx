import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import Swal from "sweetalert2";
import useSetTitle from "../../Hook/useSetTitle/useSetTitle";
import { useNavigate } from "react-router-dom";

const AddToy = () => {
    const { user } = useContext(AuthContext);
    const [selects, setSelects] = useState('')
    useSetTitle('add toy')
    const navigate = useNavigate();

   
    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const seller = user?.displayName;
        const email = user?.email;
        const category = selects;
        const price = form.price.value;
        const rating = form.rating.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newToy = { name, quantity, seller, email, price, category, rating, details, photo }

        console.log(newToy);

        fetch('https://b7a11-toy-marketplace-server-side-bishawnath07.vercel.app/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Toys Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate('/myToys')
                    form.reset()
                }
            })


    }

    return (
        <div className="bg-[#F4F3F0] p-16">
            <h2 className="text-5xl text-center mb-10 text-pink-900 font-extrabold">You can add toys here</h2>
            <div className="border-2 border-amber-500 p-16 rounded-lg">
                <form onSubmit={handleAddToy}>
                    {/* form name and quantity row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Toy Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form seller row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="supplier" defaultValue={user && user.displayName} placeholder="Supplier Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="email" defaultValue={user && user.email} placeholder="email" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form category and price row */}
                    <div className="md:flex mb-8">
                        <select value={selects} onChange={e => setSelects(e.target.value)} className="select select-bordered  w-full max-w-md">
                            <option  >Who shot first?</option>
                            <option>teddy bear</option>
                            <option>Horse</option>
                            <option>dinosaur</option>
                        </select>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form rating and details  row*/}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Details Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form Photo url row */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="url" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Toy" className="btn btn-block" />

                </form>
            </div>
        </div>
    );
};

export default AddToy;