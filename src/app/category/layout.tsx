import React from "react";

function layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<div className="pt-16 bg-black" />
			{children}
		</div>
	);
}

export default layout;
