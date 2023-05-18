import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";

const AddToy = () => {
    const {user} = useContext(AuthContext);

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const seller = user?.displayName;
        const email = user?.email;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, seller, email ,  price, category, rating , details, photo }

        console.log(newCoffee); }

    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold">Add a Toy</h2>
        <form onSubmit={handleAddToy}>
            {/* form name and quantity row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Toy Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
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
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Sub Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                    </label>
                </div>
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
    );
};

export default AddToy;