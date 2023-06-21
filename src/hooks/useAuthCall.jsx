import React from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { fetchFail, fetchStart, registerSuccess } from '../features/authSlice';

const useAuthCall = () => {
    const dispatch = useDispatch()
    const navigagte = useNavigate()

    const register =async(userInfo)=>{
        dispatch(fetchStart)
        try {
            const { data } = await axios.post(
              "http://15113.fullstack.clarusway.com/account/register/", userInfo
            );
            console.log(data); //todo apiden gelen... bana burdan username ve token lazim 
            console.log(userInfo); //todo apiye giden...
            dispatch(registerSuccess(data))
            navigagte("/stock")
        } catch (error) {
            dispatch(fetchFail)
            console.log(error);
        }
    }

    return register;
}

export default useAuthCall