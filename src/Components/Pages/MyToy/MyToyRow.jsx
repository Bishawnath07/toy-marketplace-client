
const MyToyRow = ({toy , index}) => {
    const { seller , name , category , price , quantity } = toy ;
    return (
        <tr>
            <th>{index + 1} </th>
            <td> {seller}</td>
            <td>{name}</td>
            <td>{category}</td>
            <td>${price}</td>
            <td> {quantity}</td>
            <button className="btn btn-success my-3">View Details</button>

        </tr>
    );
};

export default MyToyRow;