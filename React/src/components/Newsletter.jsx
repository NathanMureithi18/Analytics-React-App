import React from "react";

const Newsletter = () => {
	return (
		<div className="w-full">
			<div className="max-w-[1240px] mx-auto p-5 grid lg:grid-cols-3">
				<div className="mt-6 p-3 lg:col-span-2">
					<h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-white">
						Want tips & tricks to optimize your flow?
					</h1>
					<p className="text-white md:text-2xl text-1xl mt-3">
						Sign up to our newsletter and stay up to date.
					</p>
				</div>
				<div className="my-4 px-3">
					<div className="">
						<div className="flex flex-col sm:flex-row items-center justify-between">
							<input
								className="p-3 text-xl flex w-full rounded-md text-black"
								type="email"
								placeholder="Enter Email"
							/>
							<button className="bg-[#00df9a] rounded-lg font-medium mt-5 ml-4 my-6 px-6 py-3 w-[250px]  text-black text-xl hover:bg-green-500 transition duration-300 ">
								Notify Me
							</button>
						</div>
						<p className="text-white">
							We care about the protection of your data. Read our{" "}
							<span className="text-[#00df9a]">Privacy policy</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
