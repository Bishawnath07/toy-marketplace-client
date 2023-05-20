import img1 from './image/treandign1.webp'
import img2 from './image/treandign2.webp'
import img3 from './image/treandign3.webp'
import img4 from './image/treandign4.webp'
const Tranding = () => {
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-4xl font-bold  text-rose-600 mt-16 md:mt-28'>Trending Product</h2>
                <p className='mx-7 md:mx-28 text-xl my-10'>This trending toy is a captivating blend of creativity, technology, and interactive fun. Its designed to engage and entertain kids of all ages, providing endless hours of excitement and imagination.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 max-w-6xl md:mx-auto gap-10  '>
                <div className="card mx-10 md:mx-0 md:w-64 bg-cyan-100 shadow-xl " data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Funskool Teddy Brown
                        </h2>
                        <p className='text-xl font-semibold'>$190</p>
                    </div>
                </div>
                <div className="card mx-10 md:mx-0 md:w-64 bg-cyan-100 shadow-xl" data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body mt-6">
                        <h2 className="card-title">
                            Newborn Kit Set

                        </h2>
                        <p className='text-xl font-semibold'>$190</p>

                    </div>
                </div>
                <div className="card mx-10 md:mx-0 md:w-64 bg-cyan-100 shadow-xl" data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Classic Fisher Gift

                        </h2>
                        <p className='text-xl font-semibold'>$190</p>

                    </div>
                </div>
                <div className="card mx-10 md:mx-0 md:w-64 bg-cyan-100 shadow-xl" data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <figure><img src={img4} alt="Shoes" /></figure>
                    <div className="card-body mt-5">
                        <h2 className="card-title">
                            Sassy Crib and Floor Mirror

                        </h2>
                        <p className='text-xl font-semibold'>$190</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tranding;