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
  *[_type == "client"] | order(createdAt desc) {
    ${clientFields}
  }
`;

// GET CLIENT BY ID
export const getClientByIdQuery = `
  *[_type == "client" && _id == $id][0] {
    ${clientFields}
  }
`;

// GET CLIENT BY STATUS
export const getClientsByStatusQuery = `
  *[_type == "client" && status == $status] | order(createdAt desc) {
    ${clientFields}
  }
`;

// SEARCH CLIENTS
export const searchClientsQuery = `
  *[_type == "client" &&
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
  *[_type == "client" && references($productId)] | order(createdAt desc) {
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
  *[_type == "client"] | order(name asc) {
    _id,
    name,
    company
  }
`;

// CLIENT COUNTS
export const clientCountsQuery = `
{
  "active": count(*[_type == "client" && status == "active"]),
  "inactive": count(*[_type == "client" && status == "inactive"]),
  "archived": count(*[_type == "client" && status == "archived"])
}
`;
