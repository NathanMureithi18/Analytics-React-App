import React from "react";
import Single from "../assets/images/single.png";
import Double from "../assets/images/double.png";
import Triple from "../assets/images/triple.png";
const Cards = () => {
	return (
		<div className="w-full py-[7rem] bg-white">
			<div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-x-8 px-3">
				<div className="w-full flex flex-col pt-8 pb-6 my-6 text-center rounded-lg hover:scale-105 transition-transform duration-300 justify-center shadow-xl">
					<img className="w-20 mx-auto" src={Single} alt="" />
					<h2 className="font-bold m-3 text-2xl">Single User</h2>
					<p className="font-bold text-4xl">$149</p>
					<div className="flex flex-col font-medium text-center">
						<p className="py-2 border-b border-gray-300 mx-8 mt-8">500 GB Storage</p>
						<p className="py-2 border-b border-gray-300 mx-8">1 User Allowed</p>
						<p className="py-2 border-b border-gray-300 mx-8">Send up to 2GB</p>
					</div>
					<button className="bg-[#00df9a] max-w-[300px] mx-auto text-black text-xl px-6 py-2 rounded-lg mt-5 font-bold hover:bg-green-500 transition duration-300">
						Start Trial
					</button>
				</div>
				<div className="w-full bg-gray-200 pt-8 pb-6 flex flex-col p-4 my-6 text-center rounded-lg hover:scale-105 transition-transform duration-300 justify-center shadow-xl">
					<img className="w-20 mx-auto " src={Double} alt="" />
					<h2 className="font-bold m-3 text-2xl">Partnership</h2>
					<p className="font-bold text-4xl">$199</p>
					<div className="flex flex-col font-medium text-center">
						<p className="py-2 border-b border-gray-300 mx-8 mt-8">1 TB Storage</p>
						<p className="py-2 border-b border-gray-300 mx-8">3 Users Allowed</p>
						<p className="py-2 border-b border-gray-300 mx-8">Send up to 10GB</p>
					</div>
					<button className="bg-black max-w-[300px] mx-auto text-[#00df9a] text-xl px-6 py-2 rounded-lg mt-5 font-bold hover:bg-green-500 hover:text-black transition duration-300">
						Start Trial
					</button>
				</div>
				<div className="w-full flex pt-8 pb-6 flex-col p-4 my-6 text-center rounded-lg hover:scale-105 transition-transform duration-300 justify-center shadow-xl">
					<img className="w-20 mx-auto" src={Triple} alt="" />
					<h2 className="font-bold m-3 text-2xl">Group Account</h2>
					<p className="font-bold text-4xl">$299</p>
					<div className="flex flex-col font-medium text-center">
						<p className="py-2 border-b border-gray-300 mx-8 mt-8">5 TB Storage</p>
						<p className="py-2 border-b border-gray-300 mx-8">10 Users Allowed</p>
						<p className="py-2 border-b border-gray-300 mx-8">Send up to 20GB</p>
					</div>
					<button className="bg-[#00df9a] max-w-[300px] mx-auto text-black text-xl px-6 py-2 rounded-lg mt-5 font-bold hover:bg-green-500 transition duration-300">
						Start Trial
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cards;
