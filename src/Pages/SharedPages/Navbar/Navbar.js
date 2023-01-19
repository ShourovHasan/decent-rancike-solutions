import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/decent_logo.png';
import decent_branding from '../../../assets/decent_branding.png';
import './Navbar.css';

const Navbar = () => {


    const menuItems = <React.Fragment>
        {/* <li><NavLink className='rounded-xl' to='/'>Home</NavLink></li> */}
        <li><NavLink className='rounded-xl' to='/pricing'>Pricing</NavLink></li>
        <li><NavLink className='rounded-xl' to='/features'>Features</NavLink></li>
        <li><NavLink className='rounded-xl' to='/customers'>Customers</NavLink></li>
        <li><NavLink className='rounded-xl' to='/contact_us'>Contact Us</NavLink></li>
    </React.Fragment>
    
    return (
        <div className="mb-[57px] navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        {menuItems}
                        <li>
                            <div className="block lg:hidden md:hidden xl:hidden">
                                <Link to='/' className="text-white btn btn_color btn_text">Login/signup</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <Link to='/' className="h-auto normal-case lg:text-2xl btn btn-ghost text-primary">
                    <img src={logo} className='mr-2 ml-0 max-w-[64px]' alt="" />
                    <img src={decent_branding} className='max-w-[179.59px] mr-2' alt="" />
                </Link>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="px-1 menu menu-horizontal">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="hidden lg:block md:block xl:block">
                    <Link to='/' className="text-lg text-white btn btn_color btn_text">Login/signup</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;