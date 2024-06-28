const Signup = () => {
    return (
        <div className="h-full flex justify-center items-center bg-orange-300">
            <div className="m-8 p-16 bg-orange-200 rounded-3xl">
                <div className="flex flex-col items-start justify-center">
                    <h1 className="text-5xl font-bold mb-6">Sign up</h1>
                    <p className="text-2xl font-semibold my-6">Please fill in this form to create an account</p>
                </div>
                <div className="flex flex-col items-start w-full">
                    <div className="w-full my-4">
                        <h1 className="text-2xl font-semibold">Email</h1>
                        <input type="email" className="border border-solid border-black w-full p-2" placeholder="Enter Email"/>
                    </div>
                    <div className="w-full my-4">
                        <h1 className="text-2xl font-semibold">Password</h1>
                        <input type="password" className="border border-solid border-black w-full p-2" placeholder="Enter Password"/>
                    </div>
                    <div className="w-full my-4">
                        <h1 className="text-2xl font-semibold">Confirm Password</h1>
                        <input type="password" className="border border-solid border-black w-full p-2" placeholder="Re-Enter Password"/>
                    </div>
                    <div className="flex my-4">
                        <input type="checkbox"/>
                        <h1 className="mx-2">Remember me</h1>
                    </div>
                </div>   
                <div className="flex items-center justify-center">
                    <button className="border border-solid border-black mx-8 p-2 w-full rounded-2xl hover:bg-orange-400">Cancel</button>
                    <button className="border border-solid border-black mx-8 p-2 w-full rounded-2xl hover:bg-orange-400">Signup</button>
                </div>
            </div>
        </div>
    )
}

export default Signup;