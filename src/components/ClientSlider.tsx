"use client"; // Mark this file as a client-side component

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

interface ClientSliderProps {
	images: string[];
	className?: string;
}

const ClientSlider = ({ images }: ClientSliderProps) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true, // Automatically slide after some time
		autoplaySpeed: 3000, // Adjust autoplay speed (3 seconds)
		pauseOnHover: true, // Pause autoplay when user hovers
		arrows: true, // Enable navigation arrows
	};

	// Ensure there are images to display
	if (!images || images.length === 0) {
		return (
			<div className="w-full h-96 flex justify-center items-center bg-gray-200 rounded-lg">
				<span className="text-xl text-gray-500">No images available</span>
			</div>
		);
	}

	return (
		<div className="w-full h-screen rounded-lg overflow-hidden shadow-lg">
			<Slider {...settings}>
				{images.map((img, i) => (
					<div
						key={i}
						className="w-full h-screen flex justify-center items-center">
						<img
							src={img}
							alt={`Featured Image ${i + 1}`}
							className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:scale-105"
						/>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default ClientSlider;
