import { Link } from 'react-router-dom';
import { HEADER_LOGO_URL } from '../utils/constants';

const Header = () => {
    return (
        <div className="w-full flex bg-orange-400">
            <div className='flex'>
                <img className='p-4 w-1/2' src={HEADER_LOGO_URL} alt='default'></img>
            </div>

            <div className='m-6'>
                <ul className='flex items-center justify-between'>
                    <li className="m-2 p-4 text-xl font-semibold hover:text-blue-700">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="m-2 p-4 text-xl font-semibold hover:text-blue-700">
                        <Link to="/tournament">Tournament</Link>
                    </li>
                    <li className="m-2 p-4 text-xl font-semibold hover:text-blue-700">
                        <Link to="/team">Team</Link>    
                    </li>
                    <li className="m-2 p-4 text-xl font-semibold hover:text-blue-700">
                        <Link to="/player">Player</Link>
                    </li>
                    <li className="m-2 p-4 text-xl font-semibold hover:text-blue-700">
                        <Link to="/staff">Staff</Link>
                    </li>
                    <li className="m-2 p-4 text-xl font-semibold hover:text-blue-700">
                        <Link to="/schedule">Schedule</Link>
                    </li>
                    <li className="m-2 p-4 text-xl font-semibold hover:text-blue-700">
                        <Link to="/location">Location</Link>
                    </li>
                    <li className="ml-2 text-xl font-semibold hover:text-blue-700">
                        <Link to="/signup">Signup</Link>
                    </li>
                    <li className="text-xl font-semibold hover:text-blue-700">
                        <p>/</p>
                    </li>
                    <li className="text-xl font-semibold hover:text-blue-700">
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;