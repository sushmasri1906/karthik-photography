export default function Home() {
	return (
		<div
			className="h-screen w-full bg-cover bg-center"
			style={{
				backgroundImage:
					"url('https://res.cloudinary.com/djthwunnh/image/upload/v1746597902/k_worwem.jpg')",
			}}>
			<div className="fixed bottom-10 md:bottom-20 left-6 md:left-20 text-white z-50">
				<h3 className="text-xs sm:text-sm md:text-base lg:text-lg italic">
					Capturing moments, telling stories. – Karthik Nani
				</h3>
			</div>
		</div>
	);
}
