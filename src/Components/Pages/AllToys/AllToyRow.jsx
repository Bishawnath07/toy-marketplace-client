import { Link } from "react-router-dom";

const AllToyRow = ({toy , index}) => {
    const {category , name , price , quantity , seller , _id } = toy

    return (
       
             <tr>
                            <th>{index + 1}</th>
                            <td>{seller} </td>
                            <td>{name}</td>
                            <td>{category}</td>
                            <td>{price}</td>
                            <td>{quantity}</td>
                            <td><Link to={`/signalDetails/${_id}`}><button className="btn">view details</button></Link></td>
                        </tr>
    );
};

export default AllToyRow;