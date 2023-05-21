import img1 from './image/1 .webp'
import img2 from './image/2.webp'
import img3 from './image/3.webp'
import img4 from './image/4.webp'
import img5 from './image/5.webp'
import img6 from './image/6.webp'

const ToyGallery = () => {
    return (
        <div>
            <div className='max-w-6xl md:mx-auto mx-10 my-10'>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 "  >
            <div className="">
                <div className=" rounded">
                    <img  src={img1} />
                </div>
            </div>
            <div className="">
                <div className="rounded">
                    <img src={img2} />
                </div>
            </div>
            <div className="">
                <div className="rounded">
                    <img src={img3} />
                </div>
            </div>
            <div className="">
                <div className="rounded">
                    <img src={img4} />
                </div>
            </div>
            <div className="">
                <div className="rounded">
                    <img src={img5} />
                </div>
            </div>
            <div className="ml-10">
                <div className="rounded">
                    <img src={img6} />
                </div>
            </div>
        </div>
        </div>
        <hr />
        </div>
    );
};

export default ToyGallery;