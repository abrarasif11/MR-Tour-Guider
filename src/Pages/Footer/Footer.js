import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../assets/travel-icon--be-found-online-9.png'

const Footer = () => {
    return (
        <footer className="px-4 py-8 bg-black text-green-700">
	<div className="font-poppins container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
			<div className="flex items-center justify-center flex-shrink-0 w-20 h-12 rounded-full ">
				<Link to='/'>
				<img src={photo} alt="" />
				</Link>
			</div>
			<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
				<li>
					<a rel="noopener noreferrer" href="#">Terms of Use</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#">Privacy</a>
				</li>
			</ul>
		</div>
		<ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
			<li>
				<a rel="noopener noreferrer" href="#">Instagram</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#">Facebook</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#">Twitter</a>
			</li>
		</ul>
	</div>
    <div className="font-poppins py-6 text-sm text-center text-green-700">© 2022 Travel Hunter. All rights reserved.</div>
</footer>
    );
};

export default Footer;