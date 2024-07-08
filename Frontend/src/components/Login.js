// src/components/Login.js
import { LOGIN_IMAGE_URL } from "../utils/constants";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = () => {
        login();
        navigate('/');
    };

    return (
        <div className="h-full flex justify-center items-center bg-orange-300">
            <div className="m-8 w-1/2 p-16 flex flex-col bg-orange-200 rounded-3xl">
                <div className="flex items-center justify-center">
                    <img className="w-4/5 p-8" src={LOGIN_IMAGE_URL} alt="Login"/>
                </div>
                <div className="flex flex-col items-start w-full">
                    <div className="w-full my-4">
                        <h1 className="text-2xl font-semibold">Username</h1>
                        <input type="email" className="border border-solid border-black w-full p-2" placeholder="Enter username"/>
                    </div>
                    <div className="w-full my-4">
                        <h1 className="text-2xl font-semibold">Password</h1>
                        <input type="password" className="border border-solid border-black w-full p-2" placeholder="Enter Password"/>
                    </div>
                </div>   
                <div className="flex items-center justify-center">
                    <button className="border border-solid border-black mt-8 p-4 w-full rounded-2xl hover:bg-orange-400" onClick={handleLogin}>Login</button>
                </div>
                <div className="m-4 p-4 flex items-center justify-center">
                    <h3 className="p-4 text-2xl font-semibold">If not registered ?</h3>
                    <Link to="/signup" className="w-1/3">
                        <button className="border border-solid border-black p-2 w-full rounded-2xl hover:bg-orange-400">Signup</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
