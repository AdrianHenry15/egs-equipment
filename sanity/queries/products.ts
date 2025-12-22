// Single product by Sanity _id
export const productByIdQuery = `
  *[_type == "product" && _id == $id][0]
`;

// Product by slug
export const productBySlugQuery = `
  *[_type == "product" && slug.current == $slug][0]
`;

// Public product list
export const productsQuery = `
  *[_type == "product"]{
    _id,
    name,
    slug,
    description,
    mainCategory,
    tags,
    brand,
    image,
    usedBy,
    popular
  } | order(popular desc, name asc)
`;

// Filtered products (category / brand / tag)
export const filteredProductsQuery = `
  *[_type == "product"
    && (!defined($category) || mainCategory == $category)
    && (!defined($brand) || brand == $brand)
    && (!defined($tag) || $tag in tags)
  ]{
    _id,
    name,
    slug,
    description,
    mainCategory,
    tags,
    brand,
    image,
    usedBy,
    popular
  } | order(popular desc, name asc)
`;

// Admin: full product
export const adminProductsQuery = `
  *[_type == "product"]{
    ...
  } | order(_createdAt desc)
`;
