import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useSetTitle from "../../Hook/useSetTitle/useSetTitle";

const UpdateToy = () => {
    useSetTitle('Update Toy')
    const toyDetalis = useLoaderData();
    const {_id , name, price, quantity, details } = toyDetalis;
    const navigate = useNavigate()


    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;

        const quantity = form.quantity.value;
        const details = form.details.value;
        const price = form.price.value;

        const updatedToy = { quantity, details, price }

        console.log(updatedToy);

        // send data to the server
        fetch(`https://b7a11-toy-marketplace-server-side-bishawnath07.vercel.app/myAllToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate('/myToys')
                }
            })
    }


    return (
        <div>
            <h2 className="text-4xl font-bold text-center my-5">Update Toy Form</h2>
            <div className="w-2/3 mx-auto border-2 border-amber-500 p-10 my-10 rounded-lg">
                <form onSubmit={handleUpdateToy}>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="supplier" readOnly defaultValue={name} placeholder="Supplier Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Product Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="quantity" defaultValue={quantity} placeholder="Quantity" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                            <textarea className="textarea textarea-info w-full h-28"  type="text" name="details" defaultValue={details} placeholder="details"></textarea>
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Update Toy" className="btn btn-block" />
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;