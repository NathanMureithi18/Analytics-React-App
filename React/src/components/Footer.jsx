import React from "react";
import {
	FaDribbbleSquare,
	FaFacebookSquare,
	FaGithubSquare,
	FaInstagram,
	FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
	return (
		// Parent Div
		<div className="bg-gray-900 px-0 md:px-5">
			<div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-12 text-gray-300">
				<div>
					<h1 className="w-full text-3xl font-bold text-[#00df9a]">ANALYTICS.</h1>

					<p className="text-white mt-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, eum
						labore! Sunt commodi omnis veniam cum animi aliquam quisquam, laboriosam
						quasi! Temporibus fuga sed quae officia maxime, inventore labore ut?
					</p>

					<div className="text-white flex md:w-[75%] my-6 justify-between">
						<a
							href="https://www.facebook.com/"
							target="_blank"
							rel="noopener noreferrer"
							title="Facebook"
						>
							<FaFacebookSquare size={30} />
						</a>
						<a
							href="https://www.instagram.com/"
							target="_blank"
							rel="noopener noreferrer"
							title="Instagram"
						>
							<FaInstagram size={30} />
						</a>
						<a
							href="https://twitter.com/home?lang=en"
							target="_blank"
							rel="noopener noreferrer"
							title="Twitter"
						>
							<FaTwitterSquare size={30} />
						</a>
						<a
							href="https://github.com/NathanMureithi18"
							target="_blank"
							rel="noopener noreferrer"
							title="GitHub"
						>
							<FaGithubSquare size={30} />
						</a>
						<a
							href="https://dribbble.com/account"
							target="_blank"
							rel="noopener noreferrer"
							title="Dribbble"
						>
							<FaDribbbleSquare size={30} />
						</a>
					</div>
				</div>
				<div className="lg:col-span-2 flex justify-between mt-6">
					<div>
						<h6 className="font-medium text-gray-400">Solutions</h6>
						<ul>
							<li className="py-2 text-sm">Analytics</li>
							<li className="py-2 text-sm">Marketing</li>
							<li className="py-2 text-sm">Commerce</li>
							<li className="py-2 text-sm">Insights</li>
						</ul>
					</div>
					<div>
						<h6 className="font-medium text-gray-400">Support</h6>
						<ul>
							<li className="py-2 text-sm">Prcing</li>
							<li className="py-2 text-sm">Documentation</li>
							<li className="py-2 text-sm">Guides</li>
							<li className="py-2 text-sm">API Status</li>
						</ul>
					</div>
					<div>
						<h6 className="font-medium text-gray-400">Company</h6>
						<ul>
							<li className="py-2 text-sm">About</li>
							<li className="py-2 text-sm">Blogs</li>
							<li className="py-2 text-sm">Jobs</li>
							<li className="py-2 text-sm">Press</li>
							<li className="py-2 text-sm">Careers</li>
						</ul>
					</div>
					<div>
						<h6 className="font-medium text-gray-400">Legal</h6>
						<ul>
							<li className="py-2 text-sm">Claim</li>
							<li className="py-2 text-sm">Policy</li>
							<li className="py-2 text-sm">Terms</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
