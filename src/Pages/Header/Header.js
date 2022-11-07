import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="p-4 bg-black text-green-700">
	<div className="container flex justify-between h-16 mx-auto">
    <a rel="noopener noreferrer" href="/home" aria-label="Back to homepage" className="flex items-center p-2">
			<h2 className='font-poppins text-4xl font-bold'>Travel Hunter</h2>
			<img className='ps-10 w-10' src="https://www.pinclipart.com/picdir/big/29-290936_location-clipart-travel-tourism-world-travel-logo-png.png" alt="" />
		</a>
		<ul className="items-stretch hidden space-x-3 md:flex">
        <li className="flex">
				<Link rel="noopener noreferrer" to="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Home</Link>
			</li>
			
			<li className="flex">
				<Link rel="noopener noreferrer" to="/services" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Services</Link>
			</li>
			<li className="flex">
				<Link rel="noopener noreferrer" to="/blog" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Blog</Link>
			</li>
		</ul>
		<button className="flex justify-end p-4 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
    );
};

export default Header;