import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
const Profile = ({ onLogout }) => {


    const username = sessionStorage.getItem('username');

    return (
        <div className="profile-menu absolute right-0 w-48 bg-white rounded-md shadow-lg z-10 py-4 px-2">
            <ul>
                <li className="text-white mb-4 block cursor-pointer px-3 py-2 center bg-blue-500">
                    Hello {username}!
                </li>
                <hr />
                <Link to="/orders" className='no-underline text-black hover:text-black'><li className="text-black block cursor-pointer px-4 py-2 hover:bg-slate-300">My Orders</li></Link>
                <Link to="/Cart" className='no-underline text-black hover:text-black'><li className="text-black block cursor-pointer px-4 py-2 hover:bg-slate-300">My cart</li></Link>
                <hr />
                <Link to="/contactus" className='no-underline text-black hover:text-black'><li className="text-black block cursor-pointer px-4 py-2 hover:bg-slate-300">Help Center</li></Link>

                <li className="text-black block cursor-pointer px-4 py-2 hover:bg-slate-300">Legal</li>
                <li className='center p-2'>
                    <button onClick={onLogout} className="block w-full text-left px-4 py-2 text-sm bg-red-400 hover:bg-red-500 cursor-pointer">Logout</button>
                </li>
            </ul>
        </div>
    );
};

export default Profile;
