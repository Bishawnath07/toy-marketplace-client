
const Toy = ({ toy }) => {
    const { name, photo, price, rating } = toy || {};
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="h-64 w-64 p-5" src={photo} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name} Toys </h2>
                <p>Toys Price : ${price} </p>
                <p>Rating: {rating}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Toy;