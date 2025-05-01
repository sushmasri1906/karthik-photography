// src/app/category/[slug]/page.tsx
import { client } from "@/lib/sanity";
import { getCategoryPageData } from "@/lib/queries";
import Image from "next/image";
import { notFound } from "next/navigation";
import ClientSlider from "@/components/ClientSlider";

const DEFAULT_IMAGE = "/default.jpg"; 

export default async function CategoryPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const slug = await params;
	const data = await client.fetch(getCategoryPageData(slug.slug));
	const { category, featuredGalleries, galleries } = data;

	if (!category) {
		notFound();
	}

	return (
		<div className="">
			{featuredGalleries?.length > 0 && (
				<div className="">
					<ClientSlider
						images={
							featuredGalleries[0]?.images?.map(
								(img: { asset: { url: string } }) => img?.asset?.url
							) || []
						}
					/>
				</div>
			)}

			<p className="w-full px-12 md:px-32 py-12 text-center text-white bg-black text-2xl md:text-3xl font-extralight">
				{category.description}
			</p>

			<div className="bg-black    py-10">
				{galleries.map(
					(
						gallery: { images: { asset: { url: string } }[] },
						index: number
					) => (
						<div
							key={index}
							className="columns-2 md:columns-3 lg:columns-4 gap-[4px]">
							{gallery.images?.map(
								(img: { asset: { url: string } }, idx: number) => (
									<Image
										key={idx}
										src={img?.asset?.url || DEFAULT_IMAGE}
										alt={`Gallery Image ${idx}`}
										width={500}
										height={400}
										className="mb-[1px] w-full h-auto object-cover break-inside-avoid"
									/>
								)
							)}
						</div>
					)
				)}
			</div>
		</div>
	);
}
