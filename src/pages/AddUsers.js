import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import axios from 'axios';
const AddUsers = () => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [name,setName] = useState('');
    const [role,setRole] =useState('');
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(email);
        
        const post = {
            email: email,
            password: password,
            firstname:name,
            role:role
        }
        try {
            const res = await axios.post('http://localhost:8080/api/v1/auth/register', post)
            alert("Euser Registation Successfully");
            console.log(res.data)
            console.log("hello this is token")
        } catch (e) {
            alert(e)
        }
    }
    return (
        <div className='wrapper bg-dark d-flex align-items-center w-100 justify-content-center'>
            <div className='login rounded'>
                <h2 className='mb-3'>Adding user</h2>

                <form className='needs-validation' onSubmit={handleSubmit}>
                    <div className='form-group was-validated mb-2'>                        
                        <label htmlFor='username' className='form-label'>User Name</label>
                        <input text='text' value={name} onChange={(e)=>setName(e.target.value)} required className='form-control'></input>
                        <div className='invalid-feedback'>
                            Pleace Enter your Name

                        </div>
                    </div>

                    <div className='form-group  was-validated mb-2'>
                        <label htmlFor='email' className='form-label'>Email Address</label>
                        <input type='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                        <div className='invalid-feedback'>
                            Pleace Enter your email

                        </div>
                    </div>
                    <div className='form-group was-validated mb-2'>
                        
                        <label for='User' className='form-label'>Choose a Role</label>
                        {/* <input text='text' value={contest} onChange={(e)=>setContest(e.target.value)} className='form-control'></input> */}
                        <select value={role} onSelect
                        onChange={(e)=>setRole(e.target.value)} className='form-control'>
                            <option value="ADMIN">ADMIN</option>
                            <option value="USER">USER</option>
                        </select>
                    </div>

                    <div className='form-group  was-validated mb-2'>
                        <label htmlFor='password' className='form-label'>Password</label>
                        <input type='text' className='form-control' value={password}   onChange={(e) => setPass(e.target.value)} required ></input>
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

export default AddUsers;
