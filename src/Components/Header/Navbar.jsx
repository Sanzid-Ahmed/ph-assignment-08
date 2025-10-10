import React from 'react';
import Logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { NavLink } from 'react-router';


const Navbar = () => {
    return (
        <div className="bg-base-100 shadow-sm">
            <div className='navbar w-10/12 mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/allApps">Apps</NavLink></li>
                            <li><NavLink to="/installApps">Installation</NavLink></li>
                        </ul>
                    </div>
                    <NavLink to="/" className="btn btn-ghost text-xl"><img className='w-[30px]' src={Logo} alt="" /><span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">HERO.IO</span></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
                                        : "normal-case"
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/allApps"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline"
                                        : "normal-case"
                                }
                            >
                                Apps
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/installApps"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline"
                                        : "normal-case"
                                }
                            >
                                Installation
                            </NavLink>
                        </li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-linear-150 from-[#632EE3] to-[#9F62F2]" href='https://github.com/Sanzid-Ahmed' target="_blank">{<FaGithub />} Contribute</a>
                </div>
            </div>
        </div>
    );
};


export default Navbar;