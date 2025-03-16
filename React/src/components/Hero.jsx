import React from "react";
import Typed from "react-typed";
import { useRef, useEffect } from "react";

const Hero = () => {
	const typedRef = useRef(null);

	useEffect(() => {
		if (!typedRef.current) {
			console.error(
				"Typed.js ref is null. Ensure the component renders properly."
			);
		}
	}, []);

	return (
		<div className="text-white">
			<div className="max-w-[800px] mt-[-110px] md:mt-[-130px] w-full h-screen mx-auto text-center flex flex-col justify-center">
				<p className="text-[#00df9a] text-xl md:text-2xl font-bold p-2">
					Grow With Data Analytics
				</p>
				<h1 className="md:text-7xl sm:text-6xl text-5xl font-bold md:py-6 mb-4 md:mb-0">
					Grow With Data
				</h1>
				<div>
					<p className="md:text-5xl sm:text-4xl text-xl font-bold">
						Fast, Flexible financing for
						<span className="ms-2 md:text-5xl sm:text-4xl text-xl font-bold text-[#00df9a]">
							<Typed
								strings={["BTC", "BTB", "SaaS"]}
								typeSpeed={100}
								backSpeed={140}
								loop
								showCursor
								ref={(el) => (typedRef.current = el)}
							/>
						</span>
					</p>
					<p className="text-gray-4600 pt-3 md:text-2xl text-xl font-bold">
						Monitor your data analytics to increase revenue for BTB, BTC $ SAAS
						platforms.
					</p>
				</div>
				{/* CTA Button */}
				<button className="bg-[#00df9a] max-w-[300px] mx-auto text-black text-xl px-6 py-3 rounded-lg mt-4 font-bold hover:bg-green-500 transition duration-300">
					Get Started
				</button>
			</div>
		</div>
	);
};

export default Hero;
