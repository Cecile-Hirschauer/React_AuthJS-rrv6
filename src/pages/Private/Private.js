import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext'
import { Outlet, useLocation, Navigate } from 'react-router-dom';


const PrivateHome = () => {

    const {currentUser} = useContext(UserContext);
    console.log("CURRENT", currentUser);

    if (!currentUser) {
        return <Navigate to="/" />
    }

    return (
        <div className='container'>
            <Outlet />
        </div>
    )
}

export default PrivateHome;