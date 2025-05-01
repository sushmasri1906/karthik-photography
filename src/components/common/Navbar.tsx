"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import clsx from "clsx";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	const links = [
		{ name: "Home", href: "/" },
		{ name: "Weddings", href: "/category/weddings" },
		{ name: "Baby Shoot", href: "/category/babyshoot" },
		{ name: "FNB", href: "/category/fnb" },
		{ name: "About Us", href: "/about" },
		{ name: "Contact Us", href: "/contact" },
	];

	const isActive = (href: string) =>
		pathname === href || pathname.startsWith(href + "/");

	return (
		<nav className="fixed w-full z-50 bg-transparent text-white">
			<div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
				<div className="text-2xl font-bold">YourLogo</div>

				<div className="md:hidden">
					<button onClick={() => setOpen(!open)}>
						{open ? <FaTimes size={24} /> : <FaBars size={24} />}
					</button>
				</div>

				<ul className="hidden md:flex space-x-8">
					{links.map((link) => (
						<li key={link.name}>
							<Link
								href={link.href}
								className={clsx(
									"transition duration-300",
									isActive(link.href)
										? "text-blue-400 font-semibold"
										: "hover:text-blue-400"
								)}>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</div>

			{open && (
				<div className="md:hidden bg-black bg-opacity-80 px-4 pb-6 pt-2 absolute top-16 left-0 w-full">
					<ul className="space-y-4 text-center">
						{links.map((link) => (
							<li key={link.name}>
								<Link
									href={link.href}
									className={clsx(
										"block transition duration-300",
										isActive(link.href)
											? "text-blue-400 font-semibold"
											: "hover:text-blue-400"
									)}
									onClick={() => setOpen(false)}>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
