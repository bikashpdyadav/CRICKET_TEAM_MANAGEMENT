const PlayerCard = () => {
    return (
        <div className="h-full flex justify-center items-center bg-orange-300">
            <div className="w-2/3 m-8 p-16 bg-orange-200 rounded-3xl">
                <div className="flex flex-col items-center justify-center p-4">
                    <div className="m-2 p-4">
                        <img className="border border-solid border-black p-24 rounded-[50%]" src="" alt="Player Image"/>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-2xl font-semibold m-2 p-2">Player name</h1>
                        <h2 className="text-xl font-semibold m-2 p-2">Player Team</h2>
                    </div>
                </div>
                <div className="m-4 p-4">
                    <h1 className="m-4 text-3xl font-bold">PERSONAL INFORMATION</h1>
                    <div className="flex items-center justify-between border boder-solid border-black m-4 p-4">
                        <h3>Born</h3>
                        <h3>Jan 20</h3>
                    </div>
                    <div className="flex items-center justify-between border boder-solid border-black m-4 p-4">
                        <h3>Born</h3>
                        <h3>Jan 20</h3>
                    </div>
                    <div className="flex items-center justify-between border boder-solid border-black m-4 p-4">
                        <h3>Born</h3>
                        <h3>Jan 20</h3>
                    </div>
                    <div className="flex items-center justify-between border boder-solid border-black m-4 p-4">
                        <h3>Born</h3>
                        <h3>Jan 20</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}; 

export default PlayerCard;