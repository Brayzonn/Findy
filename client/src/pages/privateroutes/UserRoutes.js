import React from 'react';
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';


const UserRoutes = () => {

    const navigate = useNavigate();

    const{ fetchUserData} = useGlobalContext();

    const token = window.sessionStorage.getItem(`userInfo`);

    useEffect(()=>{
        fetchUserData(); 
    }, []);

    //clear session storage timeout
    useEffect(() => {
        // Set a timeout to clear session storage after 1 hour (3600000 milliseconds)
        const timeout = setTimeout(() => {
            // Clear session storage
            window.sessionStorage.clear();
            <navigate to = '/Signin' />  
        }, 1800000);
    
        // Clean up the timeout when the component unmounts
        return () => clearTimeout(timeout);
    }, []);
  
    return token ? <Outlet /> : <navigate to = '/Signin' />
};

export default UserRoutes;