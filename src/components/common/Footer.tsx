"use client";

import Link from "next/link";
import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-black text-white py-10 px-4">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
				{/* Left: Branding */}
				<div className="text-center md:text-left">
					<h2 className="text-2xl font-semibold tracking-wide">
						Capture Moments
					</h2>
					<p className="text-sm text-gray-400 mt-1">
						Preserving your beautiful memories.
					</p>
				</div>

				{/* Center: Navigation + Socials */}
				<div className="flex flex-col items-center gap-4">
					<div className="flex gap-6 text-sm font-medium">
						<Link href="/" className="hover:underline">
							Home
						</Link>
						<Link href="/gallery" className="hover:underline">
							Gallery
						</Link>
						<Link href="/contact" className="hover:underline">
							Contact
						</Link>
					</div>
					<div className="flex items-center gap-4 mt-2">
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:text-pink-500 transition-colors text-xl">
							<FaFacebookF />
						</a>
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:text-pink-500 transition-colors text-xl">
							<FaInstagram />
						</a>
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:text-pink-500 transition-colors text-xl">
							<FaTwitter />
						</a>
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:text-pink-500 transition-colors text-xl">
							<FaLinkedinIn />
						</a>
					</div>
				</div>

				{/* Right: Developer Credit */}
				<div className="text-center md:text-right text-sm text-gray-400">
					<p>
						Developed by{" "}
						<a
							href="https://www.hsdev.in/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-purple-500 hover:underline">
							hsdev.in
						</a>
					</p>
					<p>© {new Date().getFullYear()} All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
