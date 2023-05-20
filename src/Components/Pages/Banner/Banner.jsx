import img from './image/valentine-s-day-children-s-room-with-little-bear-pink-wall-background-3d-rendering 1.png'
const Banner = () => {
    return (
        <div className="carousel w-full  ">
            <div id="slide1" className="carousel-item relative w-full ">
                <div className='absolute lg:top-20 ml-8 lg:w-2/5'>
                    <h2 className='text-xl  md:text-5xl font-bold '>Cute <span className='text-red-300'>Toys</span> for <br /> Cute <span className='text-red-300'>Kids</span></h2>
                    <p className='my-1 text-sm md:text-lg md:my-8'>Buy all kinds of intellectual games, toys, puzzles in our online store and give your child the pleasure of love & entertainment..</p>
                    <button className="btn btn-info  bg-gradient-to-r from-cyan-500 to-blue-500">Order Now</button>
                </div>
                <img src={img} className="w-full" />
                <div className="absolute flex gap-5  right-8 bottom-5">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <div className='absolute lg:top-20 ml-8 lg:w-2/5'>
            <h2 className='text-xl  md:text-5xl font-bold '>Cute <span className='text-red-300'>Toys</span> for <br /> Cute <span className='text-red-300'>Kids</span></h2>
                    <p className='my-1 text-sm md:text-lg md:my-8'>Buy all kinds of intellectual games, toys, puzzles in our online store and give your child the pleasure of love & entertainment..</p>
                    <button className="btn btn-info  bg-gradient-to-r from-cyan-500 to-blue-500">Order Now</button>
                </div>
                <img src={img} className="w-full" />
                <div className="absolute flex gap-5  right-8 bottom-5">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <div className='absolute lg:top-20 ml-8 lg:w-2/5'>
            <h2 className='text-xl  md:text-5xl font-bold '>Cute <span className='text-red-300'>Toys</span> for <br /> Cute <span className='text-red-300'>Kids</span></h2>
                    <p className='my-1 text-sm md:text-lg md:my-8'>Buy all kinds of intellectual games, toys, puzzles in our online store and give your child the pleasure of love & entertainment..</p>
                    <button className="btn btn-info  bg-gradient-to-r from-cyan-500 to-blue-500">Order Now</button>
                </div>
                <img src={img} className="w-full" />
                <div className="absolute flex gap-5  right-8 bottom-5">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
            <div className='absolute lg:top-20 ml-8 lg:w-2/5'>
            <h2 className='text-xl  md:text-5xl font-bold '>Cute <span className='text-red-300'>Toys</span> for <br /> Cute <span className='text-red-300'>Kids</span></h2>
                    <p className='my-1 text-sm md:text-lg md:my-8'>Buy all kinds of intellectual games, toys, puzzles in our online store and give your child the pleasure of love & entertainment..</p>
                    <button className="btn btn-info  bg-gradient-to-r from-cyan-500 to-blue-500">Order Now</button>
                </div>
                <img src={img} className="w-full" />
                <div className="absolute flex gap-5  right-8 bottom-5">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;