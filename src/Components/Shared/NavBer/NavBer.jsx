import { useContext } from 'react';
import img from './image/a6bc59dd3d2c02e80c45e6eb64b439d5-toys-shop-logo.png'
import { Link } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProviders';



const NavBer = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then(res => res.json)
      .then(data => {
        console.log(data)
      })
  }


  const navItems = <>
    <li><Link to="/">Home</Link> </li>
     {user?.email ? <>
      <li> <Link to="/addToy">Add A Toy</Link> </li>
      <li><Link to="/myToys">My Toys</Link></li>
      
    </>
      : <li> <Link to="/login"></Link> </li>
    }
     <li> <Link to="/allToys">All Toys</Link> </li>
    <li> <Link to="/blog">Blogs</Link> </li>
  </>
  return (
    <div className="navbar max-w-7xl	mx-auto md:p-5  h-20 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>

        <div className='flex justify-center gap-5 items-center'>

          <img className='h-20 w-20' src={img} alt="" />
          <h2 className='text-xl md:text-3xl hidden md:block font-bold'>The Animal Toys Store</h2>

        </div>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
     <div className=''>
      <ul className='flex justify-center items-center gap-4'>
      {user?.email ? <>
        <div className="tooltip  tooltip-left flex justify-between items-center ml-16 " data-tip={user && user.displayName}>
           <img className='rounded-xl h-10 w-20' src={user.photoURL} alt="" />
          </div>
        <Link to= '/login' className="navbar-end"><button onClick={handleLogOut} className="btn btn-warning">Log Out</button> </Link>
      </>
        : <Link to= '/login' className="navbar-end">
        <button className="btn  btn-warning">Login</button>
        </Link>
      }
      </ul>
     </div>
     
    </div>
  );
};

export default NavBer;