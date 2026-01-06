// CLIENT FIELDS
export const clientFields = `
  _id,
  name,
  email,
  phone,
  company,
  status,
  createdAt,

  equipmentOwned[]->{
    _id,
    name,
    brand,
    mainCategory,
    image
  },

  equipmentNeeds[]->{
    _id,
    name,
    brand,
    mainCategory
  }
`;

// GET ALL CLIENTS
export const getAllClientsQuery = `
  *[_type == "clients"] | order(createdAt desc) {
    ${clientFields}
  }
`;

// GET CLIENT BY ID
export const getClientByIdQuery = `
  *[_type == "clients" && _id == $id][0] {
    ${clientFields}
  }
`;

// GET CLIENT BY STATUS
export const getClientsByStatusQuery = `
  *[_type == "clients" && status == $status] | order(createdAt desc) {
    ${clientFields}
  }
`;

// SEARCH CLIENTS
export const searchClientsQuery = `
  *[_type == "clients" &&
    (
      name match $query ||
      email match $query ||
      company match $query
    )
  ] | order(createdAt desc) {
    ${clientFields}
  }
`;

// GET CLIENTS BY EQUIPMENT
export const getClientsByEquipmentQuery = `
  *[_type == "clients" && references($productId)] | order(createdAt desc) {
    ${clientFields}
  }
`;

// GET CLIENT EQUIPMENT TIMELINE
export const getClientEquipmentTimelineQuery = `
  *[_type == "equipmentEvent" && client._ref == $clientId]
  | order(eventDate desc) {
    _id,
    eventType,
    reason,
    notes,
    eventDate,

    lastEquipment->{
      _id,
      name,
      brand
    },

    currentEquipment->{
      _id,
      name,
      brand
    }
  }
`;

// GET CLIENT SELECT LIST
export const getClientSelectListQuery = `
  *[_type == "clients"] | order(name asc) {
    _id,
    name,
    company
  }
`;

// CLIENT COUNTS
export const clientCountsQuery = `
{
  "active": count(*[_type == "clients" && status == "active"]),
  "inactive": count(*[_type == "clients" && status == "inactive"]),
  "archived": count(*[_type == "clients" && status == "archived"])
}
`;
