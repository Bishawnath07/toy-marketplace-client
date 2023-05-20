import { Link } from "react-router-dom";

const AllToyRow = ({toy , index}) => {
    const {category , name , price , quantity , seller , _id } = toy

    return (
       
             <tr>
                            <th>{index + 1}</th>
                            <td className="text-2xl font-bold text-green-900">{seller} </td>
                            <td className="text-xl font-bold text-green-900">{name}</td>
                            <td className="text-xl font-semibold text-green-900">{category}</td>
                            <td className="text-xl font-semibold text-green-900">${price}</td>
                            <td className="text-xl font-semibold text-green-900">{quantity}</td>
                            <td><Link to={`/signalDetails/${_id}`}><button className="btn">Details</button></Link></td>
                        </tr>
    );
};

export default AllToyRow;