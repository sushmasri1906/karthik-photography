"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { MouseEventHandler } from "react";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

interface ImageData {
	title: string;
	image: {
		asset: {
			_id?: string;
			url: string;
		};
	};
}

interface ClientSliderProps {
	images: ImageData[];
}

const NextArrow = ({
	onClick,
}: {
	onClick?: MouseEventHandler<HTMLDivElement>;
}) => (
	<div
		className="absolute right-4 top-1/2 z-40 transform -translate-y-1/2 text-white text-4xl md:text-5xl cursor-pointer"
		onClick={onClick}>
		<FiChevronRight />
	</div>
);

const PrevArrow = ({
	onClick,
}: {
	onClick?: MouseEventHandler<HTMLDivElement>;
}) => (
	<div
		className="absolute left-4 top-1/2 z-40 transform -translate-y-1/2 text-white text-4xl md:text-5xl cursor-pointer"
		onClick={onClick}>
		<FiChevronLeft />
	</div>
);

const ClientSlider = ({ images }: ClientSliderProps) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		arrows: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	if (!images || images.length === 0) {
		return (
			<div className="w-full h-[400px] flex justify-center items-center bg-gray-200 rounded-lg">
				<span className="text-xl text-gray-500">No images available</span>
			</div>
		);
	}

	return (
		<div className="relative w-full h-[670px] overflow-hidden shadow-lg">
			<Slider {...settings}>
				{images.map((img, i) => (
					<div
						key={i}
						className="relative w-full h-[670px] flex justify-center items-center">
						<Image
							src={img?.image.asset?.url || "/default.jpg"}
							alt={`Featured Image ${i + 1}`}
							width={1600}
							height={670} // Specific height in pixels
							className="object-cover transition-all duration-300 hover:scale-105"
							sizes="(max-width: 768px) 100vw, 100vw"
							priority
						/>
					</div>
				))}
			</Slider>

			<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50">
				<a
					href="/gallery"
					className="text-white bg-transparent border border-white px-6 py-2 font-medium shadow-md hover:bg-white hover:text-black transition-colors duration-300">
					View Gallery
				</a>
			</div>
		</div>
	);
};

export default ClientSlider;
