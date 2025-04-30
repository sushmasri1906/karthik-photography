// Query to fetch the category page data with galleries and featured images
export const getCategoryPageData = (slug: string) => `
{
  "category": *[_type == "photoCategory" && slug.current == "${slug}"][0]{
    title,
    description,
    "heroImage": photoCategoryImage.asset->url  // Make sure you're getting the correct image URL
  },
  "featuredGalleries": *[_type == "gallery" && category->slug.current == "${slug}" && isFeatured == true]{
    title,
    images[]{
      asset->{
        _id,
        url
      }
    }
  },
  "galleries": *[_type == "gallery" && category->slug.current == "${slug}"]{
    title,
    slug,
    images[]{
      asset->{
        _id,
        url
      }
    }
  }
}
`;
// Query to fetch all categories with the hero banner images
export const getAllCategoriesQuery = `
  *[_type == "photoCategory"]{
    title,
    slug,
    description,
    "image": photoCategoryImage.asset->url // Ensure you're querying this image URL correctly
  }
`;
// Query to fetch home page data
export const getHomePageData = () => `
{
  "categories": *[_type == "photoCategory"]{
    title,
    "slug": slug.current,
    "heroImage": photoCategoryImage.asset->url,  // Ensure this is correctly querying the image URL
    "featuredGalleries": *[_type == "gallery" && category->slug.current == ^.slug.current && isFeatured == true]{
      title,
      images[]{
        asset->{
          _id,
          url
        }
      }
    }
  }
}
`;
