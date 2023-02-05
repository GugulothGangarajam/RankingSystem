
import React from "react"
import "./navbar.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"


import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate=useNavigate()
  
    return (
        // <div>
        //     <a  className='active' href='#home'>Home</a>
        //     <button onClick={() =>{
        //         localStorage.removeItem('token') 
        //         navigate("/")
        //     }}>LOGOUT </button>

        // </div>

        <>
        <nav className='navbar'>
        <h3 className='logo'>Logo</h3>
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
       
          <Link to='/' className='home'>
            <li>Home</li>
          </Link>
          <Link to='/about' className='about'>
            <li>About</li>
          </Link>
          <Link to='/services' className='services'>
            <li>Services</li>
          </Link>
          <Link to='/register' className='services'>
            <li>Add User</li>
          </Link>
          
          <button onClick={() =>{
                localStorage.removeItem('token') 
                navigate("/")
            }}>LOGOUT </button>

        
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        {/* <button className='mobile-menu-icon' onClick={}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button> */}
      </nav>
        </>
    );
}

export default Navbar;
