// TODO: Status: { status: "new" | "contacted" | "qualified" | "lost" | "converted" }

// LEAD FILEDS
export const leadFields = `
  _id,
  _type,
  firstName,
  lastName,
  email,
  phone,
  company,
  equipmentNeeds,
  equipmentInterest[]->{
    _id,
    name,
    brand,
    mainCategory
  },
  message,
  status,
  createdAt
`;

// GET ALL LEADS
export const getAllLeadsQuery = `
  *[_type == "leads"] | order(createdAt desc) {
    ${leadFields}
  }
`;

// BY STATUS QUERY
export const getLeadsByStatusQuery = `
  *[_type == "leads" && status == $status] | order(createdAt desc) {
    ${leadFields}
  }
`;

// BY ID QUERY
export const getLeadByIdQuery = `
  *[_type == "leads" && _id == $id][0] {
    ${leadFields}
  }
`;

// SEARCH LEADS
export const searchLeadsQuery = `
  *[_type == "leads" &&
    (
      email match $query ||
      firstName match $query ||
      lastName match $query ||
      company match $query
    )
  ] | order(createdAt desc) {
    ${leadFields}
  }
`;

// BY EQUIPMENT NEED
export const getLeadsByEquipmentNeedQuery = `
  *[_type == "leads" && $need in equipmentNeeds] | order(createdAt desc) {
    ${leadFields}
  }
`;

// BY PRODUCT INTEREST
export const getLeadsByProductInterestQuery = `
  *[_type == "leads" && references($productId)] | order(createdAt desc) {
    ${leadFields}
  }
`;

// SELECT LIST
export const getLeadSelectListQuery = `
  *[_type == "leads"] | order(createdAt desc) {
    _id,
    email,
    status
  }
`;

// BY STATUS
export const leadCountsByStatusQuery = `
{
  "new": count(*[_type == "leads" && status == "new"]),
  "contacted": count(*[_type == "leads" && status == "contacted"]),
  "qualified": count(*[_type == "leads" && status == "qualified"]),
  "converted": count(*[_type == "leads" && status == "converted"]),
  "lost": count(*[_type == "leads" && status == "lost"])
}
`;
