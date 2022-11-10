import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const SignUp = () => {
    const { googleLogin, createUser, updateUser } = useContext(AuthContext)
    const [err, setErr] = useState(null)
    const navigate = useNavigate()
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
                toast.success("Successfully Signed Up.")
                navigate("/")
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
                toast.success("Successfully Signed Up.")
                navigate("/")
            })
            .catch(error => setErr(error.message))
    }
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                    <h1 className="text-5xl font-bold">Sign Up!</h1>
                    <p className="py-6">Sign Up to Mohammads Photograpy to book a service or leave a review. And enjoy the exciting features of Mohammads Photograpy</p>
                </div>
                <div className="card shadow-2xl w-1/2">
                    <div className="card-body">
                        <form  onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-2xl">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Photo Url" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-2xl">Photo Url</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="Photo Url" className="input input-bordered" required/>
                            </div>
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
                                <button className="btn btn-primary" type='submit'>Sign Up</button>
                            </div>
                        </form>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-primary" onClick={handleGoogleLogin}><FaGoogle className='text-2xl mr-3'></FaGoogle><span>Sign Up with google</span></button>
                        </div>
                        <div>
                            <p>Already have an account? <Link to='/login' className='btn btn-link'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;