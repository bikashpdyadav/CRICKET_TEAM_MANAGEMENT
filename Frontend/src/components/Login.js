import { LOGIN_IMAGE_URL } from "../utils/constants";

const Login = () => {
    return (
        <div className="h-full flex justify-center items-center bg-orange-300">
            <div className="m-8 w-1/2 p-16 flex flex-col bg-orange-200 rounded-3xl">
                <div className="flex items-center justify-center">
                    <img className="w-4/5 p-8" src={LOGIN_IMAGE_URL}/>
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
                    <button className="border border-solid border-black mt-8 p-4 w-full rounded-2xl hover:bg-orange-400">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;