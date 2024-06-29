import { Link } from 'react-router-dom';

const Team = () => {
    return (
        <div className="h-full p-16 flex flex-col gap-8 bg-orange-300">
            <div className="p-4 flex flex-wrap justify-between bg-orange-200 rounded-3xl">
                <div className="m-4 flex gap-2">
                    <input className="border border-solid border-black px-2" type="text" placeholder="Search"/>
                    <h3 className="text-2xl font-semibold">Search a Team</h3>
                </div>
                <Link to="/registerteam">
                    <div className="mx-16 my-2 flex items-center justify-center">
                        <button className="p-2 border border-solid border-black rounded-xl hover:bg-orange-500 hover:cursor-pointer">Register a team</button>
                    </div>
                </Link>
            </div>
            <div className="h-full p-12 flex flex-col flex-wrap bg-orange-200 rounded-3xl">
                <h1 className="text-4xl font-semibold my-4">Trending Searches</h1>
                <div className="flex border border-solid border-black rounded-3xl w-fit m-4 p-4">
                    <img className="mx-4 border border-solid border-black" src="" alt="Default team image"/>
                    <h2>Default Team Name</h2>
                </div>
                <div className="flex border border-solid border-black rounded-3xl w-fit m-4 p-4">
                    <img className="mx-4 border border-solid border-black" src="" alt="Default team image"/>
                    <h2>Default Team Name</h2>
                </div>
                <div className="flex border border-solid border-black rounded-3xl w-fit m-4 p-4">
                    <img className="mx-4 border border-solid border-black" src="" alt="Default team image"/>
                    <h2>Default Team Name</h2>
                </div>
                <div className="flex border border-solid border-black rounded-3xl w-fit m-4 p-4">
                    <img className="mx-4 border border-solid border-black" src="" alt="Default team image"/>
                    <h2>Default Team Name</h2>
                </div>
                <div className="flex border border-solid border-black rounded-3xl w-fit m-4 p-4">
                    <img className="mx-4 border border-solid border-black" src="" alt="Default team image"/>
                    <h2>Default Team Name</h2>
                </div>
                <div className="flex border border-solid border-black rounded-3xl w-fit m-4 p-4">
                    <img className="mx-4 border border-solid border-black" src="" alt="Default team image"/>
                    <h2>Default Team Name</h2>
                </div>
                <div className="flex border border-solid border-black rounded-3xl w-fit m-4 p-4">
                    <img className="mx-4 border border-solid border-black" src="" alt="Default team image"/>
                    <h2>Default Team Name</h2>
                </div>
            </div>
        </div>
    );
};

export default Team; 