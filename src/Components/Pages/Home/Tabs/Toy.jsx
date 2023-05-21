import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProviders";
import { HiStar } from "react-icons/hi2";


const Toy = ({ toy }) => {
    const {_id , name, photo, price, rating } = toy || {};

    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleClick = () => {
        if(!user) {
             
      
            alert('You have to log in first to view details')
            navigate('/login');
        }
        else{
            navigate('/tabToyDetails')
        }
    }
    
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="h-64 w-64 p-5" src={photo} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name} Toys </h2>
                <p>Toys Price : ${price} </p>
                <p className="flex jus items-center gap-2">Rating:
                     {rating} <span className="text-red-400 flex"><HiStar></HiStar><HiStar></HiStar><HiStar></HiStar><HiStar></HiStar><HiStar></HiStar></span> </p>
                <div className="card-actions justify-start">
                    <Link to={`/tabToyDetails/${_id}`}><button onClick={handleClick} className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Toy;