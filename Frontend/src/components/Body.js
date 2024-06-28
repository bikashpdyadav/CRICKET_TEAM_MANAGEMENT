import { FRONT_BG_URL } from "../utils/constants";

const Body = () => {
    return (
        <div className="h-full flex bg-orange-300">
            <div className="p-24 flex flex-col justify-items-center">
                <h1 className="text-6xl font-bold mt-16 p-4">
                    Looking Forward To Tournament
                </h1>
                <h3 className="text-4xl font-semibold m-4 p-4"> 
                    Find us at
                </h3>
                <div className="flex items-center">
                    <button className="m-8 p-4 border border-solid border-black rounded-xl hover:bg-orange-500 hover:cursor-pointer">
                        AppStore
                    </button>
                    <button className="m-8 p-4 border border-solid border-black rounded-xl hover:bg-orange-500 hover:cursor-pointer">Google Play</button>
                </div>
            </div>
            <div className="flex items-center justify-center m-4 p-4 w-[70%]">
                <img className="h-[80%]" src={FRONT_BG_URL} alt="Alternative"/>
            </div>
        </div>
    );
};

export default Body; 