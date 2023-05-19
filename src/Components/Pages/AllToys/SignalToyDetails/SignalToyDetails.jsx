import { useLoaderData } from "react-router-dom";

const SignalToyDetails = () => {
    const details = useLoaderData();
    console.log(details)
    // useEffect(() => {
    //     fetch('http://localhost:5000/myToys').then(res => res.json()).then(data => setToys(data))
    // }, [])

    return (
        <div>
            <h3>here are toy details</h3>
           
        </div>
    );
};

export default SignalToyDetails;