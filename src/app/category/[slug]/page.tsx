// src/app/category/[slug]/page.tsx
import { client } from "@/lib/sanity";
import { getCategoryPageData } from "@/lib/queries";
import Image from "next/image";
import { notFound } from "next/navigation";
import ClientSlider from "@/components/ClientSlider";

const DEFAULT_IMAGE = "/default.jpg"; // Public folder fallback image

export default async function CategoryPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	// Fetch category data by slug using the GROQ query
	const slug = await params;
	const data = await client.fetch(getCategoryPageData(slug.slug));
	const { category, featuredGalleries, galleries } = data;

	// Handle the case where category data is not found
	if (!category) {
		notFound();
	}

	return (
		<div className="px-4 md:px-12 py-8">
			{/* Category Title */}
			<h1 className="text-4xl font-bold">{category.title}</h1>

			{/* Hero Image */}
			<div className="mt-6">
				{category.heroImage && (
					<Image
						src={category.heroImage || DEFAULT_IMAGE}
						alt={`Hero Image for ${category.title}`}
						width={1200}
						height={600}
						className="w-full object-cover rounded-lg"
					/>
				)}
			</div>

			{/* Category Description */}
			<p className="mt-6 text-lg">{category.description}</p>

			{/* Featured Galleries (Carousel of Featured Images) */}
			{featuredGalleries?.length > 0 && (
				<div className="mt-10">
					<h2 className="text-2xl font-semibold mb-4">Featured Galleries</h2>
					<ClientSlider
						images={
							featuredGalleries[0]?.images?.map(
								(img: { asset: { url: string } }) => img?.asset?.url
							) || []
						}
					/>
				</div>
			)}

			{/* All Galleries */}
			<div className="mt-10 space-y-10">
				{galleries.map(
					(
						gallery: { images: { asset: { url: string } }[] },
						index: number
					) => (
						<div key={index}>
							<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
								{gallery.images?.map(
									(img: { asset: { url: string } }, idx: number) => (
										<Image
											key={idx}
											src={img?.asset?.url || DEFAULT_IMAGE}
											alt={`Gallery Image ${idx}`}
											width={300}
											height={200}
											className="rounded-md object-cover"
										/>
									)
								)}
							</div>
						</div>
					)
				)}
			</div>
		</div>
	);
}
