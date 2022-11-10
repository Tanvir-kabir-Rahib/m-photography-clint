import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Login = () => {
    const { login, googleLogin } = useContext(AuthContext)
    const [err, setErr] = useState(null)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        console.log(email)
        const password = form.password.value;
        login(email, password)
            .then(result => {
                console.log(result.user)
                form.reset()
                toast.success("Successfully Loged In.")
                navigate(from, { replace: true })
            })
            .catch(error => setErr(error.message))
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                toast.success("Successfully Loged In.")
                navigate(from, { replace: true })
            })
            .catch(error => setErr(error.message))
    }
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-1/2">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Please login to Mohammads Photograpy to book a service or leave a review. And enjoy the exciting features of Mohammads Photograpy</p>
                </div>
                <div className="card shadow-2xl w-1/2">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-2xl">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-2xl">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                                <label className={err ? "label text-red-700" : "hidden"}>
                                    {err}
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-primary" onClick={handleGoogleLogin}><FaGoogle className='text-2xl mr-3'></FaGoogle><span>Login with google</span></button>
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