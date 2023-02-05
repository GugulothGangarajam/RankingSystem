import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
import Navbar from './Navbar';

const Users = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const loadData = async () => {
        const response = await (await axios.get("http://localhost:8080/api/v1/auth/get"));
        setData(response.data)
    }

    const deleteUser = async(item)=>{
        console.log(item.id);
       await axios.delete("http://localhost:8080/api/v1/auth/delete?id="+item.id,{headers:{'Authorization': localStorage.getItem('token')}});
       
       navigate('/ranklist');
    }
    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate('/')            
        }
        loadData();
    }, []);

    return (
        <>
        <div >
            <Navbar/>
            <div  style={
                {
                    marginTop: 20, 

                }
            }>
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>Id</th>
                        <th style={{ textAlign: "center" }}>UserName</th>
                        <th style={{ textAlign: "center" }}>Email</th>
                        <th style={{ textAlign: "center" }}>Score</th>
                        <th style={{ textAlign: "center" }}>Rank</th>
                        <th style={{textAlign:'center'}}>Action</th>
                    </tr>

                </thead>
                <tbody>

                    {data.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <th scope="row">{index + 1}</th>

                                <td>{item.firstname}</td>
                                <td>{item.email}</td>
                                <td>{item.score}</td>
                                <td>{item.rank}</td>

                                <Link to={'/update/'}>
                                    <button className='btn btn-edit'>Edit</button>
                                </Link>

                                <button className='btn btn-delete' onClick={deleteUser(item)}>Delete</button>

                                <Link to={'/view/${item.id}'}>
                                    <button className='btn btn-view'>View</button>
                                </Link>



                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
        </div>
        </>
    );
}

export default Users;
