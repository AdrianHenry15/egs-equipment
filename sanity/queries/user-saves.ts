export const getUserSavedProductsQuery = `
  *[_type == "userSaves"] | order(createdAt desc) {
    _id,
    clerkId,
    createdAt,
    product->{
      _id,
      name,
      brand
    }
  }
`;
