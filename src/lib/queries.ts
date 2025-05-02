export const getCategoryPageData = (slug: string) => `
{
  "category": *[_type == "photoCategory" && slug.current == "${slug}"][0]{
    title,
    description,
    "heroImage": photoCategoryImage.asset->url // Assuming the category has a hero image
  },
  "featuredPhotos": *[_type == "featuredPhotos" && category->slug.current =="${slug}"]{
    title,
    image{
      asset->{
        _id,
        url
      }
    }
  },
  "galleries": *[_type == "galleryAlbum" && category->slug.current == "${slug}"]{
    title,
    slug,
    images[] {
      asset->{
        _id,
        url
      }
    }
  }
}
`;
export const getAllCategoriesQuery = `
  *[_type == "photoCategory"]{
    title,
    slug,
    description,
    "heroImage": photoCategoryImage.asset->url
  }
`;
export const getHomePageData = () => `
{
  "categories": *[_type == "photoCategory"]{
    title,
    "slug": slug.current,
    "heroImage": photoCategoryImage.asset->url, // Assuming category has a hero image
    "featuredCarouselPhotos": *[_type == "carouselPhoto" && category->slug.current == ^.slug.current && isFeatured == true && publishedAt <= now()]{
      title,
      image{
        asset->{
          _id,
          url
        }
      }
    }
  }
}
`;
export interface CarouselPhoto {
	_id: string;
	title: string;
	image: {
		asset: {
			_id: string;
			url: string;
		};
	};
	categoryName: string;
	publishedAt: string; // This could be a Date object in JavaScript, but you may want to handle it as a string from the query
}
