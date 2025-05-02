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
				<div className="relative">
					<ClientSlider images={featuredGalleries[0]?.images || []} />
				</div>
			)}

			<p className="px-12 md:px-32 py-12 text-center text-white bg-black text-2xl md:text-3xl font-extralight">
				{category.description}
			</p>

			<div className="bg-black ">
				{galleries.map(
					(
						gallery: { title: string; images: { asset: { url: string } }[] },
						index: number
					) => (
						<div key={index} className="px-0 sm:px-0 md:px-0 lg:px-0 mb-12">
							<div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-0">
								{gallery.images?.map(
									(img: { asset: { url: string } }, idx: number) => (
										<div
											key={idx}
											className="mb-0 break-inside-avoid overflow-hidden">
											<Image
												src={img?.asset?.url || DEFAULT_IMAGE}
												alt={`Gallery Image ${idx}`}
												width={400}
												height={300}
												className="w-full h-auto object-cover"
											/>
										</div>
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
