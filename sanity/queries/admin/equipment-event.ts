// EQUIPMENT EVENT FIELDS
export const equipmentEventFields = `
  _id,
  eventType,
  reason,
  notes,
  eventDate,

  client->{
    _id,
    name,
    email,
    company
  },

  lastEquipment->{
    _id,
    name,
    brand,
    mainCategory
  },

  currentEquipment->{
    _id,
    name,
    brand,
    mainCategory
  }
`;

// GET ALL EQUIPMENT EVENTS
export const getAllEquipmentEventsQuery = `
  *[_type == "equipmentEvent"] | order(eventDate desc) {
    ${equipmentEventFields}
  }
`;

// GET EQUIPMENT EVENT BY ID
export const getEquipmentEventByIdQuery = `
  *[_type == "equipmentEvent" && _id == $id][0] {
    ${equipmentEventFields}
  }
`;

// GET EVENTS BY CLIENT
export const getEventsByClientQuery = `
  *[_type == "equipmentEvent" && client._ref == $clientId]
  | order(eventDate desc) {
    ${equipmentEventFields}
  }
`;

// GET EVENTS BY EQUIPMENT
export const getEventsByEquipmentQuery = `
  *[_type == "equipmentEvent" &&
    (
      lastEquipment._ref == $productId ||
      currentEquipment._ref == $productId
    )
  ]
  | order(eventDate desc) {
    ${equipmentEventFields}
  }
`;

// GET EVENTS BY TYPE
export const getEventsByTypeQuery = `
  *[_type == "equipmentEvent" && eventType == $eventType]
  | order(eventDate desc) {
    ${equipmentEventFields}
  }
`;

// GET RECENT EQUIPMENT EVENTS
export const getRecentEquipmentEventsQuery = `
  *[_type == "equipmentEvent"]
  | order(eventDate desc)[0...10] {
    ${equipmentEventFields}
  }
`;

// GET EQUIPMENT LIFECYCLE
export const getEquipmentLifecycleQuery = `
  *[_type == "equipmentEvent" &&
    client._ref == $clientId &&
    (
      lastEquipment._ref == $productId ||
      currentEquipment._ref == $productId
    )
  ]
  | order(eventDate asc) {
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

// EQUIPMENT EVENT COUNTS
export const equipmentEventCountsQuery = `
{
  "purchase": count(*[_type == "equipmentEvent" && eventType == "purchase"]),
  "upgrade": count(*[_type == "equipmentEvent" && eventType == "upgrade"]),
  "replacement": count(*[_type == "equipmentEvent" && eventType == "replacement"]),
  "repair": count(*[_type == "equipmentEvent" && eventType == "repair"]),
  "retired": count(*[_type == "equipmentEvent" && eventType == "retired"])
}
`;
