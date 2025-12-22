// Fetch saved products for a user
export const userSavedProductsQuery = `
  *[_type == "userSave" && clerkId == $clerkId]{
    "id": _id,
    product->{
      _id,
      name,
      brand,
      mainCategory,
      image,
      details{
        specifications,
        specs_description
      }
    },
    createdAt
  }
`;
