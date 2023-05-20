import { useLoaderData } from "react-router-dom";

const SignalToyDetails = () => {
    const toyDetails = useLoaderData();
    const { name, price ,  quantity,seller, photo , email , rating , details} = toyDetails;
    

    return (
        <div className="card w-2/3 mx-auto mt-8 lg:card-side bg-base-100 shadow-xl">
        <figure><img className="" src={photo} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title text-4xl text-green-800">Toy name: {name}</h2>
          <h3 className="text-xl font-semibold text-orange-800">Seller by : {seller}</h3>
          <h3 className="text-xl font-semibold ">Seller email : {email}</h3>
          <p className="text-green-800 font-semibold">price : ${price}</p>
          <p className="text-green-800 font-semibold">rating : {rating}</p>
          <p className="text-green-800 font-semibold">Avaiable Quantity : {quantity}</p>
          <p className="text-green-800 font-semibold">Details Description : {details}</p>
        
        </div>
      </div>
    );
};

export default SignalToyDetails;