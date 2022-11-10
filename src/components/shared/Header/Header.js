import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGoogle, FaUserAlt } from 'react-icons/fa';
import logo from '../../../assets/pictures/camera-logo.png'
import "./Header.css"
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const Header = () => {
    const { logOut, user } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(
                toast.success("Successfully Loged Out.")
            )
            .catch()
    }
    return (
        <div>
            <div className="navbar bg-neutral lg:py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='text-lg mx-4'>Services</li>
                            <li className='text-lg mx-4'>Blogs</li>
                            {
                                user?.uid ?
                                    <>
                                        <li className='text-lg mx-4'>My Reviews</li>
                                        <li className='text-lg mx-4'>Add Services</li>
                                    </>
                                    :
                                    <></>
                            }
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl"><img className='logo-img' src={logo} alt="" /> Mohammads Photograpy</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='text-lg mx-4'>Services</li>
                        <li className='text-lg mx-4'>Blogs</li>
                        {
                            user?.uid ?
                                <>
                                    <li className='text-lg mx-4'>My Reviews</li>
                                    <li className='text-lg mx-4'>Add Services</li>
                                </>
                                :
                                <></>
                        }
                    </ul>
                </div>
                {
                    user?.uid ?
                        <>
                            <div className="navbar-end">
                                <div className="dropdown dropdown-end">
                                    {
                                        user?.photoURL ?
                                            <>
                                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                    <div className="w-10 rounded-full">
                                                        <img src={user?.photoURL} alt='' />
                                                    </div>
                                                </label>
                                            </>
                                            :
                                            <>
                                                <div>
                                                    <FaUserAlt></FaUserAlt>
                                                </div>
                                            </>
                                    }
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            {user?.displayName}
                                        </li>
                                    </ul>
                                </div>
                                <button className="btn btn-outline ml-2" onClick={handleLogout}><span className='mr-2'>Log Out</span><FaArrowRight></FaArrowRight></button>
                            </div>
                        </>
                        :
                        <>
                            <div className='navbar-end'>
                                <Link to='/login'><button className="btn btn-primary btn-link ml-2">Login</button></Link>
                                <Link to='/signup'><button className="btn btn-primary btn-link ml-2">Sign Up</button></Link>
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;