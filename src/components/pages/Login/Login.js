import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-1/2">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Please login to Mohammads Photograpy to book a service or leave a review. And enjoy the exciting features of Mohammads Photograpy</p>
                </div>
                <div className="card shadow-2xl w-1/2">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">

                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <p>New to Mohammads Photograpy? <Link to='/signup' className='btn btn-link'>Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;