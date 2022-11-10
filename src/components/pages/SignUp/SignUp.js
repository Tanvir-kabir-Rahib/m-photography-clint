import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const SignUp = () => {
    const { googleLogin, createUser, updateUser } = useContext(AuthContext)
    const [err, setErr] = useState(null)
    const nevigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        setErr(null)
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                form.reset()
                handleUpdateUser(name, photoURL)
                nevigate("/")
                toast.success("Successfully Registered.")
            })
            .catch(error => setErr(error.message))
    }
    const handleUpdateUser = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUser(profile)
            .then(() => { })
            .catch((error) => setErr(error.message))
    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => console.error(error))
    }
    return (
        <form onSubmit={handleSubmit} className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-1/2">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Please login to Mohammads Photograpy to book a service or leave a review. And enjoy the exciting features of Mohammads Photograpy</p>
                </div>
                <div className="card shadow-2xl w-1/2">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Photo Url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Photo Url</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Photo Url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className={err ? "label text-red-700" : "hidden"}>
                                {err}
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-primary" onClick={handleGoogleLogin}><FaGoogle className='text-2xl mr-3'></FaGoogle><span>Login with google</span></button>
                        </div>
                        <div>
                            <p>Already have an account? <Link to='/login' className='btn btn-link'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SignUp;