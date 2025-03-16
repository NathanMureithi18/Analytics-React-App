import React, { useState, useRef, useEffect } from "react";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

const NavBar = () => {
	const [nav, setNav] = useState(false);
	const navRef = useRef(null); // Reference for the navbar

	const handleNav = () => {
		setNav(!nav);
	};

	// Close nav when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (navRef.current && !navRef.current.contains(event.target)) {
				setNav(false);
			}
		};

		// Attach the event listener when nav is open
		document.addEventListener("mousedown", handleClickOutside);

		// Cleanup function to remove the event listener
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [nav]); // Runs whenever `nav` changes

	return (
		<div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto p-4 text-white">
			<h1 className="w-full text-3xl font-bold text-[#00df9a]">ANALYTICS.</h1>
			<ul className="hidden md:flex uppercase">
				<li className="p-4">Home</li>
				<li className="p-4">Company</li>
				<li className="p-4">Resources</li>
				<li className="p-4">About</li>
				<li className="p-4">Contact</li>
			</ul>
			<div onClick={handleNav} className="block md:hidden">
				{nav ? <IoCloseSharp size={25} /> : <IoMenu size={25} />}
			</div>
			{/* Corrected menu toggle logic */}
			<div
				ref={navRef}
				className={
					nav
						? "fixed left-0 top-0 w-[60%] h-[80vh] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
						: "fixed left-[-100%]"
				}
			>
				<h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">ANALYTICS.</h1>
				<ul className="uppercase p-4">
					<li className="p-4 border-b border-gray-600">Home</li>
					<li className="p-4 border-b border-gray-600">Company</li>
					<li className="p-4 border-b border-gray-600">Resources</li>
					<li className="p-4 border-b border-gray-600">About</li>
					<li className="p-4 border-b border-gray-600">Contact</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
