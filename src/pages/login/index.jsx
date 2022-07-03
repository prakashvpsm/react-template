import React from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {


    const navigate = useNavigate()


    const login = () => {
        localStorage.setItem('user', 'test')
        navigate('/')
    }


    return <div className='flex w-4/6  mx-auto flex-col gap-5 h-screen text-center justify-center'>
        <h2 className='text-xl font-bold text-center'>Welcome to login page! </h2>
        <p className='text-sm font-bold text-center'>Please login to continue</p>
        <button onClick={login} className="bg-blue-700 mx-auto p-2 text-center text-white w-20 rounded border-0"> Login</button>
    </div>;
}


export default Login;;