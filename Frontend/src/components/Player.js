const Player = () => {
    return (
        <div className="h-screen w-full flex justify-between items-center bg-orange-300 p-16 pr-4">
            <div className="w-1/3 flex justify-center items-center mr-16">
                <h1 className="text-6xl font-bold">Team Details</h1>
            </div>
            <div className="w-2/3 p-12 bg-orange-200 rounded-3xl">
                <h1 className="text-4xl font-semibold my-4">Enter the details of player</h1>
                <div className="w-full">
                    <input type="text" className="border border-solid border-black w-full my-4 p-2" placeholder="Enter the player name"/>
                    <input type="number" className="border border-solid border-black w-full my-4 p-2" placeholder="Enter the player age"/>
                    <input type="text" className="border border-solid border-black w-full my-4 p-2" placeholder="Enter the player gender"/>
                    <input type="text" className="border border-solid border-black w-full my-4 p-2" placeholder="Enter the role of player"/>
                    <input type="number" className="border border-solid border-black w-full my-4 p-2" placeholder="Enter the jersey number"/>
                    <input type="text" className="border border-solid border-black w-full my-4 p-2" placeholder="Enter the address"/>
                </div>   
                <div>
                    <button className="border border-solid border-black my-4 p-2 w-full rounded-2xl hover:bg-orange-400">Submit</button>
                    <button className="border border-solid border-black my-4 p-2 w-full rounded-2xl hover:bg-orange-400">Reset</button>
                </div>
            </div>
        </div>
    )
}


export default Player;