

import { Link } from 'react-router-dom'; // Make sure to import Link from react-router-dom

const Header = () => {
    return (
        <div className="border-b-2-orange-500 py-6">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-3xl font-bold tracking-tight text-orange-500">
                    QuickBite.com
                </Link>
            </div>
        </div>
    );
};

export default Header;



