import img1 from './image/1.webp'
import img2 from './image/2.webp'
import img3 from './image/3 (1).webp'

const LatestBlog = () => {
    return (
        <div className="text-center max-w-6xl  md:mx-auto">
            <h2 className='text-4xl font-bold  text-rose-600 mt-28'>Latest Blog</h2>
            <p className='mx-7 md:mx-28 text-xl my-8'>
                Find the latest Blogs news from WIRED See related science and <br /> technology articles  photos slideshows and videos
            </p>
            <div className='grid grid-cols-1 gap-8 mx-10 md:grid-cols-3'>
                <div className="card w-84 bg-base-100 shadow-xl" data-aos="fade-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <p className='text-start font-semibold p-3'>By, <span className='text-red-300'>June Cha </span> 25 May, 2121</p>
                    <div className="m-5">
                        <h2 className="card-title">
                            Baby Planets toys makes learning so easy
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <button className="btn  btn-success my-5">Read More</button>

                    </div>
                </div>
                <div className="card w-84 bg-base-100 shadow-xl" data-aos="fade-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <p className='text-start font-semibold p-3'>By, <span className='text-red-300'>June Cha </span> 25 May, 2121</p>
                    <div className="m-5">
                        <h2 className="card-title">
                            Mother revolves around her children
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <button className="btn  btn-success my-5">Read More</button>

                    </div>
                </div>
                <div className="card w-84 bg-base-100 shadow-xl" data-aos="fade-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <p className='text-start font-semibold p-3'>By, <span className='text-red-300'>June Cha </span> 25 May, 2121</p>
                    <div className="m-5">
                        <h2 className="card-title">
                            Learn while you grow toys Baby Planet
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <button className="btn  btn-success my-5 ">Read More</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestBlog;