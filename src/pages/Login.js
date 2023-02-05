import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import axios from 'axios';

import { useNavigate } from 'react-router';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');   
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(email);
        const post = {
            email: email,
            password: pass
        }
        try {
            const res = await axios.post('http://localhost:8080/api/v1/auth/authenticate', post)
            // alert("user Login Successfully");
            console.log(res.data)
            // setToken(res.data)
            localStorage.setItem('token',res.data.token)
            navigate('/ranklist')
        } catch (e) {
            alert("enter the correct password and email")
        }
    }
    return (
   
        
        <div className='wrapper bg-dark d-flex align-items-center w-100 justify-content-center'>
            
            <div className='login rounded'>
                <h2 className='mb-3'>Login</h2>

                <form className='needs-validation' onSubmit={handleSubmit}>
                    <div className='form-group  was-validated mb-2'>
                        <label htmlFor='email' className='form-label'>Email Address</label>
                        <input type='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                        <div className='invalid-feedback'>
                            Pleace Enter your email

                        </div>
                    </div>
                    <div className='form-group  was-validated mb-2'>

                        <label htmlFor='password' className='form-label'>Password</label>
                        <input type='text' className='form-control' value={pass} onChange={(e) => setPass(e.target.value)} required></input>
                        <div className='invalid-feedback'>
                            please Enter you Password
                        </div>
                    </div>
                    <div className='mb-2 form-group'>
                        <input type='checkbox' className='form-check-input'></input>
                        <label htmlFor='check' className='form-check-label'>Remember me</label>
                    </div>
                    <button type='submit' className='btn btn-success w-100 mt-2'> Sign in</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
