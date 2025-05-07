import Footer from "@/components/common/Footer";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<div className="pt-16 bg-black" />
			{children}
			<Footer />
		</div>
	);
}

export default layout;
