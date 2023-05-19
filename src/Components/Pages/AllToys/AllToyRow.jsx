
const AllToyRow = ({toy , index}) => {
    const {category , name , price , quantity , seller } = toy
    return (
       
             <tr>
                            <th>{index + 1}</th>
                            <td>{seller} </td>
                            <td>{name}</td>
                            <td>{category}</td>
                            <td>{price}</td>
                            <td>{quantity}</td>
                            <td>view details</td>
                        </tr>
    );
};

export default AllToyRow;