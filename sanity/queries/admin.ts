export const allUsersQuery = `
  *[_type == "user"]{
    _id,
    clerkId,
    email,
    name,
    role,
    _createdAt
  } | order(_createdAt desc)
`;
