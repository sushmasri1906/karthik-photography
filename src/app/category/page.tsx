import Link from "next/link";
import React from "react";

const page = () => {
	return (
		<div>
			Category Page
			<div>
				<h2>
					<Link href="/category">Categroies</Link>
				</h2>
				<div>
					<Link href="/category/babybump">Baby Bump</Link>
					<Link href="/category/wedding">Wedding</Link>
					<Link href="/category/academy">Academy</Link>
				</div>
			</div>
		</div>
	);
};

export default page;
