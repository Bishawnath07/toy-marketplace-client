import { useState } from "react";

const UpdateToy = ({ toy  }) => {
    const {_id , name, price, quantity, details } = toy;
    const [control, setControl] = useState(false);


    
    const handleToyUpdate = (event) =>{
        event.preventDefault();

        const form = event.target;

        const quantity = form.quantity.value;
        const sellerId = form.id.value;
        const price = form.price.value;
        const details = form.details.value;

        const updatedToys = {  quantity, price, details  , sellerId}

        console.log(updatedToys)

        
            fetch(`http://localhost:5000/myToys/${_id}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(updatedToys),
            })
              .then((res) => res.json())
              .then((result) => {
                if (result.modifiedCount > 0) {
                  setControl(!control);
                }
                console.log(result);
              });
        
    }
    
    
    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal ">
                    <div className="modal-box w-11/12 max-w-5xl">

                    <form onSubmit={handleToyUpdate}>
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Toy Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="name" readOnly defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" required/>
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Seller ID</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="id" readOnly defaultValue={_id} placeholder="Seller Id" className="input input-bordered w-full" required />
                                </label>
                            </div>
                           
                        </div>
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" required/>
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" required />
                                </label>
                            </div>
                           
                        </div>
                        <div className="md:flex mb-8">
                        <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Details Description</span>
                                </label>
                                <label className="input-group">
                                <textarea className="textarea textarea-bordered w-2/3 h-32" name="details" defaultValue={details} placeholder="Details Description" required></textarea>
                                </label>
                            </div>
                        </div>

                        <input type="submit" value="update" className="btn btn-block" />
                    </form>
                
                    </div>
            </div>
        </>
    );
};

export default UpdateToy;