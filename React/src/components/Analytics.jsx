import React from "react";
import Laptop from "../assets/images/Laptop.jpeg"; // Importing the image correctly

const Analytics = () => {
	return (
		<div className="bg-white">
			<div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
				<img className="w-full h-full" src={Laptop} alt="Laptop" />
				<div className="flex flex-col justify-center px-4">
					<p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
					<h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-3">
						Manage Data Analytics Centrally
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex corrupti
						tenetur, ducimus quam nulla aspernatur fuga? Tenetur alias deserunt quo
						inventore repellat reiciendis maxime labore rerum commodi nulla?
						Molestias, earum.
					</p>

					<button className="bg-black text-[#00df9a] max-w-[300px] mx-auto md:mx-0 text-2xl px-6 py-3 rounded-lg mt-5 mb-4 md:mb-0 font-bold hover:bg-green-500 hover:text-black transition duration-300">
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default Analytics;
