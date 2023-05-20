import { useEffect, useState } from "react";
import '../../../../App.css'
import Toy from "./Toy";

function Tabs() {
    const [toggleState, setToggleState] = useState("teddy bear");
    const [toys , setToys] = useState([])

    const toggleTab = (tabName) => {
        setToggleState(tabName);
    };

    useEffect(() =>{
        fetch(`https://b7a11-toy-marketplace-server-side-bishawnath07.vercel.app/allToys/${toggleState}`)
        .then(res => res.json())
        .then(data => setToys(data))
    } , [toggleState])

    

    return (
        <div className="containers max-w-6xl md:mx-auto">
            <div className="bloc-tabs">
                <button
                    className={toggleState === "teddy bear " ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab("teddy bear ")}
                >
                    Teddy Bear
                </button>
                <button
                    className={toggleState === "Horse" ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab("Horse")}
                >

                    Horse
                </button>
                <button
                    className={toggleState === "dinosaur" ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab("dinosaur")}
                >
                    Dinosaur
                </button>
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    <h2>Content 1</h2>
                    <hr />
                  
                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <h2>Content 2</h2>
                    <hr />
                   
                </div>

                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                >
                    <h2>Content 3</h2>
                    <hr />
              
                </div>
            </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-16">
               {
                    toys.map(toy => <Toy
                    key={toy._id}
                    toy= {toy}
                    ></Toy>)
                }
               </div>
        </div>
    );
}

export default Tabs;